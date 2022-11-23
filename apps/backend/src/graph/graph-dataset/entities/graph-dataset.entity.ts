import { Field, ObjectType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { Data } from "./data.entity";

@ObjectType()
export class GraphDataset {
	@Field()
	label: string;

	@Field()
	name: string;

	@Type(() => Data)
	@Field(() => [Data])
	data: Data[];

	// @Field()
	// type: string;
	// @Field()
	// yAxisID: string;
}
