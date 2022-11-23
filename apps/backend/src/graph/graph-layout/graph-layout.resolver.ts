import { Resolver } from "@nestjs/graphql";
import { GraphLayout } from "./entities/graph-layout.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => GraphLayout)
export class GraphLayoutResolver {
	//  constructor(readonly service: GraphLayoutService) {}
	//  @Query(() => [String], { name: "getAllgraph-layoutIDs", nullable: "items" })
	//  async getAllGraphLayoutIDs() {
	//  return this.service.getAllIDs();
}
