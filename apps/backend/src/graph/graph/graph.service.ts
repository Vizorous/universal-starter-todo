import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import Case from "case";
import { lastValueFrom } from "rxjs";
import { InsightsService } from "src/facebook/insights/insights.service";
import { Repository } from "typeorm";
import { Data } from "../graph-dataset/entities/data.entity";
import { GraphDataset } from "../graph-dataset/entities/graph-dataset.entity";
import { Graph } from "./entities/graph.entity";
import { GraphSourceType } from "./enums/graph-source-type.enum";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(Graph)
export class GraphService extends TypeOrmQueryService<Graph> {
	constructor(
		@InjectRepository(Graph) repo: Repository<Graph>,
		private fbInsightsService: InsightsService
	) {
		super(repo);
	}
	async getDataset(id: string | number): Promise<Graph> {
		const dto = await super.getById(id);
		console.log(dto);
		switch (dto.graphSourceType) {
			case GraphSourceType.fbInsights:
				try {
					const data = await lastValueFrom(
						await this.fbInsightsService.findAll(dto.fbInsightsSource)
					);

					const datasets: GraphDataset[] = data.length > 0 && [];
					data.forEach((dataPoint) => {
						datasets.push({
							data: dataPoint.values.map(
								(value) =>
									({ x: new Date(value.end_time), y: value.value } as Data)
							),
							label: Case.capital(dataPoint.name),
							name: dataPoint.name,
						});
					});
					// dto.graphDatasets = datasets;
				} catch (err) {
					console.error(err);
					throw new Error("Error while getting insights");
				}
				return dto;

			default:
				return dto;
		}
	}
	// async query(query: Query<Graph>): Promise<Graph[]> {
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
