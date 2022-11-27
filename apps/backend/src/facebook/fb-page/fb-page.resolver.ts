import { Resolver, Args, Query } from "@nestjs/graphql";
import { GetPageFromFbArgs, GetPagesFromFbArgs } from "./dto/get-page.args";
import { FbPage } from "./entities/fb-page.entity";
import { FbPageService } from "./fb-page.service";
import { Selections } from "@jenyus-org/nestjs-graphql-utils";
import { PageFromFb } from "./entities/page-from-fb.entity";
// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => FbPage)
export class FbPageResolver {
	constructor(readonly service: FbPageService) {}
	@Query(() => [PageFromFb], { name: "pagesFromFb", nullable: "items" })
	async findAllFromFb(@Args() getPagesFromFbArgs: GetPagesFromFbArgs) {
		return this.service.findAllFromFb(getPagesFromFbArgs);
	}

	@Query(() => PageFromFb, { name: "pageFromFb", nullable: true })
	findOneFromFb(
		@Args() getPageFromFbArgs: GetPageFromFbArgs,
		@Selections("pageFromFb", ["*."]) fields: string[]
	) {
		return this.service.findOneFromFb(getPageFromFbArgs, fields);
	}
}
