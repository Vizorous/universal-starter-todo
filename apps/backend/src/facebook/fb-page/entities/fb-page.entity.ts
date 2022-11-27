import { ObjectType } from "@nestjs/graphql";
import { Entity, Index, ManyToOne, Unique } from "typeorm";
import { BaseEntity, CF, CFF, CFID } from "@vizorous/nest-query-utils";
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
export class FbPage extends BaseEntity {
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

	@CF({ description: "Long lived token", nullable: true })
	token?: string;

	@CF({ description: "Expiration date", nullable: true })
	tokenExpiryDate?: Date;
}

// utilizing mixins to add the long token to the page.
