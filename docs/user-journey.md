# User Journey

## Journey A: First-time visitor

1. Visitor opens the landing page.
2. Visitor understands the two main tools:
   - Developer Error Analyzer
   - Defensive Log Analyzer
3. Visitor runs a safe public sample.
4. Visitor sees a sample result.
5. Visitor creates an account to save future analyses.

## Journey B: Registration

1. User enters name, email and password.
2. Server validates the data.
3. Server stores a password hash, never the plain password.
4. User receives a verification email.
5. User verifies the account.
6. User logs in.
7. A default workspace is created.
8. User completes onboarding.

## Journey C: Developer error analysis

1. User selects Developer Error Analyzer.
2. User pastes a stack trace or uploads a supported file.
3. UI warns the user not to upload secrets.
4. Server validates the input.
5. Sensitive patterns are redacted.
6. An analysis job is created.
7. The worker classifies and fingerprints the error.
8. AI explains only the redacted evidence.
9. User sees category, important lines, likely cause, investigation steps, confidence and limitations.
10. User saves or deletes the result.

## Journey D: Defensive security-log analysis

1. User uploads a supported log.
2. Server validates file size and type.
3. File is stored privately.
4. Worker parses and normalizes events.
5. Detection rules create findings.
6. AI explains redacted evidence.
7. User reviews severity and evidence.
8. User marks false positives or creates an incident.

## Journey E: Incident management

1. User converts a finding into an incident.
2. User sets priority and assignee.
3. Team adds notes.
4. Status moves through OPEN, INVESTIGATING and RESOLVED.
5. Every change enters the activity history.
6. User exports a report.

## Journey F: Data control

1. User views retained uploads and analyses.
2. User deletes an upload.
3. Related private object storage is deleted.
4. User can request account deletion.
5. The application confirms completion without exposing internal storage details.

## Failure journey

Every important operation must include a failure state.

Example:

1. User starts an analysis.
2. Parser fails on malformed input.
3. Job enters FAILED state.
4. User receives a safe explanation and reference ID.
5. Internal logs contain the technical cause.
6. User can retry after correcting the input.
