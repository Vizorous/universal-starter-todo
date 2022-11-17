import { NestFastifyApplication } from "@nestjs/platform-fastify";
import path from "path";
import { defineConfig, ConfigEnv } from "vite";
import { RequestAdapter, VitePluginNode } from "vite-plugin-node";
import tsconfigPaths from "vite-tsconfig-paths";
/// <reference types="vitest" />
export const NestFastifyHandler: RequestAdapter<NestFastifyApplication> = async (app, req, res) => {
	await app.init();
	const instance = app.getHttpAdapter().getInstance();
	await instance.ready();
	instance.routing(req, res);
	// Todo: handle nest-fastify case
};
export default defineConfig(({ command, mode }: ConfigEnv) => ({
	server: {
		// vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
		port: 3333,
	},
	test: {
		globals: true,
	},
	build: {
		target: "es2020",
	},
	// define: {
	// 	 "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
	// },
	plugins: [
		tsconfigPaths({ root: "./config" }),
		...VitePluginNode({
			adapter: NestFastifyHandler,

			appPath: "./src/main.ts",
			tsCompiler: "swc",
		}),
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "./src"),
		},
	},
	optimizeDeps: {
		exclude: [
			"@nestjs/microservices",
			"cache-manager",
			"@nestjs/websockets",
			"point-of-view",
			"@apollo/subgraph",
			"apollo-server-express",
			"apollo-server-fastify",
			"graphql",
			"class-transformer",
		],
	},
}));
