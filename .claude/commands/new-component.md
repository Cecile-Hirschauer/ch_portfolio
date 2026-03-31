Create a new UI component in packages/ui/src.

Ask for: component name, atomic level (atom/molecule/organism), brief description.

Then scaffold:

1. `{level}/{Name}/{Name}.tsx` — Component with typed props, forwardRef, CSS module import
2. `{level}/{Name}/{Name}.test.tsx` — Base tests (renders, a11y, snapshot)
3. `{level}/{Name}/{Name}.stories.tsx` — Default + variant stories
4. `{level}/{Name}/{Name}.module.css` — Skeleton styles using CSS custom properties from tokens
5. `{level}/{Name}/index.ts` — Named export
6. Update `src/index.ts` barrel export

All code in English. Use design tokens, never hardcode values.
