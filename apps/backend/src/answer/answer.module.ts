import { Module } from "@nestjs/common";
import { AnswerService } from "./answer.service";
import { AnswerResolver } from "./answer.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateAnswer } from "./dto/answer.create";
import { UpdateAnswer } from "./dto/answer.update";
import { Answer } from "./entities/answer.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Answer]);

@Module({
	providers: [AnswerResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [AnswerService],
			resolvers: [
				{
					DTOClass: Answer,
					EntityClass: Answer,
					UpdateDTOClass: UpdateAnswer,
					CreateDTOClass: CreateAnswer,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: AnswerService,
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
export class AnswerModule {}
