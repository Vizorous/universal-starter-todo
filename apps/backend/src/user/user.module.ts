import { Module } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UpdateUser } from "./dto/user.update";
import { CreateUser } from "./dto/user.create";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";

const dbModule = NestjsQueryTypeOrmModule.forFeature([User]);
@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			resolvers: [
				{
					DTOClass: User,
					EntityClass: User,
					UpdateDTOClass: UpdateUser,
					CreateDTOClass: CreateUser,
				},
			],
		}),
		dbModule,
	],
	exports: [dbModule],
})
export class UserModule {}
