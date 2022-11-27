import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PageFromFb {
	@Field({ description: "Name of the page" })
	name: string;
	@Field({ description: "Id of the page" })
	id: string;
}
