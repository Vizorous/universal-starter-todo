import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { Todo } from "../entities/todo.entity";

@InputType()
export class UpdateTodo extends UpdateType(Todo, ["category"]) {}
