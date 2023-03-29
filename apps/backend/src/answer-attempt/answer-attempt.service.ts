import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { AnswerAttempt } from "./entities/answer-attempt.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(AnswerAttempt)
export class AnswerAttemptService extends TypeOrmQueryService<AnswerAttempt> {
	constructor(@InjectRepository(AnswerAttempt) repo: Repository<AnswerAttempt>) {
		super(repo);
	}
	// async query(query: Query<AnswerAttempt>): Promise<AnswerAttempt[]> {
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

