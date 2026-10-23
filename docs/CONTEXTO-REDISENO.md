# Contexto del rediseño (rama `redesign`)

Última actualización: 23-10-2026. Los pendientes están en `TODO.md`, en esta misma carpeta. Resumen de las decisiones tomadas con Claude para poder continuar el trabajo
desde cualquier equipo. Para seguir: `git checkout redesign`, abrir Claude Code en esta carpeta y pedirle que lea este archivo.

## Decisiones tomadas

- **Base:** se mantiene el código original (Astro 5 + Tailwind 4, i18n ES/EN, datos en `src/data`, SEO/JSON-LD). Nada de rehacer desde cero ni diseños excéntricos; todo el rediseño sale de una investigación en foros y estudios de usabilidad (NN/g, Hacker News, hiring managers).
- **Estilo:** oscuro con un solo acento verde. Fondo `#0b0f0d`, acento `#45c690`, Bricolage Grotesque (títulos) + Inter (texto). Sin desenfoques (`backdrop-blur`), sin capas fijas de fondo, sin animaciones de aparición ni infinitas: eran la causa de los tirones al hacer scroll.
- **Una sola página**, en este orden: Portada → Proyectos → Especialización → Experiencia → Contacto.
- **Portada:** hero compacto, no a pantalla completa (NN/g: que asome la siguiente sección). Titular grande = oficio ("Desarrollador Laravel y PHP"); el nombre encima, legible, en verde (solo "Camilo Taba", sin saludo); una frase de qué construye; línea de contexto; botones "Ver proyectos" y "Descargar CV"; foto.
- **Cabecera:** barra fija a lo ancho, logo "C T" (`public/ct-mark.svg`) con `aria-label`, sin desenfoque. El nombre no se repite en la cabecera porque ya está en la portada.
- **Proyectos:** solo Truekapp y VALO·DEX, con capturas reales (`src/assets/web/`). ManagePoint no va como proyecto (no hay material público); queda dentro de Experiencia. Truekapp lleva la nota "El código es privado; la demo muestra la aplicación completa".
- **Experiencia:** por puesto, una línea de qué es + 2-3 puntos que empiezan con verbo + máx. 5 tecnologías. "Diseñé y desarrollé" solo donde Camilo fue autor de principio a fin; "Desarrollé" cuando construyó sobre una base existente.
- **Especialización:** sustituye a la antigua sección de servicios freelance. La web se presenta como personal, sin oferta comercial explícita. Se mantiene completa.
- **Claro/oscuro:** no se añade selector; el diseño es oscuro a propósito.
- **Textos:** nada de frases genéricas; datos concretos y verificables. Sin métricas inventadas. Pasada anti IA hecha (skill humanizer) el 23-10-2026: sin saludos de plantilla, sin "no X sino Y", sin tríos forzados ni muletillas ("a medida", "de principio a fin", "día a día"). Los detectores de IA (GPTZero y similares) no sirven para textos cortos; lo que funciona es la lista de señales y añadir datos que solo Camilo sabe.
- **CV:** se genera desde `cv/content.json` + `cv/styles.css` con `npm run cv:build`. La web y el CV deben decir lo mismo.

## Qué se puede publicar de FleetX

Solo descripciones a nivel de producto y estándares públicos (GLEC v3.2, ISO 14083). Nunca: cifras internas, nombres de clases o tablas, arquitectura interna detallada, número de commits ni porcentajes de autoría. Los tres logros verificados y ya redactados están en `src/i18n/*.json` (`experience.frakt24`).

## Legal

- Páginas `/es/aviso-legal/` y `/es/privacidad/` en versión mínima (nombre, email, residencia). Texto de privacidad junto al botón del formulario y enlaces en el pie.
- Formspree no está en el EU-US Data Privacy Framework (se apoya en cláusulas tipo); Vercel sí. Está reflejado en la política.
- Opcional pendiente: autoalojar las fuentes (quitar Google Fonts) y comprobar que el plan de Vercel permite el uso que se le da.

## SEO / GEO

- Search Console ya verificado por DNS. Pendiente: comprobar que el sitemap está enviado e importar la propiedad en Bing Webmaster Tools.
- No crear páginas por ciudad (Google lo trata como spam). Más adelante, páginas por servicio con contenido real.
- `llms.txt` apenas lo usan las IAs; mantenerlo es opcional.
- Lo que más ayuda a aparecer en IAs: frases claras y citables, menciones en otras webs y artículos en LinkedIn.

## Rendimiento (Lighthouse, local)

Móvil y escritorio: 100 rendimiento · 100 accesibilidad · 100 SEO. Buenas prácticas 96 solo en local (los scripts de Vercel dan 404 fuera de Vercel).

## Pendientes

Ver `docs/TODO.md`.

## Cómo verlo en local

```sh
npm install
npm run build
npm run preview -- --port 4399 --host 127.0.0.1
```
Abrir http://127.0.0.1:4399/es/ (español) o http://127.0.0.1:4399/ (inglés).
