import { ObjectType, PickType } from "@nestjs/graphql";
import { Todo } from "../entities/todo.entity";

@ObjectType()
export class TodoName extends PickType(Todo, ["id", "name"]) {}
