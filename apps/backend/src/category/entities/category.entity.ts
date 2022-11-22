import { ObjectType } from "@nestjs/graphql";
import { Entity } from "typeorm";
import { CFF } from "@vizorous/nest-query-utils";
import { BaseEntity } from "@vizorous/nest-query-utils";
import { KeySet } from "@vizorous/nestjs-query-graphql";

@ObjectType()
@Entity()
@KeySet(["id"])
export class Category extends BaseEntity {
	@CFF({ description: "Category name", fieldOptions: { allowedComparisons: ["in", "is", "like"] } })
	name: string;
}
