import { InputType, Field, ID } from "@nestjs/graphql";

@InputType()
export class CreatePageLongTokenInput {
	@Field(() => ID, { description: "User Id", nullable: true })
	fbUserId?: string;
	@Field(() => String, { description: "Fb internal user Id", nullable: true })
	fbInternalUserId?: string;
	@Field(() => ID, { description: "Page Id" })
	fbPageId: string;
	@Field(() => String, { description: "Fb internal page Id", nullable: true })
	fbInternalPageId?: string;
	@Field({ description: "Long Lived User Token", nullable: true })
	userLongToken?: string;
}
