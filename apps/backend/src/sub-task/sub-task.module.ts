import { Module } from "@nestjs/common";
import { SubTask } from "./entities/sub-task.entity";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { UpdateSubTask } from "./dto/sub-task.update";
import { CreateSubTask } from "./dto/sub-task.create";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";

const dbModule = NestjsQueryTypeOrmModule.forFeature([SubTask]);
@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			resolvers: [
				{
					DTOClass: SubTask,
					EntityClass: SubTask,
					UpdateDTOClass: UpdateSubTask,
					CreateDTOClass: CreateSubTask,
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
export class SubTaskModule {}
