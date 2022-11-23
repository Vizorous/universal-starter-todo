import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { GraphLayout } from "./entities/graph-layout.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(GraphLayout)
export class GraphLayoutService extends TypeOrmQueryService<GraphLayout> {
	constructor(@InjectRepository(GraphLayout) repo: Repository<GraphLayout>) {
		super(repo);
	}
	// async query(query: Query<GraphLayout>): Promise<GraphLayout[]> {
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
