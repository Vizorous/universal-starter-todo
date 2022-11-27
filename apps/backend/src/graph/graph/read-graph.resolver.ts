import { Args, ArgsType, Query, Resolver } from "@nestjs/graphql";
import {
	FindOneArgsType,
	ReadResolver,
	Relatable,
} from "@vizorous/nestjs-query-graphql";
import { Graph } from "./entities/graph.entity";
import { GraphService } from "./graph.service";

@ArgsType()
class FO extends FindOneArgsType(Graph) {}
@Resolver(() => Graph)
export class GraphReadResolver extends Relatable(
	Graph,
	{}
)(
	ReadResolver(Graph, {
		disableSort: true,
	})
) {
	constructor(readonly service: GraphService) {
		super(service);
	}

	// const commonResolverOpts = omit(opts, 'dtoName', 'one', 'many', 'QueryArgs', 'Connection', 'withDeleted')
	// @ResolverQuery(
	//   () => Graph,
	//   { name: "graphWDatasets", description:"Graph Endpoint with Datasets embedded" },

	//   { interceptors: [HookInterceptor(HookTypes.BEFORE_FIND_ONE, DTOClass), AuthorizerInterceptor(DTOClass)] },
	//   opts.one ?? {}
	// )
	@Query(() => Graph, { name: "graphWithDatasets" })
	async graphWithDatasets(@Args() args: FO): Promise<Graph> {
		// const graph = await this.service.getById(args.id, {});

		// console.log(graph);
		return this.service.getDataset(args.id);
	}
}
