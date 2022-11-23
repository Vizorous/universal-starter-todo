import { Field, ObjectType } from "@nestjs/graphql";
import { Entity, Index, ManyToOne, Unique } from "typeorm";
import { CFF, CFID } from "@vizorous/nest-query-utils";
import { FbLongToken } from "src/facebook/fb-long-token/entities/fb-long-token.entity";
import { FilterableRelation } from "@vizorous/nestjs-query-graphql";
import { FbUser } from "src/facebook/fb-user/entities/fb-user.entity";

@ObjectType()
@Entity()
// page must be unique to the user.
@Unique("UPageIdUserId", ["fbInternalPageId", "fbUserId"])
// M2O, CR. Required. Get the user that owns the page.
@FilterableRelation("fbUser", () => FbUser, {
	disableRemove: true,
	disableUpdate: true,
})
export class FbPage extends FbLongToken {
	@Index({ fulltext: true })
	@CFF({
		description: "FbPage  name",
		fieldOptions: { allowedComparisons: ["in", "is", "like"] },
	})
	name: string;

	@CFF({
		description: "FB Internal Id of the page",
		fieldOptions: { allowedComparisons: ["eq", "and"] },
	})
	fbInternalPageId: string;

	@ManyToOne(() => FbUser)
	fbUser: FbUser;

	@CFID({ description: "Fb user id" })
	fbUserId: string;
}

@ObjectType()
export class PageFromFb {
	@Field({ description: "Name of the page" })
	name: string;
	@Field({ description: "Id of the page" })
	id: string;
}
