import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { GAnalyticsSource } from "./entities/g-analytics-source.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(GAnalyticsSource)
export class GAnalyticsSourceService extends TypeOrmQueryService<GAnalyticsSource> {
	constructor(
		@InjectRepository(GAnalyticsSource) repo: Repository<GAnalyticsSource>
	) {
		super(repo);
	}
	// async query(query: Query<GAnalyticsSource>): Promise<GAnalyticsSource[]> {
	// you can override the default query here.
	// return super.query(query);
	// }
	// custom service method
	// async getAllIds():Promise<string[]|[]>{
	// const data = await this.repo
	// 	.find({select: ["name"]})
	// const idList=data.map((todo) =>
	// 	todo.id);
	// return idList;
	// }
}
