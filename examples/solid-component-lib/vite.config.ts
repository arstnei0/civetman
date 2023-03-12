import { defineConfig } from "vite"
import AutoImport from "unplugin-auto-import/vite"
import Dts from "vite-plugin-dts"
import Solid from "vite-plugin-solid"

export default defineConfig({
	build: {
		lib: {
			entry: "./src/index.tsx",
			formats: ["es"],
			fileName: "index",
		},
		minify: false,
		rollupOptions: {
			external: [/^solid-js/gi],
		},
	},
	plugins: [
		AutoImport({
			dts: "./src/auto-imports.generated.d.ts",
			imports: ["solid-js", { "solid-use/atom": [["default", "atom"]] }],
			dirs: ["src/components"],
			defaultExportByFilename: true,
		}),
		Dts(),
		Solid(),
	],
})
