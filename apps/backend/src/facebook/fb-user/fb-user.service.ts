import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { FbUser } from "./entities/fb-user.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(FbUser)
export class FbUserService extends TypeOrmQueryService<FbUser> {
	constructor(@InjectRepository(FbUser) repo: Repository<FbUser>) {
		super(repo);
	}
	// async query(query: Query<FbUser>): Promise<FbUser[]> {
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
