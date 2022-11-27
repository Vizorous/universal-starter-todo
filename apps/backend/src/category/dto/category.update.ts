import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { Category } from "../entities/category.entity";

@InputType()
export class UpdateCategory extends UpdateType(Category) {}
