import { InputType } from "@nestjs/graphql";
import { CreateType } from "src/_common/utils/MappedTypes";
import { Todo } from "../entities/todo.entity";

@InputType()
export class CreateTodo extends CreateType(Todo, ["category", "subTasks", "done"]) {}
