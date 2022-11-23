import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateUserLongTokenInput {
	@Field({ description: "User ID" })
	fbUserId: string;
	@Field({ description: "Short Lived User Token" })
	userShortToken: string;
}
