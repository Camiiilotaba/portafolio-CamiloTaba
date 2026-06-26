// Generates public/og-image.jpg (1200×630) — the social share card used by
// Open Graph, Twitter Card and the JSON-LD Person image.
// Run with: node scripts/generate-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og-image.jpg');

const W = 1200;
const H = 630;
const FONT = 'Helvetica, Arial, sans-serif';

const pill = (x, label) => `
  <g transform="translate(${x},478)">
    <rect width="${28 + label.length * 13}" height="44" rx="22"
          fill="rgba(16,185,129,0.10)" stroke="rgba(16,185,129,0.35)" stroke-width="1.5"/>
    <text x="${(28 + label.length * 13) / 2}" y="29" text-anchor="middle"
          font-family="${FONT}" font-size="20" font-weight="600" fill="#a7f3d0">${label}</text>
  </g>`;

// lay pills out left-to-right
const pills = ['Laravel', 'PHP', 'Vue', 'Flutter'];
let px = 90;
const pillsSvg = pills
  .map((p) => {
    const svg = pill(px, p);
    px += 28 + p.length * 13 + 18;
    return svg;
  })
  .join('');

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="78%" cy="0%" r="75%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.28"/>
      <stop offset="60%" stop-color="#10b981" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="8%" cy="100%" r="70%">
      <stop offset="0%" stop-color="#0f766e" stop-opacity="0.30"/>
      <stop offset="60%" stop-color="#0f766e" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="rgba(110,231,183,0.10)"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="#03070b"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" fill="url(#g2)"/>

  <!-- left accent bar -->
  <rect x="0" y="0" width="10" height="${H}" fill="#10b981"/>

  <!-- eyebrow -->
  <text x="90" y="150" font-family="${FONT}" font-size="26" font-weight="600"
        letter-spacing="6" fill="#6ee7b7">camilotaba.dev</text>

  <!-- name -->
  <text x="86" y="280" font-family="${FONT}" font-size="116" font-weight="700"
        fill="#ffffff">Camilo Taba</text>

  <!-- role -->
  <text x="90" y="356" font-family="${FONT}" font-size="50" font-weight="700"
        fill="#34d399">Laravel &amp; PHP Developer</text>

  <!-- subtitle -->
  <text x="90" y="408" font-family="${FONT}" font-size="30" font-weight="400"
        fill="#9ca3af">Web &amp; Mobile · Enterprise SaaS</text>

  ${pillsSvg}

  <!-- location bottom-right -->
  <text x="${W - 90}" y="560" text-anchor="end" font-family="${FONT}" font-size="24"
        font-weight="500" fill="#6b7280">Alicante, Spain · Remote</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(out);

console.log('✓ wrote', out);
