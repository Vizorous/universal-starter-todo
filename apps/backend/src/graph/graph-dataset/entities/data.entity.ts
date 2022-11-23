import { Field, ObjectType } from "@nestjs/graphql";
import { Transform } from "class-transformer";

@ObjectType()
export class Data {
	@Transform(({ value }) => new Date(value))
	@Field()
	x: Date;
	@Field()
	y: number;
}
