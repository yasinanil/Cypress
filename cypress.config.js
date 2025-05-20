const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e82ox6',
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('after:spec', (spec, results) => {
        if (results && results.video && results.stats.failures === 0) {
          const fs = require('fs')
          fs.unlinkSync(results.video)
        }
      })
    },
  },
});

//npx cypress run --record --key b4b05f1e-9209-49d0-9f9b-4f1b0e257a48