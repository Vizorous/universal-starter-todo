import { Module } from "@nestjs/common";
import { FbUserService } from "./fb-user.service";
import { FbUserResolver } from "./fb-user.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateFbUser } from "./dto/fb-user.create";
import { UpdateFbUser } from "./dto/fb-user.update";
import { FbUser } from "./entities/fb-user.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([FbUser]);

@Module({
	providers: [FbUserResolver, FbUserService],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [FbUserService],
			resolvers: [
				{
					DTOClass: FbUser,
					EntityClass: FbUser,
					UpdateDTOClass: UpdateFbUser,
					CreateDTOClass: CreateFbUser,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: FbUserService,
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
	exports: [dbModule, FbUserService],
})
export class FbUserModule {}
