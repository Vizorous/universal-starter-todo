import { Module } from "@nestjs/common";
import { SectionService } from "./section.service";
import { SectionResolver } from "./section.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateSection } from "./dto/section.create";
import { UpdateSection } from "./dto/section.update";
import { Section } from "./entities/section.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Section]);

@Module({
	providers: [SectionResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [SectionService],
			resolvers: [
				{
					DTOClass: Section,
					EntityClass: Section,
					UpdateDTOClass: UpdateSection,
					CreateDTOClass: CreateSection,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: SectionService,
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
export class SectionModule {}
