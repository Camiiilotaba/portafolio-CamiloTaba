# TODO (rama `redesign`)

Lista de lo que queda por decidir o hacer. El contexto general está en `CONTEXTO-REDISENO.md`.

## 1. Logos en las tarjetas de Experiencia

**Idea:** poner el logo de cada empresa (FleetX, Gesa Mediación, Apuestas de Murcia) en su tarjeta, para dar variedad visual.

**Legal:** usar el logo de una empresa para indicar que trabajaste allí es un uso referencial de la marca, permitido (Directiva UE 2015/2436, art. 14; Ley de Marcas española, art. 37) si el logo va sin modificar, solo identifica la empresa y no sugiere que te avalan. Es lo que hacen LinkedIn y la mayoría de portfolios. Riesgo bajo. Con FleetX (empleador actual) conviene avisar antes.

**Opciones:**
- A. Logos reales en SVG o PNG pequeño (≈ 40 px), en `src/assets/logos/`, cargados con `<Image>` de Astro. Pedir el archivo a cada empresa o sacarlo de su web/LinkedIn.
- B. Monograma con iniciales ("FX", "GM", "AM") en un recuadro con el color de superficie. Sin marcas ajenas, mismo efecto visual.
- C. Dejarlo como está (solo texto).

**Dónde:** `src/components/Experience.astro` (columna izquierda, encima del periodo) y `src/data/experience.ts` (campo nuevo `logo` o `initials`).

## 2. Qué hacer con la sección "Especialización"

Ahora mismo repite en parte lo que dicen la portada y los proyectos. Opciones, de menos a más cambio:
- A. Dejarla como está. Ya tiene el botón "Hablemos" hacia contacto.
- B. Recortarla a una fila de cuatro líneas (título + una frase cada una), sin la introducción.
- C. Convertirla en "Sobre mí": dos o tres frases con tu voz (qué te gusta hacer, cómo trabajas) y las cuatro áreas debajo como lista corta. Es lo que más ayudaría a que la web suene a ti.
- D. Quitarla y pasar las cuatro áreas a una línea en la portada.

Decidir después de responder a las tres preguntas de voz (ver punto 6).

## 3. Igualar el CV con la web

`cv/content.json` dice cosas distintas a `src/i18n/*.json` en FleetX (orden, "Desarrollé" vs "Diseñé y desarrollé", y un cuarto punto vago sobre Firestore) y en Truekapp (la web ya menciona el origen con dos compañeros; el CV no). Dejar los mismos tres puntos en el mismo orden y regenerar con `npm run cv:build`.

## 4. `public/llms.txt`

Sigue listando ManagePoint como proyecto y la descripción antigua. Dejarlo igual que la web (dos proyectos, FleetX con los tres puntos).

## 5. Comprobar en dispositivos reales

Hacer scroll completo en móvil y portátil para confirmar que no hay tirones. En móvil, mirar si asoma "Proyectos" en la primera pantalla; si no, reducir el aire de la portada.

## 6. Textos con tu voz

Pasada anti IA hecha el 23-10-2026 (sin muletillas en ES ni EN). Lo que falta son datos propios en la portada y en Especialización. Responder, como hablando, a:
1. Qué tipo de aplicaciones te gusta más hacer y qué parte del trabajo disfrutas.
2. Algo de Truekapp que se rompiera o costara, y cómo lo resolviste.
3. Una decisión técnica tuya que hoy cambiarías.

Con eso, reescribir la frase de la portada y una línea más en Truekapp. Prueba final: tapar tu nombre; si la frase valdría para otro desarrollador, no está terminada.

## 7. Freelance

Decidir si se vuelve a decir que aceptas proyectos (una línea en portada o contacto). Si se dice, el aviso legal ya está preparado.

## 8. Cierre

PR de `redesign` → `master`, revisar en Vercel preview y publicar.
