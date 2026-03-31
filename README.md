# Portfolio Monorepo — Architecture Document

## Overview

Brutalist portfolio for Cécile Hirschauer. Monorepo with a reusable design system (Storybook), bilingual (EN default / FR), eco-responsible (< 500 Ko), accessible (WCAG AA). All code in English.

---

## Monorepo Structure

```txt
cecile-portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml                    ← Lint + typecheck + test + build
│       └── deploy.yml                ← Deploy site + Storybook
│
├── .claude/
│   ├── CLAUDE.md                     ← Claude Code rules & context
│   ├── commands/
│   │   ├── new-component.md          ← Scaffold a new UI component
│   │   ├── new-project.md            ← Add a portfolio project entry
│   │   └── new-locale.md             ← Add a translation key
│   └── settings.json
│
├── apps/
│   └── portfolio/                    ← Astro site
│       ├── src/
│       │   ├── layouts/
│       │   │   └── BaseLayout.astro
│       │   ├── pages/
│       │   │   ├── en/               ← English (default)
│       │   │   │   └── index.astro
│       │   │   ├── fr/               ← French
│       │   │   │   └── index.astro
│       │   │   └── index.astro       ← Redirect → /en
│       │   ├── components/           ← Astro wrappers for React islands
│       │   └── styles/
│       │       └── global.css        ← Tokens import + base styles
│       ├── astro.config.mjs
│       └── package.json
│
├── packages/
│   ├── tokens/                       ← Design tokens (single source of truth)
│   │   ├── src/
│   │   │   ├── colors.ts             ← Nature & Or palette
│   │   │   ├── typography.ts         ← Font stacks, sizes, weights
│   │   │   ├── spacing.ts            ← Spacing scale
│   │   │   ├── breakpoints.ts        ← Responsive breakpoints
│   │   │   └── index.ts              ← Barrel export
│   │   ├── dist/
│   │   │   ├── tokens.css            ← Generated CSS custom properties
│   │   │   └── index.js              ← Generated JS/TS exports
│   │   ├── scripts/
│   │   │   └── build-css.ts          ← Tokens → CSS variables generator
│   │   └── package.json
│   │
│   ├── ui/                           ← Design system components
│   │   ├── src/
│   │   │   ├── atoms/
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.test.tsx
│   │   │   │   │   ├── Button.stories.tsx
│   │   │   │   │   ├── Button.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Heading/
│   │   │   │   ├── Tag/
│   │   │   │   ├── Badge/
│   │   │   │   ├── Icon/
│   │   │   │   └── LanguageSwitcher/
│   │   │   ├── molecules/
│   │   │   │   ├── NavBar/
│   │   │   │   ├── ProjectRow/
│   │   │   │   ├── TimelineItem/
│   │   │   │   ├── StackCard/
│   │   │   │   ├── ManifestoStatement/
│   │   │   │   └── FilterBar/
│   │   │   ├── organisms/
│   │   │   │   ├── Hero/
│   │   │   │   ├── Manifesto/
│   │   │   │   ├── Timeline/
│   │   │   │   ├── TechStack/
│   │   │   │   ├── ProjectList/
│   │   │   │   ├── CraftConvictions/
│   │   │   │   ├── Contact/
│   │   │   │   └── Footer/
│   │   │   └── index.ts
│   │   ├── .storybook/
│   │   │   ├── main.ts
│   │   │   ├── preview.ts            ← Import tokens, configure a11y addon
│   │   │   └── manager.ts
│   │   └── package.json
│   │
│   └── content/                      ← All content as typed data
│       ├── src/
│       │   ├── types.ts              ← Shared types (Project, Stack, etc.)
│       │   ├── projects.ts           ← Project entries (data, not UI)
│       │   ├── stacks.ts             ← Stack entries
│       │   ├── timeline.ts           ← Timeline entries
│       │   ├── manifesto.ts          ← Manifesto statements
│       │   ├── craft.ts              ← Craft & convictions entries
│       │   ├── meta.ts               ← Site metadata, contact info
│       │   └── locales/
│       │       ├── en.ts             ← English translations
│       │       └── fr.ts             ← French translations
│       └── package.json
│
├── tooling/                          ← Shared configs
│   ├── eslint/
│   │   └── base.js
│   ├── tsconfig/
│   │   ├── base.json
│   │   ├── react.json
│   │   └── astro.json
│   └── prettier/
│       └── index.js
│
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
├── .nvmrc                            ← Node version pin
├── .prettierrc.js
├── .eslintrc.js
└── README.md
```
