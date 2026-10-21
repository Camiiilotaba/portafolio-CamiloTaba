import { readFile, writeFile, mkdir, mkdtemp, copyFile, rm, access } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

const exec = promisify(execFile);
const root = fileURLToPath(new URL('../', import.meta.url));
const data = JSON.parse(await readFile(join(root, 'cv/content.json'), 'utf8'));
const css = await readFile(join(root, 'cv/styles.css'), 'utf8');
const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const list = (items) => `<ul>${items.map((item) => `<li>${escape(item)}</li>`).join('')}</ul>`;

function render(lang) {
  const c = data[lang];
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Camilo Taba - CV (${lang.toUpperCase()})</title><style>${css}</style></head>
<body><main>
<header><h1>${escape(data.name)}</h1><p class="role">${escape(c.role)}</p>
<p class="contact">${escape(c.location)} · <a href="tel:${data.phone.replaceAll(' ', '')}">${escape(data.phone)}</a> · <a href="mailto:${escape(data.email)}">${escape(data.email)}</a></p>
<p class="links">${data.links.map((link) => `<a href="${escape(link.href)}">${escape(link.label)}</a>`).join(' · ')}</p></header>
<section><h2>${escape(c.headings.profile)}</h2><p>${escape(c.profile)}</p></section>
<section><h2>${escape(c.headings.experience)}</h2>${c.experience.map((item) => `<article><h3>${escape(item.role)} <span class="company">| ${escape(item.company)}</span> <span class="meta">| ${escape(item.meta)}</span></h3>${list(item.bullets)}</article>`).join('')}</section>
<section><h2>${escape(c.headings.projects)}</h2>${c.projects.map((item) => `<article><h3>${escape(item.name)} <span class="company">| <a href="${escape(item.url)}">${escape(item.label)}</a></span> <span class="meta">| ${escape(item.status)}</span></h3>${list(item.bullets)}</article>`).join('')}</section>
<section class="education"><h2>${escape(c.headings.education)}</h2>${c.education.map((item) => `<p><strong>${escape(item.title)}</strong> <span class="meta">| ${escape(item.detail)}</span></p>`).join('')}</section>
<section class="skills"><h2>${escape(c.headings.skills)}</h2>${c.skills.map(([label, text]) => `<p><strong>${escape(label)}:</strong> ${escape(text)}</p>`).join('')}<p class="languages"><strong>${escape(c.languagesLabel)}:</strong> ${escape(c.languages)}</p></section>
</main></body></html>\n`;
}

const htmlOnly = process.argv.includes('--html-only');
const out = join(root, 'output/pdf');
await mkdir(out, { recursive: true });
let browser;
if (!htmlOnly) {
  const candidates = [process.env.CV_BROWSER, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome'].filter(Boolean);
  for (const candidate of candidates) {
    try { await access(candidate); browser = candidate; break; } catch {}
  }
  if (!browser) throw new Error('Chrome/Chromium not found. Set CV_BROWSER to its executable, or use --html-only and print the HTML to PDF manually.');
}

for (const lang of ['es', 'en']) {
  const htmlPath = join(out, `cv-${lang}.html`);
  await writeFile(htmlPath, render(lang));
  if (htmlOnly) { console.log(`HTML: ${htmlPath}`); continue; }
  const filename = lang === 'es' ? 'CamiloTaba-CV.pdf' : 'CamiloTaba-CV-en.pdf';
  const pdfPath = join(out, filename);
  const profile = await mkdtemp(join(tmpdir(), 'camilo-cv-'));
  try {
    // Render a self-contained local document, with external hosts disabled.
    await exec(browser, [
      '--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
      '--disable-background-networking', '--disable-extensions', '--disable-sync',
      '--host-resolver-rules=MAP * ~NOTFOUND', `--user-data-dir=${profile}`,
      '--no-pdf-header-footer', '--allow-file-access-from-files',
      `--print-to-pdf=${pdfPath}`, pathToFileURL(htmlPath).href,
    ], { timeout: 60000, maxBuffer: 4 * 1024 * 1024 });
    await access(pdfPath);
    await copyFile(pdfPath, resolve(root, 'public', filename));
    console.log(`PDF: public/${filename}`);
  } finally {
    await rm(profile, { recursive: true, force: true });
  }
}
