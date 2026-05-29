import reporter from 'cucumber-html-reporter';
import path from 'path';

const jsonReport = path.resolve('reports', 'cucumber-report.json');
const htmlReport = path.resolve('reports', 'cucumber-report.html');

const options = {
  theme: 'bootstrap',
  jsonFile: jsonReport,
  output: htmlReport,
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': process.env.NODE_ENV || 'QA',
    Browser: process.env.BROWSER || 'chromium',
    Platform: process.platform
  }
};

reporter.generate(options);
console.log(`Generated HTML report at ${htmlReport}`);
