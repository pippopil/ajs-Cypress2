const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1f4zyf',
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru/client/index.php',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
