import { Resolver } from "@nestjs/graphql";
import { GAnalyticsSource } from "./entities/g-analytics-source.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => GAnalyticsSource)
export class GAnalyticsSourceResolver {
	//  constructor(readonly service: GAnalyticsSourceService) {}
	//  @Query(() => [String], { name: "getAllg-analytics-sourceIDs", nullable: "items" })
	//  async getAllGAnalyticsSourceIDs() {
	//  return this.service.getAllIDs();
}
