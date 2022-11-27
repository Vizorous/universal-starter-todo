import { Field, ObjectType } from "@nestjs/graphql";
import { Expose, Transform, Type } from "class-transformer";

@ObjectType()
export class Insight {
	@Field()
	name: string;
	@Field()
	period: string;
	@Type(() => InsightsData)
	@Field(() => [InsightsData])
	values: InsightsData[];
	@Field()
	title: string;
	@Field()
	description: string;
	@Field()
	id: string;
}
@ObjectType()
export class InsightsData {
	@Field(() => Number)
	value: number;
	@Field()
	@Expose()
	@Transform(({ value }) => new Date(value))
	end_time: Date;
}
