import { InputType } from "@nestjs/graphql";
import { CreateType } from "src/_common/utils/MappedTypes";
import { Category } from "../entities/category.entity";

@InputType()
export class CreateCategory extends CreateType(Category) {}
