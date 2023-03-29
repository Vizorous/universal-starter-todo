import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { Question } from "./entities/question.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(Question)
export class QuestionService extends TypeOrmQueryService<Question> {
	constructor(@InjectRepository(Question) repo: Repository<Question>) {
		super(repo);
	}
	// async query(query: Query<Question>): Promise<Question[]> {
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

