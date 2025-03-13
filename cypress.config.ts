import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    //defaultCommandTimeout: 10_000;
    baseUrl:"http://localhost:4200",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
