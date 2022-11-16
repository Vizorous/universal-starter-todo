import { Resolver, Args, Query } from "@nestjs/graphql";
import { Todo } from "./entities/todo.entity";
import { TodoService } from "./todo.service";
import { TodoName } from "./dto/todo-name.dto";

// this is a custom resolver.
// this resolver is used to only get the names of the todos.
@Resolver(() => Todo)
export class TodoResolver {
	constructor(readonly service: TodoService) {}
	@Query(() => [TodoName], { name: "todoNames", nullable: "items" })
	async getTodoNames(@Args("todoName") todoName: string) {
		return this.service.getOnlyNames(todoName);
	}
}
