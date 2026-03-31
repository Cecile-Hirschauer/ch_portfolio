Add a new translation key across all locales.

Ask for: the key path (e.g., "projects.empty_state") and values for EN and FR.

Then:

1. Add the key to `packages/content/src/locales/en.ts`
2. Add the key to `packages/content/src/locales/fr.ts`
3. Run typecheck to ensure both locales stay in sync
