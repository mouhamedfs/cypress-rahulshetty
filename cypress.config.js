const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'g1g3nx',
  //setting default timeout to 60 seconds
  defaultCommandTimeout: 6000,
  env: {
    url:'https://rahulshettyacademy.com/angularpractice/',
    browser: 'chrome'
  },
  retries: {
    runMode: 2,
  },
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})