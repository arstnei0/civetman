import { defineConfig } from "vite"
import Civet from "vite-plugin-civet"

export default defineConfig({
	build: {
		lib: {
			entry: "./index.ts",
			formats: ["es"],
			fileName: "index",
		},
		minify: false,
		rollupOptions: {
			external: [
				"picocolors",
				"commander",
				"fs-extra",
				"fast-glob",
				"@danielx/civet",
				"chokidar",
				"ora",
				/node:.*/gi,
			],
		},
	},
	plugins: [Civet()],
})
