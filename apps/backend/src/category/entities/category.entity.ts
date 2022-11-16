import { ObjectType } from "@nestjs/graphql";
import { Entity } from "typeorm";
import CFF from "src/_common/decorators/CFF";
import { BaseEntity } from "../../_common/entities/base.entity";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
	@CFF({ description: "Category name", fieldOptions: { allowedComparisons: ["in", "is", "like"] } })
	name: string;
}
