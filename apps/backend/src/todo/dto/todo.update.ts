import { InputType } from "@nestjs/graphql";
import { UpdateType } from "src/_common/utils/MappedTypes";
import { Todo } from "../entities/todo.entity";

@InputType()
export class UpdateTodo extends UpdateType(Todo, ["category"]) {}
