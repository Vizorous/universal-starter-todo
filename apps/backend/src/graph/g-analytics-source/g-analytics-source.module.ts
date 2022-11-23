import { Module } from "@nestjs/common";
import { GAnalyticsSourceService } from "./g-analytics-source.service";
import { GAnalyticsSourceResolver } from "./g-analytics-source.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateGAnalyticsSource } from "./dto/g-analytics-source.create";
import { UpdateGAnalyticsSource } from "./dto/g-analytics-source.update";
import { GAnalyticsSource } from "./entities/g-analytics-source.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([GAnalyticsSource]);

@Module({
	providers: [GAnalyticsSourceResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [GAnalyticsSourceService],
			resolvers: [
				{
					DTOClass: GAnalyticsSource,
					EntityClass: GAnalyticsSource,
					UpdateDTOClass: UpdateGAnalyticsSource,
					CreateDTOClass: CreateGAnalyticsSource,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: GAnalyticsSourceService,
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
export class GAnalyticsSourceModule {}
