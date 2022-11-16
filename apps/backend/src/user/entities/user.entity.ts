import { ObjectType } from "@nestjs/graphql";
import { Entity } from "typeorm";
import CFF from "src/_common/decorators/CFF";
import { BaseEntity } from "../../_common/entities/base.entity";

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@CFF({ description: "User name", fieldOptions: { allowedComparisons: ["in", "is", "like"] } })
	name: string;
	@CFF({
		description: "User email",
		fieldOptions: { allowedComparisons: ["in", "is", "like"] },
		columnOptions: { unique: true },
	})
	email: string;

	@CFF({
		description: "User AIESEC email",
		fieldOptions: { allowedComparisons: ["in", "is", "like"] },
		nullable: true,
	})
	aiesecEmail: string;

	@CFF({ description: "User entity", fieldOptions: { allowedComparisons: ["in", "is"] } })
	entity: string;

	@CFF({ description: "User role", fieldOptions: { allowedComparisons: ["in", "is"] } })
	role: string;
}
