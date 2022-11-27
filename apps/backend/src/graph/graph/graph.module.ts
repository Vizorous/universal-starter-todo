import { Module } from "@nestjs/common";
import { GraphService } from "./graph.service";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateGraph } from "./dto/graph.create";
import { UpdateGraph } from "./dto/graph.update";
import { Graph } from "./entities/graph.entity";
import { FbInsightsSource } from "../fb-insights-source/entities/fb-insights-source.entity";
import { FbInsightsSourceModule } from "../fb-insights-source/fb-insights-source.module";
import { InsightsModule } from "src/facebook/insights/insights.module";
import { GraphReadResolver } from "./read-graph.resolver";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Graph]);

@Module({
	providers: [GraphReadResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule, InsightsModule],
			services: [GraphService],
			resolvers: [
				{
					DTOClass: Graph,
					EntityClass: Graph,
					UpdateDTOClass: UpdateGraph,
					CreateDTOClass: CreateGraph,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					// ServiceClass: GraphService,
					// this disabled many create, update, and delete options.
					// These options could be hard to use therefore it is disabled.
					// create: { many: { disabled: true } },
					// update: { many: { disabled: true } },
					// delete: { many: { disabled: true } },
				},
			],
		}),
		dbModule,
	],
	exports: [dbModule],
})
export class GraphModule {}
