import { defineConfig } from "astro/config"
import vanillaExtract from "astro-vanilla-extract"

export default defineConfig({
	integrations: [vanillaExtract()],
})
