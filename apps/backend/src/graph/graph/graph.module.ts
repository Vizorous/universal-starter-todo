import { Module } from "@nestjs/common";
import { GraphService } from "./graph.service";
import { GraphResolver } from "./graph.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateGraph } from "./dto/graph.create";
import { UpdateGraph } from "./dto/graph.update";
import { Graph } from "./entities/graph.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Graph]);

@Module({
	providers: [GraphResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
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
					ServiceClass: GraphService,
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
export class GraphModule {}
