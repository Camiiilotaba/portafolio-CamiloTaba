# CV editable

Los dos idiomas comparten plantilla y estilos. Los PDF publicados conservan sus rutas para que sigan funcionando los botones del portfolio.

- `content.json`: datos de contacto y textos en español (`es`) e inglés (`en`). Edita ambos idiomas cuando cambie tu experiencia.
- `styles.css`: tipografía, colores, espaciado y tamaño A4.
- `../scripts/build-cv.mjs`: plantilla HTML y generación de los PDF.

## Generar

```sh
npm run cv:build
```

Necesita Google Chrome o Chromium instalado. En macOS detecta la ruta habitual de Chrome; en otros entornos puedes indicar el ejecutable:

```sh
CV_BROWSER=/ruta/a/chromium npm run cv:build
```

No instala dependencias ni utiliza un perfil personal del navegador. Genera documentos locales sin recursos externos. Los PDF se guardan en `output/pdf/` y se copian a `public/CamiloTaba-CV.pdf` y `public/CamiloTaba-CV-en.pdf`.

## Vista previa y edición visual

```sh
npm run cv:html
```

Abre `output/pdf/cv-es.html` o `output/pdf/cv-en.html` en tu navegador. También puedes imprimirlos manualmente: A4, escala 100 %, sin cabeceras ni pies del navegador. El CSS define los márgenes.

Después de cambiar textos, genera los PDF y revisa ambos idiomas: deben caber en una página, sin texto cortado y con enlaces correctos. La compilación de Astro no regenera los CV automáticamente; ejecuta `cv:build` cuando cambien.

El teléfono y los demás datos de contacto se han conservado de los PDF anteriores.

## Preparar una candidatura

La base usa una columna, texto seleccionable, títulos de sección habituales, experiencia en orden cronológico inverso y enlaces escritos. El nombre y los datos de contacto pertenecen al contenido del documento; no se imprimen como cabecera o pie repetido. El verde oscuro es un acento visual y toda la información sigue siendo comprensible en blanco y negro.

Antes de enviar el CV:

1. Lee la oferta y prioriza las tecnologías y experiencias que realmente dominas y encajan con el puesto. Puedes adaptar el perfil y el orden de los puntos sin cambiar los hechos ni tus cargos.
2. Usa el idioma y el formato de archivo solicitados. El PDF de texto es el formato generado por este proyecto.
3. Comprueba el texto que el portal haya importado, especialmente empresas, cargos y fechas. Las preguntas de elegibilidad y los criterios de selección dependen de cada empresa.
4. Verifica el texto extraído y revisa visualmente los dos PDF tras regenerarlos. Tener texto extraíble facilita la lectura automática, pero no garantiza cómo lo interpretará un ATS ni una entrevista.

### Referencias consultadas

- [Greenhouse: causas de errores al interpretar un CV](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse): problemas con columnas, imágenes, cuadros de texto y secciones poco claras.
- [Harvard: crear un CV sólido](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/): claridad, coherencia, hechos y adaptación al puesto.
- [Indeed: palabras clave para software engineers](https://www.indeed.com/career-advice/resumes-cover-letters/software-engineering-resume-keywords): seleccionar las habilidades relevantes de la oferta.
- [Debate en r/EngineeringResumes](https://www.reddit.com/r/EngineeringResumes/comments/1u96ib5/3_yoe_seeking_resume_feedback_and_improvement/): opiniones sobre densidad, tamaño de letra y métricas defendibles; son consejos de una comunidad, no especificaciones de los ATS.
