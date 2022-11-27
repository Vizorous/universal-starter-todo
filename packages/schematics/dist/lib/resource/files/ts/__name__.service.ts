import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { <%= classify(name) %> } from "./entities/<%= singular(name) %>.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(<%= classify(name) %>)
export class <%= classify(name) %>Service extends TypeOrmQueryService<<%= classify(name) %>> {
	constructor(@InjectRepository(<%= classify(name) %>) repo: Repository<<%= classify(name) %>>) {
		super(repo);
	}
	// async query(query: Query<<%=classify(name)%>>): Promise<<%=classify(name)%>[]> {
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

