# Definition of Done

A task is not complete merely because the page renders or the happy path works.

## Feature-level definition of done

### Product

- [ ] Acceptance criteria are written.
- [ ] Empty, loading, success and failure states are handled.
- [ ] The feature is connected to real persisted data.
- [ ] Unfinished actions are not exposed as working buttons.
- [ ] User-facing limitations are clear.

### Backend

- [ ] Controller contains no unnecessary business logic.
- [ ] Service rules are tested.
- [ ] Input validation exists.
- [ ] Authorization is checked.
- [ ] Database changes use Flyway.
- [ ] Transactions are used where consistency requires them.
- [ ] Errors return a safe standard response.
- [ ] Logs include a correlation ID.
- [ ] Sensitive values are not logged.

### Frontend

- [ ] Form validation works.
- [ ] API errors are understandable.
- [ ] Mobile, tablet and desktop layouts work.
- [ ] Keyboard navigation works.
- [ ] Loading does not freeze the page.
- [ ] No horizontal scrolling is introduced.
- [ ] Reduced-motion preferences are respected.

### Security

- [ ] Anonymous access is tested.
- [ ] Wrong-role access is tested.
- [ ] Cross-workspace access is tested.
- [ ] File or text limits are enforced.
- [ ] Sensitive information is redacted where required.
- [ ] No secret is committed to Git.

### Testing

- [ ] Unit tests pass.
- [ ] Integration tests pass where applicable.
- [ ] End-to-end happy path passes.
- [ ] At least one failure path is tested.
- [ ] Regression test is added for fixed defects.

### Documentation

- [ ] README or related documentation is updated.
- [ ] Environment-variable changes are documented.
- [ ] API documentation is updated.
- [ ] Operational impact is documented.
- [ ] LinkedIn evidence is captured without exposing secrets.

### Delivery

- [ ] Code is committed on a feature branch.
- [ ] Pull request checklist is complete.
- [ ] CI passes.
- [ ] Staging verification passes.
- [ ] Production deployment is monitored.
- [ ] Rollback approach is known.

## Part-level completion gate

A project part is complete only when:

1. Every planned issue is closed or intentionally moved with an explanation.
2. The milestone demonstration works.
3. Required tests pass.
4. Documentation is updated.
5. Known critical and high-severity defects are zero.
6. The progress board reflects reality.
7. The LinkedIn post describes real evidence, not future claims.
