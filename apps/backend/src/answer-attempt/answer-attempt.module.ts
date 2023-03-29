import { Module } from "@nestjs/common";
import { AnswerAttemptService } from "./answer-attempt.service";
import { AnswerAttemptResolver } from "./answer-attempt.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateAnswerAttempt } from "./dto/answer-attempt.create";
import { UpdateAnswerAttempt } from "./dto/answer-attempt.update";
import { AnswerAttempt } from "./entities/answer-attempt.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([AnswerAttempt]);

@Module({
	providers: [AnswerAttemptResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [AnswerAttemptService],
			resolvers: [
				{
					DTOClass: AnswerAttempt,
					EntityClass: AnswerAttempt,
					UpdateDTOClass: UpdateAnswerAttempt,
					CreateDTOClass: CreateAnswerAttempt,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: AnswerAttemptService,
					// this disabled many create, update, and delete options.
					// These options could be hard to use therefore it is disabled.
					create: { many: { disabled: true } },
					update: { many: { disabled: true } },
					delete: { many: { disabled: true } },
				},
			],
		}),
		dbModule,
	],
	exports: [dbModule],
})
export class AnswerAttemptModule {}
