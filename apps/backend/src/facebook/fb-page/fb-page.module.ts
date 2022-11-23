import { Module } from "@nestjs/common";
import { FbPageService } from "./fb-page.service";
import { FbPageResolver } from "./fb-page.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateFbPage } from "./dto/fb-page.create";
import { UpdateFbPage } from "./dto/fb-page.update";
import { FbPage } from "./entities/fb-page.entity";
import { FbApiModule } from "../api/api.module";

const dbModule = NestjsQueryTypeOrmModule.forFeature([FbPage]);

@Module({
	providers: [FbPageResolver, FbPageService],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule, FbApiModule],
			services: [FbPageService],
			resolvers: [
				{
					DTOClass: FbPage,
					EntityClass: FbPage,
					UpdateDTOClass: UpdateFbPage,
					CreateDTOClass: CreateFbPage,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: FbPageService,
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
	exports: [dbModule, FbPageService],
})
export class FbPageModule {}
