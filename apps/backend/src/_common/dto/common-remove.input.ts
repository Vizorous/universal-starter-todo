import { InputType, PickType } from "@nestjs/graphql";
import { BaseEntity } from "../entities/base.entity";

@InputType()
export class CommonRemoveInput extends PickType(BaseEntity, ["id"], InputType) {}
