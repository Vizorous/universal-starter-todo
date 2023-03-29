import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { QuestionService } from "src/question/question.service";
import { Repository } from "typeorm";
import { Prediction } from "./entities/prediction.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(Prediction)
export class PredictionService extends TypeOrmQueryService<Prediction> {
	constructor(@InjectRepository(Prediction) repo: Repository<Prediction>, private questionService: QuestionService) {
		super(repo);
	}
	async createOne(record: DeepPartial<Prediction>): Promise<Prediction> {
		console.log(record.answerAttempt);
		return super.createOne(record);
	}
	// async query(query: Query<Prediction>): Promise<Prediction[]> {
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
