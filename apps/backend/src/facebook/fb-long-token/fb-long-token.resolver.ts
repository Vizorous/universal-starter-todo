import { Resolver, Args, Mutation } from "@nestjs/graphql";
import { CreatePageLongTokenInput } from "./dto/create-page-long-token.input";
import { FbLongToken } from "./entities/fb-long-token.entity";
import { FbLongTokenService } from "./fb-long-token.service";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => FbLongToken)
export class FbLongTokenResolver {
	constructor(readonly service: FbLongTokenService) {}
	@Mutation(() => FbLongToken)
	createPageLongToken(
		@Args("createPageLongTokenInput")
		createPageLongToken: CreatePageLongTokenInput
	) {
		return this.service.createPageLongToken(createPageLongToken);
	}
	//  @Query(() => [String], { name: "getAllfb-long-tokenIDs", nullable: "items" })
	//  async getAllFbLongTokenIDs() {
	//  return this.service.getAllIDs();
}
