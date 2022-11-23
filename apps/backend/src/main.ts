import { NestFactory } from "@nestjs/core";
import {
	FastifyAdapter,
	NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { getEnv } from "./_common/config/local.config";
import { NestApplicationOptions, ValidationPipe } from "@nestjs/common";
import AltairFastify from "altair-fastify-plugin";
import { GlobalGraphQLFilter } from "./_common/filters/gql.exception.filter";
declare const module: any;

type appType = Promise<NestFastifyApplication>;

export async function createApp(options?: NestApplicationOptions): appType {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
		options
	);
	app.enableCors();
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			enableDebugMessages: true,
			exceptionFactory: (errors) => console.log(errors.toString(), "TESTING"),
		})
	);
	app.useGlobalFilters(new GlobalGraphQLFilter());
	app.getHttpAdapter().getInstance().register(AltairFastify, {
		path: "/altair",
		baseURL: "/altair/",
		// 'endpointURL' should be the same as the mercurius 'path'
		endpointURL: "/graphql",
	});
	// useContainer(app.select(AppModule), { fallbackOnErrors: true });
	return app;
}

async function main() {
	const app = await createApp();
	await app.listen(getEnv().PORT);
	return app;
}
async function reload() {
	const app = await main();
	console.log(
		`🚀 GraphQL listening on http://localhost:${getEnv().PORT}/graphql`
	);
	console.log(
		`🚀 GraphQL Playground on http://localhost:${getEnv().PORT}/altair`
	);
	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}
export let viteNodeApp: appType;
if (getEnv().NODE_ENV === "production") {
	main();
} else if (getEnv().SERVER === "vite") {
	viteNodeApp = createApp();
} else {
	void reload();
}
