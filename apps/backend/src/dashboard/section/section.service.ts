import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { Section } from "./entities/section.entity";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(Section)
export class SectionService extends TypeOrmQueryService<Section> {
	constructor(@InjectRepository(Section) repo: Repository<Section>) {
		super(repo);
	}
	// async query(query: Query<Section>): Promise<Section[]> {
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
