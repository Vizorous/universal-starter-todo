import { Module } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { QuestionResolver } from "./question.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateQuestion } from "./dto/question.create";
import { UpdateQuestion } from "./dto/question.update";
import { Question } from "./entities/question.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Question]);

@Module({
	providers: [QuestionResolver, QuestionService],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [QuestionService],
			resolvers: [
				{
					DTOClass: Question,
					EntityClass: Question,
					UpdateDTOClass: UpdateQuestion,
					CreateDTOClass: CreateQuestion,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: QuestionService,
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
	exports: [dbModule, QuestionService],
})
export class QuestionModule {}

