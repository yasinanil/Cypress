const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:spec', (spec, results) => {
        if (results && results.video && results.stats.failures === 0) {
          const fs = require('fs')
          fs.unlinkSync(results.video)
        }
      })
    },
  },
});
