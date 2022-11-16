import { InputType } from "@nestjs/graphql";
import { UpdateType } from "src/_common/utils/MappedTypes";
import { Category } from "../entities/category.entity";

@InputType()
export class UpdateCategory extends UpdateType(Category) {}
