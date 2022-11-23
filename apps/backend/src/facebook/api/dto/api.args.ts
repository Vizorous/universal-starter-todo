import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class ApiArgs {
	@Field(() => String)
	access_token: string;
}
