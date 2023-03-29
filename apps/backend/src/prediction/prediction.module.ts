import { Module } from "@nestjs/common";
import { PredictionService } from "./prediction.service";
import { PredictionResolver } from "./prediction.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreatePrediction } from "./dto/prediction.create";
import { UpdatePrediction } from "./dto/prediction.update";
import { Prediction } from "./entities/prediction.entity";
import { QuestionModule } from "src/question/question.module";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Prediction]);

@Module({
	providers: [PredictionResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule, QuestionModule],
			services: [PredictionService],
			resolvers: [
				{
					DTOClass: Prediction,
					EntityClass: Prediction,
					UpdateDTOClass: UpdatePrediction,
					CreateDTOClass: CreatePrediction,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: PredictionService,
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
export class PredictionModule {}
