import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { TodoName } from "./dto/todo-name.dto";
import { Todo } from "./entities/todo.entity";

// this is a custom service.
// this service gets the names of the todos.
// you can override the default service methods here as well.
@QueryService(Todo)
export class TodoService extends TypeOrmQueryService<Todo> {
	constructor(@InjectRepository(Todo) repo: Repository<Todo>) {
		super(repo);
	}

	async getOnlyNames(todoName: string): Promise<TodoName[] | []> {
		const data = await this.repo
			.createQueryBuilder("todo")
			.select("id")
			.addSelect("name")
			.where("todo.name like :name", { name: `%${todoName}%` })
			.limit(15)
			.getRawMany();
		return data as TodoName[] | [];
	}
}
