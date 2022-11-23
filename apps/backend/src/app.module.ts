import { HttpException, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { DateScalar } from "./_common/scalars/date.scalar";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DashboardModule } from "./dashboard/dashboard/dashboard.module";
import { SectionModule } from "./dashboard/section/section.module";
import { GraphModule } from "./graph/graph/graph.module";
import { GraphLayoutModule } from "./graph/graph-layout/graph-layout.module";
import { GAnalyticsSourceModule } from "./graph/g-analytics-source/g-analytics-source.module";
import { FbInsightsSourceModule } from "./graph/fb-insights-source/fb-insights-source.module";
import { FbPageModule } from "./facebook/fb-page/fb-page.module";
import { FbLongTokenModule } from "./facebook/fb-long-token/fb-long-token.module";
import { FbUserModule } from "./facebook/fb-user/fb-user.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env", ".env.dev", ".env.prod"],
			isGlobal: true,
			cache: true,
		}),
		TypeOrmModule.forRoot({
			type: "mysql",
			database: process.env.DATABASE_NAME ?? "seamless_analytics",
			host: "localhost",
			port: 3306,
			username: process.env.DATABASE_USERNAME ?? "root",
			password: process.env.DATABASE_PASSWORD ?? "root",
			// type: "postgres",
			// database: "test",
			// port: 5432,
			// username: "postgres",
			// password: "kl;'",
			synchronize: true,
			autoLoadEntities: true,
		}),
		GraphQLModule.forRoot<MercuriusDriverConfig>({
			driver: MercuriusDriver,
			errorFormatter: (execution) => {
				const [error] = execution.errors; // take first error
				const originalError = error?.originalError;
				if (originalError instanceof HttpException)
					return {
						statusCode: originalError.getStatus(),
						response: { data: originalError.getResponse() as any },
					};
				return { statusCode: 400, response: execution };
			},
			graphiql: false,
			autoSchemaFile: "./../frontend/schema.graphql",
		}),
		// UserModule,
		// TodoModule,
		// SubTaskModule,
		// CategoryModule,
		DashboardModule,
		SectionModule,
		GraphModule,
		GraphLayoutModule,
		GAnalyticsSourceModule,
		FbInsightsSourceModule,
		FbPageModule,
		FbLongTokenModule,
		FbUserModule,
	],
	controllers: [],
	providers: [DateScalar],
})
export class AppModule {}
