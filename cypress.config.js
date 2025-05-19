const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
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
