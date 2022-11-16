import { Module } from "@nestjs/common";
import { Category } from "./entities/category.entity";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { UpdateCategory } from "./dto/category.update";
import { CreateCategory } from "./dto/category.create";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Category]);
@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			resolvers: [
				{
					DTOClass: Category,
					EntityClass: Category,
					UpdateDTOClass: UpdateCategory,
					CreateDTOClass: CreateCategory,
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
export class CategoryModule {}
