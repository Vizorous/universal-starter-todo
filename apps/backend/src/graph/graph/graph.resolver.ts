// import { Args, ArgsType, Query, Resolver } from "@nestjs/graphql";
// import {
// 	ArrayConnectionType,
// 	CRUDResolver,
// 	CursorConnectionType,
// 	FindOneArgsType,
// 	OffsetConnectionType,
// 	PagingStrategies,
// } from "@vizorous/nestjs-query-graphql";
// import { Graph } from "./entities/graph.entity";
// import { Filter, InjectQueryService } from "@vizorous/nestjs-query-core";
// import { GraphService } from "./graph.service";
// import { CreateGraph } from "./dto/graph.create";
// import { UpdateGraph } from "./dto/graph.update";
// import {
// 	QueryArgsType,
// 	QueryType,
// } from "@vizorous/nestjs-query-graphql/src/types/query";
// // this is a custom resolver.
// // this resolver will merge with the default resolver
// @ArgsType()
// export class GraphQuery extends QueryArgsType(Graph) {}
// export const GraphConnection = GraphQuery;
// @Resolver(() => Graph)
// export class GraphResolver {
// 	constructor(@InjectQueryService(Graph) readonly service: GraphService) {}
// 	//  findById(
// 	// 	id: FindOneArgsType,
// 	// 	authorizeFilter?: Filter<Graph>
// 	// ): Promise<Graph> {
// 	// 	console.log("shshsdfhahdfs");
// 	// 	const graph = await super.findById(id, authorizeFilter);
// 	// 	console.log("first");
// 	// 	return graph;
// 	// }
// 	@Query(() => Graph)
// 	async completedTodoItems(@Args("id") id: number): Promise<Graph> {
// 		return this.service.getDataset(await this.service.getById(id));
// 		// add the completed filter the user provided filter

// 		// return ;
// 	}
// 	// @Query(() => Graph)
// 	// queryMany(
// 	// 	query: QueryType<Graph, PagingStrategies>,
// 	// 	authorizeFilter?: Filter<Graph>
// 	// ): Promise<
// 	// 	| CursorConnectionType<Graph>
// 	// 	| OffsetConnectionType<Graph>
// 	// 	| ArrayConnectionType<Graph>
// 	// > {
// 	// 	console.log("first");
// 	// 	return super.queryMany(query, authorizeFilter);
// 	// }
// 	// findById(
// 	// 	id: FindOneArgsType,
// 	// 	authorizeFilter?: Filter<Graph>
// 	// ): Promise<Graph> {
// 	// 	console.log("shshsdfhahdfs");
// 	// 	const graph = super.findById(id, authorizeFilter);
// 	// 	console.log("first");
// 	// 	return graph;
// 	// }
// 	//  constructor(readonly service: GraphService) {}
// 	//  @Query(() => [String], { name: "getAllgraphIDs", nullable: "items" })
// 	//  async getAllGraphIDs() {
// 	//  return this.service.getAllIDs();
// }
