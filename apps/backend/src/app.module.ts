import { HttpException, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { DateScalar } from "./_common/scalars/date.scalar";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionModule } from "./question/question.module";
import { AnswerModule } from "./answer/answer.module";
import { PredictionModule } from "./prediction/prediction.module";
import { AnswerAttemptModule } from "./answer-attempt/answer-attempt.module";

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: [".env", ".env.dev", ".env.prod"], isGlobal: true, cache: true }),
		TypeOrmModule.forRoot({
			type: "mysql",
			database: process.env.DATABASE_NAME ?? "universal_todo",
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
		QuestionModule,
		AnswerModule,
		PredictionModule,
		AnswerAttemptModule,
	],
	controllers: [],
	providers: [DateScalar],
})
export class AppModule {}
