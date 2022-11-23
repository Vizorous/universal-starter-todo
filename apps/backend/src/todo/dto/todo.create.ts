import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { Todo } from "../entities/todo.entity";

@InputType()
export class CreateTodo extends CreateType(Todo, [
	"category",
	"subTasks",
	"done",
]) {}
