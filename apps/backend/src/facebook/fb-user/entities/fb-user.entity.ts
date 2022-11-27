import { ObjectType } from "@nestjs/graphql";
import { Entity, OneToMany } from "typeorm";
import { CF, CFF, BaseEntity } from "@vizorous/nest-query-utils";
import { CursorConnection } from "@vizorous/nestjs-query-graphql";
import { FbPage } from "src/facebook/fb-page/entities/fb-page.entity";

@ObjectType()
@Entity()
// O2M, CRUD. Get the pages that belong to the user.
@CursorConnection("fbPages", () => FbPage, {
	nullable: true,
	enableAggregate: false,
})
export class FbUser extends BaseEntity {
	@CFF({
		description: "FbUser  name",
		fieldOptions: { allowedComparisons: ["in", "is", "like"] },
	})
	name: string;

	@CF({ nullable: true })
	description?: string;

	@CFF({
		description: "FB Internal Id of the page",
		fieldOptions: { allowedComparisons: ["eq", "and"] },
	})
	fbInternalUserId: string;

	@OneToMany(() => FbPage, (fbPage) => fbPage.fbUser)
	fbPages: FbPage[];

	@CF({ description: "Long lived token", nullable: true })
	token?: string;

	@CF({ description: "Expiration date", nullable: true })
	tokenExpiryDate?: Date;
}
