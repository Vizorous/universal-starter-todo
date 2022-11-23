import { Module } from "@nestjs/common";
import { GraphLayoutService } from "./graph-layout.service";
import { GraphLayoutResolver } from "./graph-layout.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateGraphLayout } from "./dto/graph-layout.create";
import { UpdateGraphLayout } from "./dto/graph-layout.update";
import { GraphLayout } from "./entities/graph-layout.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([GraphLayout]);

@Module({
	providers: [GraphLayoutResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [GraphLayoutService],
			resolvers: [
				{
					DTOClass: GraphLayout,
					EntityClass: GraphLayout,
					UpdateDTOClass: UpdateGraphLayout,
					CreateDTOClass: CreateGraphLayout,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: GraphLayoutService,
					// this disabled many create, update, and delete options.
					// These options could be hard to use therefore it is disabled.
					create: { many: { disabled: true } },
					update: { many: { disabled: true } },
					read: { many: { disabled: true }, one: { disabled: true } },
					delete: { many: { disabled: true }, one: { disabled: true } },
				},
			],
		}),
		dbModule,
	],
	exports: [dbModule],
})
export class GraphLayoutModule {}
