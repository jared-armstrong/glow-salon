# CLAUDE.md — Astro Site Engineering Rules

You are Claude, an expert senior engineer assisting on this Astro codebase.

## Prime Directives
1. **Ship working software first** (correctness + tests + a11y), then optimize.
2. **SOLID + SRP always**: small, composable components; isolate side effects; no “god” files.
3. **Minimal diffs**: prefer small, scoped changes; avoid drive-by refactors unless requested.
4. **Astro-first**: prefer Astro components, Content Collections, and server rendering patterns before adding client JS.
5. **Type safety**: TypeScript everywhere that matters; no `any` without justification.

---

## Project Conventions

### Tech Stack Assumptions
- Astro (latest), TypeScript
- Prefer native web APIs and Astro integrations over extra deps
- Styling: keep consistent with existing approach (Tailwind / CSS modules / vanilla CSS). Do **not** introduce a new system.

### Directory Structure (preferred)
- `src/pages/` — route pages only (composition + data fetching)
- `src/layouts/` — page layouts
- `src/components/`
  - `ui/` — pure presentational components (no data fetching)
  - `sections/` — page sections (compose ui + light glue)
  - `icons/` — svg/icon components
- `src/lib/` — shared utilities, pure functions, helpers (no framework concerns)
- `src/services/` — external integrations (email, CMS, API clients). Side-effect boundary.
- `src/content/` — Astro Content Collections
- `src/styles/` — global styles/tokens if applicable
- `src/types/` — shared types (avoid circular imports)

If the repo already differs, follow existing structure and only move files if explicitly asked.

---

## Component Design Rules (SRP)
- Keep components **pure** by default.
- **UI components**:
  - accept props
  - no fetching
  - no direct environment access
- **Page/section components**:
  - minimal orchestration
  - pass data down via props
- **Side effects** (email sending, analytics calls, external fetch):
  - only inside `src/services/*` or Astro server endpoints

Avoid “utility soup” inside components—extract helpers to `src/lib/*`.

---

## Astro Best Practices
- Prefer `.astro` for layout + content composition.
- Use `client:*` directives sparingly:
  - default is **no hydration**
  - only hydrate the smallest leaf component that needs interactivity
- Avoid React/Vue/Svelte unless already in use or explicitly required.
- Use `Astro.props` with explicit typing for complex components.
- Prefer `getStaticPaths` for collection-driven routes.

---

## Content & SEO Standards
- Ensure every page has:
  - unique `<title>`
  - meta description
  - canonical URL if appropriate
  - OpenGraph + Twitter tags for main marketing pages
- Use semantic HTML:
  - one `<h1>` per page
  - logical heading order
- Add JSON-LD schema when it clearly helps (LocalBusiness, Organization, FAQPage, Article).
- Make sure images use:
  - `alt` text
  - width/height to avoid CLS
  - Astro assets / image optimization if configured

---

## Accessibility (Non-Negotiable)
- Keyboard navigable (tab order, focus states).
- Proper labels for form fields.
- Use `aria-*` only when necessary, and correctly.
- Contrast and readable text sizes.
- Avoid div soup; use semantic elements.

---

## API / Server Endpoints
- Prefer `src/pages/api/*.ts` endpoints for server actions (forms, webhooks).
- Validate all inputs (zod if already used; otherwise small manual validators).
- Never trust client input.
- Return consistent JSON shapes:
  - `{ ok: true, data }` or `{ ok: false, error: { code, message } }`

---

## Styling Rules
- Match existing patterns.
- Keep styles close to components when possible.
- Avoid global CSS unless it’s tokens/resets.
- Reuse spacing/typography tokens (or Tailwind utilities) consistently.

---

## Data Fetching Rules
- Cache thoughtfully (static generation first, then SSR).
- When calling external APIs:
  - isolate in `src/services/*`
  - handle errors explicitly
  - avoid leaking secrets to the client
- Do not add heavy state libraries.

---

## Testing & Quality
Follow existing repo setup. If none exists:
- Prefer **unit tests** for `src/lib/*` and critical logic.
- For endpoints, add request/response tests if framework exists.

Always run:
- `npm run lint` (or equivalent)
- `npm run build`
- any format checks (prettier)

No failing builds. No ignored CI.

---

## Security
- Never commit secrets.
- Use environment variables via `import.meta.env` correctly:
  - `PUBLIC_` vars can reach client
  - everything else is server-only
- Sanitize/validate user inputs, especially forms.
- Rate-limit or add basic abuse protection for public endpoints if needed.

---

## Performance
- Keep JS payload tiny:
  - reduce hydration
  - avoid large client bundles
- Prefer static generation for marketing pages.
- Use image optimization.
- Avoid adding deps unless strongly justified.

---

## How Claude Should Work (Process)
When asked to implement something:
1. Restate the goal briefly.
2. Identify impacted files and the smallest change set.
3. Implement with SRP boundaries (pages orchestrate, services side-effects, components present).
4. Add/update types and validation.
5. Ensure SEO + a11y not regressed.
6. Provide a short “changed files” summary.

---

## Output Requirements
- Provide code in complete file blocks when creating new files.
- For edits, show the minimal patch or clearly indicate what to replace.
- Prefer straightforward, readable solutions over clever ones.
- No unexplained architectural rewrites.

---

## Default Decisions
If not specified:
- Use TypeScript.
- Use `.astro` components.
- Use server endpoints for forms.
- Keep dependencies unchanged.
- Keep the design consistent with existing UI.
