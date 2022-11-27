import { Resolver, Args, Mutation } from "@nestjs/graphql";
import { FbPage } from "../fb-page/entities/fb-page.entity";
import { FbUser } from "../fb-user/entities/fb-user.entity";
import { CreatePageLongTokenInput } from "./dto/create-page-long-token.input";
import { CreateUserLongTokenInput } from "./dto/create-user-long-token.input";
import { FbLongToken } from "./entities/fb-long-token.entity";
import { FbLongTokenService } from "./fb-long-token.service";

@Resolver(() => FbLongToken)
export class FbLongTokenResolver {
	constructor(readonly service: FbLongTokenService) {}
	// Create the user long token, utilized the short token.
	// Must be called before page long token.
	@Mutation(() => FbUser)
	createUserLongToken(
		@Args("createUserLongTokenInput")
		createUserLongToken: CreateUserLongTokenInput
	) {
		return this.service.createUserLongToken(createUserLongToken);
	}
	// Create the page long token, utilizes the user long token.
	@Mutation(() => FbPage)
	createPageLongToken(
		@Args("createPageLongTokenInput")
		createPageLongToken: CreatePageLongTokenInput
	) {
		return this.service.createPageLongToken(createPageLongToken);
	}

	@Mutation(() => FbPage)
	removePageLongToken(@Args("pageId") pageId: string) {
		return this.service.removePageLongToken(pageId);
	}
	@Mutation(() => FbUser)
	removeUserLongToken(@Args("userId") userId: string) {
		return this.service.removeUserLongToken(userId);
	}
}
