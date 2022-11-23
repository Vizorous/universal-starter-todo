import { Resolver } from "@nestjs/graphql";
import { FbUser } from "./entities/fb-user.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => FbUser)
export class FbUserResolver {
	//  constructor(readonly service: FbUserService) {}
	//  @Query(() => [String], { name: "getAllfb-userIDs", nullable: "items" })
	//  async getAllFbUserIDs() {
	//  return this.service.getAllIDs();
}
