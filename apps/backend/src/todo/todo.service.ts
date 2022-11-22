import { InjectRepository } from "@nestjs/typeorm";
import { Query, QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { Todo } from "./entities/todo.entity";

// this is a custom service.
// this service gets the names of the todos.
// you can override the default service methods here as well.
@QueryService(Todo)
export class TodoService extends TypeOrmQueryService<Todo> {
	constructor(@InjectRepository(Todo) repo: Repository<Todo>) {
		super(repo);
	}
	async query(query: Query<Todo>): Promise<Todo[]> {
		// you can override the default query here.
		return super.query(query);
	}
	async getOnlyNames(todoName: string): Promise<string[] | []> {
		const data = await this.repo.find({ select: ["name"] });
		const idList = data.map((todo) => todo.id);
		return idList;
	}
}
