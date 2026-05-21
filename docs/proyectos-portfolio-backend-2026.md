# Proyectos de Portafolio Backend — Investigación y Decisión

**Fecha:** 2026-04-20
**Objetivo:** Documentar la investigación realizada para decidir qué proyecto(s) añadir al portafolio de Camilo Taba (camilotaba.dev) como Laravel Backend Engineer.
**Estado:** Decisión tomada, implementación aplazada.

---

## 1. Contexto y punto de partida

### Perfil
- **Camilo Taba** — Laravel Backend Engineer en Frakt24 / FleetX desde enero 2026.
- **Stack principal:** Laravel 10+, PHP 8.3, MySQL, multi-tenant SaaS en producción.
- **Stack secundario:** Flutter (app de nutrición con Firebase), JavaScript, Astro.
- **Trabajos previos:** Truekapp (WebSockets), ManagePoint (RBAC + PDF reports), Valorant API (frontend JS puro).

### Restricciones reales
- **Tiempo disponible:** ~5h/semana (trabajo full-time).
- **Presupuesto:** mínimo (~$0-5/mes).
- **Experiencia total:** ~1 año.
- **Objetivo principal:** presencia profesional + portafolio para atraer entrevistas/clientes freelance, **no montar un SaaS comercial**.

### Problema identificado
El portafolio actual tiene 3 proyectos:
1. **Truekapp** — no desplegado, sólo video demo
2. **ManagePoint** — no desplegado (privado/interno), sólo video demo
3. **Valorant API** — desplegado pero es sólo frontend JS vanilla, no demuestra skills backend

**Ningún proyecto público verificable muestra sus capacidades Laravel backend reales.** Este es el gap que queremos cerrar.

---

## 2. Ideas investigadas

Se evaluaron 5 direcciones distintas. Fuentes: Nucamp, roadmap.sh, Laracopilot, Inspector.dev, Tenancy for Laravel (ver sección Fuentes al final).

### Idea 1: Webhooks Gateway / Integration Hub
**Premise:** SaaS que recibe webhooks de proveedores (Stripe, GitHub, Shopify), los valida, guarda, y reenvía a destinos configurables con retry exponencial, HMAC, dead-letter queue.

**Demuestra:** Horizon + Redis queues, retry con backoff, HMAC, rate limiting, multi-tenant, idempotencia.

**Valor portafolio:** 🔥🔥🔥🔥🔥 (muy alto — patrón que aparece en ofertas de backend senior).

**Scope realista:**
- Como OSS portfolio (sin billing, sin landing): 3-4 semanas a 5h/sem
- Como SaaS comercial con billing/landing/marketing: 6-8 semanas (descartado por scope)

**Riesgo:** medio-alto de no terminar por superficie amplia.

---

### Idea 2: Valorant API → API Gateway con caching y rate limiting
**Premise:** Pivotar el proyecto Valorant existente. En vez de frontend que consume una API pública, construir un **backend Laravel** que proxy-ea la API con Redis caching, API keys, rate limiting, OpenAPI docs.

**Demuestra:** Redis caching, rate limiting, API Gateway pattern, OpenAPI, Stripe Cashier (opcional), tests.

**Valor portafolio:** 🔥🔥🔥 (medio — continuidad narrativa pero menos "wow").

**Scope:** 2-3 semanas para MVP.

**Ventaja única:** reutiliza trabajo previo.

---

### Idea 3: RAG para un nicho específico
**Premise:** SaaS multi-tenant donde usuarios suben PDFs y chatean con IA (Laravel + OpenAI + pgvector). Nicho diferenciador (ej. docs de Laravel, jurisprudencia española).

**Demuestra:** integración OpenAI/Anthropic, pgvector, jobs asíncronos, streaming SSE.

**Valor portafolio:** 🔥🔥 (bajo — espacio muy saturado, difícil diferenciarse).

**Scope:** 4-5 semanas.

**Descartado.**

---

### Idea 4: Bookings/Scheduling SaaS (Laravel API + Flutter app)
**Premise:** Plataforma tipo Cal.com multi-tenant (peluquería, clínica, coach). Laravel API REST + app Flutter mobile.

**Demuestra:** stancl/tenancy, lógica de slots con timezones, Google Calendar OAuth, Sanctum, **Flutter como cliente real** (combo único).

**Valor portafolio:** 🔥🔥🔥🔥 (alto, y único por el combo Laravel+Flutter).

**Scope:** 5-6 semanas (el más grande).

**Descartado por ahora** — demasiado grande para la capacidad real. Candidato para segunda fase si Idea 5 se completa.

---

### Idea 5: Paquete open-source de Laravel
**Premise:** Paquete reutilizable publicado en Packagist. Ejemplos evaluados:
- `laravel-webhook-signatures` ← **ganador**
- `laravel-webhook-retry`
- `laravel-report-export`

**Demuestra:** testing serio (Pest + Testbench), Packagist publishing, CI/CD con GitHub Actions, service providers, auto-discovery, documentación técnica.

**Valor portafolio:** 🔥🔥🔥🔥 (alto — medalla que habla de "conoce el ecosistema Laravel").

**Scope:** 2 semanas a 5h/sem (~10h totales). **Realistamente completable.**

**Ventajas clave:**
- Output tangible y verificable (badge de Packagist, downloads count)
- Cero infraestructura / cero coste
- Código que se reutiliza si luego se expande a Idea 1
- Bajo riesgo de abandono

---

## 3. Decisión tomada

### ✅ Fase 1: Idea 5 — Paquete `laravel-webhook-signatures`

**Por qué este y no otro:**
1. **Scope realista** con 5h/sem disponibles.
2. **Output tangible en 2 semanas** (vs meses para un SaaS).
3. **Cero coste de infraestructura** ($0/mes).
4. **Señal técnica alta** para reclutadores — un paquete en Packagist demuestra dominio del ecosistema.
5. **Base reutilizable** — el código de verificación HMAC se reutiliza 100% si luego se expande a Idea 1 (webhook relay completo).
6. **Bajo riesgo de abandono** — hay hitos visibles desde la semana 1 (repo + tests + primera release).

### 🔄 Fase 2 (opcional, sólo si Fase 1 se completa)

**Idea 1 como OSS portfolio** (no como SaaS comercial):
- Webhook relay completo usando el paquete de Fase 1
- Despliegue en Fly.io / Upstash / Neon (free tiers)
- Dashboard Filament público read-only
- README con diagrama Mermaid + video demo
- Scope: +3-4 semanas adicionales

---

## 4. Decisiones de scope explícitas (qué NO hacer)

### Qué se descartó conscientemente en Fase 1
- ❌ Multi-tenant (el paquete es library-level, no necesita)
- ❌ Dashboard UI
- ❌ Despliegue (no hay app, sólo paquete)
- ❌ Billing / Stripe
- ❌ Landing page de marketing
- ❌ Product Hunt launch
- ❌ Build in public / estrategia de contenido diaria
- ❌ Lista de espera / waitlist

### Qué se descartó conscientemente en Fase 2 (si se llega)
- ❌ Signup público / multi-tenant con onboarding
- ❌ Stripe Cashier / planes pagados
- ❌ Smart routing con reglas (nice-to-have post-MVP)
- ❌ Soportar 10+ providers (2-3 basta: Stripe, GitHub, Shopify)
- ❌ Circuit breaker (retry con backoff ya es suficiente señal)
- ❌ Payload transformation engine

**Filosofía general:** portafolio ≠ negocio. Un repo impecable con README + tests + demo > un SaaS con 3 usuarios y billing roto.

---

## 5. Spec técnico (alto nivel) del paquete `laravel-webhook-signatures`

### Propósito
Un paquete drop-in que verifica firmas HMAC de webhooks de los providers más comunes con una API unificada.

### API pública propuesta
```php
// Uso directo
use CamilloTaba\WebhookSignatures\WebhookSignature;

$isValid = WebhookSignature::verify($request, 'stripe', config('services.stripe.webhook_secret'));

// Como middleware en rutas
Route::post('/webhooks/stripe', StripeWebhookController::class)
    ->middleware('webhook.signed:stripe');
```

### Providers soportados en MVP
1. **Stripe** (HMAC-SHA256 en header `Stripe-Signature`)
2. **GitHub** (HMAC-SHA256 en header `X-Hub-Signature-256`)
3. **Shopify** (HMAC-SHA256 base64 en header `X-Shopify-Hmac-Sha256`)

### Estructura de carpetas propuesta
```
laravel-webhook-signatures/
├── src/
│   ├── WebhookSignaturesServiceProvider.php
│   ├── WebhookSignature.php              (fachada / clase principal)
│   ├── Contracts/
│   │   └── SignatureVerifier.php         (interface)
│   ├── Verifiers/
│   │   ├── StripeVerifier.php
│   │   ├── GitHubVerifier.php
│   │   └── ShopifyVerifier.php
│   ├── Http/Middleware/
│   │   └── VerifyWebhookSignature.php
│   └── Exceptions/
│       └── InvalidSignatureException.php
├── tests/
│   ├── Feature/
│   │   ├── StripeVerifierTest.php
│   │   ├── GitHubVerifierTest.php
│   │   ├── ShopifyVerifierTest.php
│   │   └── MiddlewareTest.php
│   ├── fixtures/                         (payloads reales de cada provider)
│   └── TestCase.php                      (Orchestra Testbench)
├── config/
│   └── webhook-signatures.php
├── .github/
│   └── workflows/
│       └── tests.yml                     (matriz PHP 8.2/8.3/8.4 + Laravel 10/11/12)
├── composer.json
├── phpunit.xml
├── README.md                             (el deliverable más importante)
└── LICENSE
```

### Compatibilidad target
- **PHP:** 8.2, 8.3, 8.4
- **Laravel:** 10.x, 11.x, 12.x

### Testing
- **Framework:** Pest (sobre PHPUnit + Orchestra Testbench)
- **Cobertura objetivo:** >90% en `src/`
- **Casos críticos a cubrir:**
  - Firma válida → middleware pasa
  - Firma inválida → 401
  - Timestamp expirado (Stripe tiene tolerancia de 5min) → 401
  - Payload manipulado después de firma → 401
  - Secret mal configurado → excepción clara

### CI/CD
- GitHub Actions: matriz de tests en cada push y PR
- Auto-release a Packagist via webhook (standard)
- Badges en README: tests, Packagist version, downloads, license

### README sections (imprescindibles)
1. Hero con badges
2. "Why this package" (el problema)
3. Install (`composer require ...`)
4. Quickstart — 3-4 líneas de código
5. Supported providers (tabla)
6. Middleware usage
7. Manual verification usage
8. Advanced config
9. Testing in your app
10. Contributing
11. Credits + License

---

## 6. Timeline realista

### Paquete (Fase 1) — 2 semanas a 5h/sem = 10h total

| Semana | Hitos |
|---|---|
| **1** | Repo inicial + `composer.json` + `ServiceProvider` + interface `SignatureVerifier` + `StripeVerifier` completo con tests + fixtures |
| **2** | `GitHubVerifier` + `ShopifyVerifier` + `VerifyWebhookSignature` middleware + CI yaml + README + publicación en Packagist + tag v1.0.0 |

### Webhook Relay (Fase 2 opcional) — +3-4 semanas

| Semana | Hitos |
|---|---|
| **3-4** | Core del relay: ingestión, uso del paquete de Fase 1 para validar, persistencia idempotente, Horizon con retry + DLQ |
| **5** | Dashboard Filament + replay manual + deploy Fly.io + README con diagrama Mermaid |
| **6** (opcional) | Post técnico en dev.to + video demo 60s + integración al portafolio |

---

## 7. Coste mensual estimado

### Fase 1 (paquete)
- GitHub público: **$0**
- Packagist: **$0**
- GitHub Actions: **$0** (gratis en repos públicos)
- **Total: $0/mes**

### Fase 2 (webhook relay)
- Dominio: **$0** (usa subdominio `webhooks.camilotaba.dev`)
- Fly.io: **$0** (free tier: 3 shared-CPU apps, 256MB)
- Postgres Neon: **$0** (free tier: 0.5GB)
- Redis Upstash: **$0** (free tier: 10k comandos/día)
- **Total: $0-5/mes** (margen para posible upgrade a Fly hobby $5/mes)

---

## 8. Deliverables finales al portafolio

### Después de Fase 1
1. 🔗 Repo público: `github.com/Camiiilotaba/laravel-webhook-signatures`
2. 📦 Packagist: `packagist.org/packages/camiiilotaba/laravel-webhook-signatures`
3. ✅ Badge de tests verde en README
4. 📊 Badge "Downloads" en el portafolio (se autoactualiza)
5. 📝 Reemplazar **Valorant API** como proyecto #3 en el portafolio, con nuevo status label "Packagist package".
6. 📝 (Opcional) Post en dev.to/Hashnode: "Verifying webhook signatures in Laravel — a drop-in package"

### Después de Fase 2 (si se hace)
7. 🔗 Repo del relay: `github.com/Camiiilotaba/webhook-relay`
8. 🌐 Demo desplegado: `webhooks.camilotaba.dev`
9. 🎬 Video 60s en README mostrando retry/replay flow
10. 📐 Diagrama de arquitectura Mermaid embebido
11. 📝 Actualizar el portafolio añadiéndolo como **FeaturedProject** (reemplazando Truekapp si procede)

---

## 9. Próximos pasos cuando se retome este trabajo

1. **Releer este documento** (10 min).
2. **Verificar que el contexto sigue vigente** — ¿sigue siendo válido el posicionamiento? ¿Sigue disponible la misma capacidad de horas?
3. **Decidir si empezar por Fase 1 (paquete)** o si hay una razón fuerte para elegir otra dirección de las descartadas.
4. **Si se arranca Fase 1:** crear nuevo repo, invocar al asistente con el spec técnico de la sección 5 para generar el plan detallado de implementación (`superpowers:writing-plans`).
5. **Antes de empezar a picar código:** confirmar que el nombre `laravel-webhook-signatures` está disponible en Packagist, verificar que no existe ya un paquete equivalente maintained (búsqueda rápida en packagist.org).

---

## 10. Consideraciones adicionales (notas sueltas)

- **Competencia existente:** antes de empezar, buscar en Packagist "webhook signature", "stripe webhook", "github webhook" para confirmar que no existe un paquete dominante con la misma API unificada. Si existe algo muy similar, pivotar hacia uno de los otros candidatos (`laravel-webhook-retry`, `laravel-report-export`).
- **Naming:** el namespace de Packagist es `vendor/package`. Elegir `camiiilotaba/...` (consistencia con GitHub) o crear un vendor namespace propio tipo `taba/...`.
- **Follow-ups manuales al portafolio** (no relacionados con este proyecto pero pendientes):
  - Actualizar headline del CV PDF a "Laravel Backend Engineer"
  - Alinear headline de LinkedIn al mismo posicionamiento

---

## 11. Fuentes consultadas durante la investigación

### Portfolio / Ideas
- [Top 10 Backend Portfolio Projects for 2026 — Nucamp](https://www.nucamp.co/blog/top-10-backend-portfolio-projects-for-2026-that-actually-get-you-hired)
- [20 Backend Project Ideas — roadmap.sh](https://roadmap.sh/backend/project-ideas)
- [Developer Portfolio Trends 2026 — DEV](https://dev.to/alfredo_aguilac1/the-indispensable-developer-portfolio-in-2026-354n)

### Laravel ecosystem
- [Laravel Multi-Tenancy SaaS Guide 2026 — Laracopilot](https://laracopilot.com/blog/laravel-multi-tenancy-saas-guide/)
- [Laravel Horizon Queue Patterns — Inspector.dev](https://inspector.dev/what-worked-for-me-using-laravel-queues-from-the-basics-to-horizon/)
- [Tenancy for Laravel (stancl/tenancy)](https://tenancyforlaravel.com/saas-boilerplate/)

### Hero / UX
- [Website Hero Section Best Practices — Prismic](https://prismic.io/blog/website-hero-section)

### Competidores en el espacio de webhooks (para research previo)
- Hookdeck — `hookdeck.com` (líder, pricing desde $39/mes)
- Svix — `svix.com` (B2B, pricing desde $490/mes)

---

**Nota final:** este documento refleja el pensamiento del 2026-04-20. Las circunstancias (trabajo, tiempo disponible, tendencias del mercado) pueden cambiar. Releer con ojo crítico antes de ejecutar.
