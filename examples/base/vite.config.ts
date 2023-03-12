import { defineConfig } from "vitest/config"
import AutoImport from "unplugin-auto-import/vite"
import Dts from "vite-plugin-dts"

export default defineConfig({
	build: {
		lib: {
			entry: "./src/index.ts",
			formats: ["es", "cjs"],
			fileName: "index",
		},
	},
	plugins: [
		AutoImport({
			dts: "./src/auto-imports.generated.d.ts",
			imports: ["vitest"],
		}),
		Dts(),
	],
})
