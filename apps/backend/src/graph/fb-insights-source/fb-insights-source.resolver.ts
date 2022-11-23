import { Resolver } from "@nestjs/graphql";
import { FbInsightsSource } from "./entities/fb-insights-source.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => FbInsightsSource)
export class FbInsightsSourceResolver {
	//  constructor(readonly service: FbInsightsSourceService) {}
	//  @Query(() => [String], { name: "getAllfb-insights-sourceIDs", nullable: "items" })
	//  async getAllFbInsightsSourceIDs() {
	//  return this.service.getAllIDs();
}
