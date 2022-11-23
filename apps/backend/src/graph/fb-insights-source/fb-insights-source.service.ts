import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { FbInsightsSource } from "./entities/fb-insights-source.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(FbInsightsSource)
export class FbInsightsSourceService extends TypeOrmQueryService<FbInsightsSource> {
	constructor(
		@InjectRepository(FbInsightsSource) repo: Repository<FbInsightsSource>
	) {
		super(repo);
	}
	// async query(query: Query<FbInsightsSource>): Promise<FbInsightsSource[]> {
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
