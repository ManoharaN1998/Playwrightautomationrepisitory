export default {
  default: {
    require: [
      './support/world.js',
      './support/hooks.js',
      './stepDefinitions/**/*.js'
    ],
    format: [
      '@cucumber/pretty-formatter',
      'json:reports/cucumber-report.json'
    ],
    paths: ['./features/**/*.feature'],
    publishQuiet: true,
    parallel: process.env.PARALLEL === 'true' ? 2 : 0
  }
};
