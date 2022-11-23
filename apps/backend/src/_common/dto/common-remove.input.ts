import { InputType, PickType } from "@nestjs/graphql";
import { BaseEntity } from "@vizorous/nest-query-utils";

@InputType()
export class CommonRemoveInput extends PickType(
	BaseEntity,
	["id"],
	InputType
) {}
