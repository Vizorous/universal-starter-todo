import { Resolver } from "@nestjs/graphql";
import { Dashboard } from "./entities/dashboard.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => Dashboard)
export class DashboardResolver {
	//  constructor(readonly service: DashboardService) {}
	//  @Query(() => [String], { name: "getAlldashboardIDs", nullable: "items" })
	//  async getAllDashboardIDs() {
	//  return this.service.getAllIDs();
}
