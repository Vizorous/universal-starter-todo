import { InputType, Field, ID } from "@nestjs/graphql";

@InputType()
export class CreatePageLongTokenInput {
	@Field(() => ID, { description: "User Id" })
	fbUserId: string;
	@Field(() => ID, { description: "Page Id" })
	fbPageId: string;
	@Field(() => String, { description: "Fb Internal page Id" })
	fbInternalPageId: string;
	@Field({ description: "Long Lived User Token" })
	userLongToken: string;
}
