import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetPagesFromFbArgs {
	@Field(() => String)
	fbUserId: string;
	@Field(() => String)
	userToken: string;
}
@ArgsType()
export class GetPageFromFbArgs {
	@Field(() => String)
	pageToken: string;
}
