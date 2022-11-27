import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { Category } from "../entities/category.entity";

@InputType()
export class CreateCategory extends CreateType(Category) {}
