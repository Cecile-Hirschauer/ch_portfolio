# Cecile Portfolio — Claude Code Rules

## Project Overview
Brutalist portfolio monorepo for Cecile Hirschauer. Astro site + React design system + Storybook.
Eco-responsible (< 500 KB), accessible (WCAG AA), bilingual (EN/FR).

## Architecture
- Monorepo: Turborepo + pnpm workspaces
- `apps/portfolio` — Astro site (SSG, zero client JS by default)
- `packages/ui` — React design system with Storybook (atomic design)
- `packages/tokens` — Design tokens (CSS custom properties + TS exports)
- `packages/content` — All text content as typed data files (projects, stacks, locales)

## Code Conventions
- ALL code in English (variables, functions, comments, commits)
- TypeScript strict mode everywhere
- CSS Modules for component styles (no Tailwind — eco-conception, ship only what's used)
- Functional React components only, no classes
- Named exports, barrel files per component folder
- Commit messages: conventional commits (feat:, fix:, docs:, refactor:, test:, chore:)

## Component Pattern
Every component follows this structure:
ComponentName/
├── ComponentName.tsx          <- Component implementation
├── ComponentName.test.tsx     <- Tests (Vitest + Testing Library)
├── ComponentName.stories.tsx  <- Storybook stories
├── ComponentName.module.css   <- Scoped styles using tokens
└── index.ts                   <- Named export

## Testing Philosophy
- TDD when possible: write test first, then implement
- Vitest + React Testing Library for unit/integration
- Test behavior, not implementation details
- Every component must have at least: rendering test, a11y test, key interaction test
- Storybook addon-a11y for automated WCAG checks
- Lighthouse CI in GitHub Actions for performance + accessibility audits

## Content Management
- Content lives in `packages/content` as typed TS objects
- Components receive content as props — NEVER hardcode text
- To add a project/stack/timeline entry: edit the corresponding data file only
- All user-facing strings must be in both `locales/en.ts` and `locales/fr.ts`
- Type `LocalizedString = Record<"en" | "fr", string>` for all translatable fields

## Design System Rules
- Tokens are the single source of truth for all visual decisions
- Always use CSS custom properties from `@cecile/tokens`, never hardcode colors/sizes
- Atomic design: atoms -> molecules -> organisms
- Every component must be accessible (keyboard nav, focus visible, aria labels)
- Respect `prefers-reduced-motion` — wrap all animations in media query
- Respect `prefers-color-scheme` — currently light only, but tokens are ready

## Eco-Conception Rules
- No external fonts loading (system font stack or self-hosted Inter variable)
- Images: WebP/AVIF only, lazy-loaded, with explicit width/height
- No trackers, no Google Analytics (Plausible if needed)
- Inline critical CSS, defer non-critical
- Total page weight target: < 500 KB
- SVG icons preferred over icon fonts
- No unnecessary JavaScript — use Astro islands only where interactivity is required

## Package Scripts
- `pnpm dev` — Start Astro dev server
- `pnpm storybook` — Start Storybook
- `pnpm test` — Run all tests
- `pnpm lint` — Lint all packages
- `pnpm typecheck` — TypeScript check all packages
- `pnpm build` — Build everything

## Deployment (Vercel)
Two separate Vercel projects on the same GitHub repo with selective deploys:

### Portfolio (`apps/portfolio`)
- Framework: Astro | Root Directory: `apps/portfolio`
- Build/Output/Install: Vercel defaults
- Ignored Build Step: `npx turbo-ignore portfolio`
- Node.js: 22.x

### Storybook (`packages/ui`)
- Framework: Other | Root Directory: *(repo root)*
- Build Command: `pnpm turbo run build-storybook --filter=@cecile/ui`
- Output Directory: `packages/ui/storybook-static`
- Ignored Build Step: `npx turbo-ignore @cecile/ui`
- Node.js: 22.x

### Selective deploy behavior
- Portfolio-only changes → only portfolio deploys
- UI/Storybook changes → only storybook deploys
- Token/content changes → both deploy (shared dependencies)
- If pnpm version mismatch on Vercel: set env var `ENABLE_EXPERIMENTAL_COREPACK=1`
