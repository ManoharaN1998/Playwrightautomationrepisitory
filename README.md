# OrangeHRM BDD Playwright Automation Framework

A scalable JavaScript automation framework using Playwright and Cucumber BDD.

## Folder structure

- `config/` - environment config and settings
- `features/` - Gherkin feature files
- `stepDefinitions/` - Cucumber step implementations
- `pages/` - Page Object Model classes
- `support/` - Cucumber hooks, world, logger
- `data/` - test data and URL definitions
- `utils/` - reusable helpers such as screenshots
- `reports/` - generated HTML / JSON reports
- `screenshots/` - failure screenshots
- `logs/` - runtime log files
- `scripts/` - report generation and utility scripts

## Run tests

Install dependencies first:

```bash
npm install
```

Run the login feature:

```bash
npm test
```

Run browser-specific tests:

```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

Generate the HTML report:

```bash
npm run report:generate
```

## Environment

Update `.env` to set:

- `BASE_URL`
- `BROWSER`
- `HEADLESS`
- `TIMEOUT`

## Jenkins CI/CD Integration

This repository includes a `Jenkinsfile` to run tests in Jenkins with automatic triggers on code changes.

### Quick Start
1. **Install Jenkins locally**: [JENKINS_SETUP.md](JENKINS_SETUP.md)
2. **Create Pipeline job**: [JENKINS_PIPELINE_SETUP.md](JENKINS_PIPELINE_SETUP.md)
3. **Push code** → Jenkins auto-runs tests → View HTML report

### Pipeline Steps

1. Checkout repository
2. Install dependencies with `npm ci`
3. Install Playwright browser dependencies with `npx playwright install chromium`
4. Run lint with `npm run lint`
5. Execute Cucumber tests with `npm test`
6. Generate the HTML report with `npm run report:generate`
7. Archive artifacts from `reports/`, `screenshots/`, and `logs/`

The pipeline is cross-platform-safe and uses `isUnix()` to choose `sh` or `bat` commands.

### Triggers

- **Poll SCM**: Checks repository every 5 minutes for changes
- **GitHub Webhook**: Triggers immediately on push (optional, requires GitHub integration)

## Notes

- The framework uses a Page Object Model (`pages/`).
- Hooks capture screenshots on failures and log scenario execution.
- Reporting is configured via `scripts/generateReport.js`.
