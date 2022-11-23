import { Resolver } from "@nestjs/graphql";
import { Graph } from "./entities/graph.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => Graph)
export class GraphResolver {
	//  constructor(readonly service: GraphService) {}
	//  @Query(() => [String], { name: "getAllgraphIDs", nullable: "items" })
	//  async getAllGraphIDs() {
	//  return this.service.getAllIDs();
}
