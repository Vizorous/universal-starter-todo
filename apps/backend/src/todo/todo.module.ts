import { Module } from "@nestjs/common";
import { Todo } from "./entities/todo.entity";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { UpdateTodo } from "./dto/todo.update";
import { CreateTodo } from "./dto/todo.create";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { TodoService } from "./todo.service";
import { TodoResolver } from "./todo.resolver";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Todo]);
@Module({
	providers: [TodoResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [TodoService],
			resolvers: [
				{
					DTOClass: Todo,
					EntityClass: Todo,
					UpdateDTOClass: UpdateTodo,
					CreateDTOClass: CreateTodo,
					//this enabled aggregration.
					//this allows count, sum, avg, min, max operations.
					enableAggregate: true,
					ServiceClass: TodoService,
					// this disabled many create, update, and delete options.
					// These options could be hard to use therefore it is disabled.
					create: { many: { disabled: true } },
					update: { many: { disabled: true } },
					delete: { many: { disabled: true } },
				},
			],
		}),
		dbModule,
	],
	exports: [dbModule],
})
export class TodoModule {}
