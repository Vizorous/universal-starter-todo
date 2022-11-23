import { Module } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { DashboardResolver } from "./dashboard.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { CreateDashboard } from "./dto/dashboard.create";
import { UpdateDashboard } from "./dto/dashboard.update";
import { Dashboard } from "./entities/dashboard.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([Dashboard]);

@Module({
	providers: [DashboardResolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [DashboardService],
			resolvers: [
				{
					DTOClass: Dashboard,
					EntityClass: Dashboard,
					UpdateDTOClass: UpdateDashboard,
					CreateDTOClass: CreateDashboard,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: DashboardService,
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
export class DashboardModule {}
