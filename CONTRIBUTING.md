# Contributing

## Branch naming

Use one of:

- `feature/<short-name>`
- `fix/<short-name>`
- `docs/<short-name>`
- `test/<short-name>`
- `chore/<short-name>`

Example:

```text
feature/product-foundation
```

## Commit format

Use:

```text
type(scope): short description
```

Examples:

```text
docs(product): add MVP requirements
chore(repo): add issue templates
fix(auth): prevent reused reset token
test(workspace): block cross-workspace access
```

## Pull request rules

1. Link the issue.
2. Explain the problem.
3. Explain the chosen approach.
4. List the tests performed.
5. Add screenshots only when useful.
6. Do not include secrets, private logs or real credentials.
7. Confirm the definition of done.
8. Keep a pull request focused on one logical change.
