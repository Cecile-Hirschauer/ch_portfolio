# Pre-PR checks

Run all quality gates before opening or updating a pull request.
Execute each step in order and stop immediately if any step fails.

Steps:
1. **Lint** — `pnpm turbo lint`
2. **Typecheck** — `pnpm turbo typecheck`
3. **Unit & integration tests** — `pnpm turbo test`
4. **Build** — `pnpm turbo build`

Report the result of each step clearly (✅ pass / ❌ fail with error output).
If all steps pass, confirm the branch is ready to open a PR.
If any step fails, list what needs to be fixed before proceeding.
