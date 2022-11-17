import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
/// <reference types="vitest" />

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				babelrc: true,
			},
		}),
	],
});
