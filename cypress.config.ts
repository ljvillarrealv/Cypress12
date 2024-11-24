import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920, // Ancho del viewport
    viewportHeight: 1080, // Altura del viewport
  },
});
