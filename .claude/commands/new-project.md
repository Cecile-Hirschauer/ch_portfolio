Add a new portfolio project entry.

Ask for: slug, title, description (EN + FR), category, tech tags, optional links.

Then:

1. Add the entry to `packages/content/src/projects.ts`
2. Ensure the category is valid (fullstack | mobile | blockchain | ia-auto)
3. Verify both locale descriptions are provided
4. Run typecheck to confirm no type errors
