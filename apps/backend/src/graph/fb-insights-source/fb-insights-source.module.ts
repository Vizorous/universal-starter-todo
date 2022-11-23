import { Module } from "@nestjs/common";
import { FbInsightsSourceService } from "./fb-insights-source.service";
import { FbInsightsSourceResolver } from "./fb-insights-source.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateFbInsightsSource } from "./dto/fb-insights-source.create";
import { UpdateFbInsightsSource } from "./dto/fb-insights-source.update";
import { FbInsightsSource } from "./entities/fb-insights-source.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([FbInsightsSource]);

@Module({
	providers: [FbInsightsSourceResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [FbInsightsSourceService],
			resolvers: [
				{
					DTOClass: FbInsightsSource,
					EntityClass: FbInsightsSource,
					UpdateDTOClass: UpdateFbInsightsSource,
					CreateDTOClass: CreateFbInsightsSource,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: FbInsightsSourceService,
					// this disabled many create, update, and delete options.
					// These options could be hard to use therefore it is disabled.
					create: { many: { disabled: true } },
					update: { many: { disabled: true } },
					delete: { many: { disabled: true }, one: { disabled: true } },
					read: { many: { disabled: true }, one: { disabled: true } },
				},
			],
		}),
		dbModule,
	],
	exports: [dbModule],
})
export class FbInsightsSourceModule {}
