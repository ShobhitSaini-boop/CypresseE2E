const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {

      
      // implement node event listeners here
      reporter: 'cypress-mochawesome-reporter'
    },
  },
  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
