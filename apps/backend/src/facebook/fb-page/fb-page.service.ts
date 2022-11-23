import { InjectRepository } from "@nestjs/typeorm";
import { QueryService } from "@vizorous/nestjs-query-core";
import { TypeOrmQueryService } from "@vizorous/nestjs-query-typeorm";
import { Repository } from "typeorm";
import { HttpService } from "@nestjs/axios";
import { FbPage } from "./entities/fb-page.entity";
import { GetPageFromFbArgs, GetPagesFromFbArgs } from "./dto/get-page.args";
import { map } from "rxjs";
// this is a custom service.
// you can override the default service methods here as well.
@QueryService(FbPage)
export class FbPageService extends TypeOrmQueryService<FbPage> {
	constructor(
		@InjectRepository(FbPage) repo: Repository<FbPage>,
		private readonly apiService: HttpService
	) {
		super(repo);
	}

	async findAllFromFb(args: GetPagesFromFbArgs) {
		return this.apiService
			.get(`${args.fbUserId}/accounts?`, {
				params: {
					access_token: args.userToken,
				},
			})
			.pipe(map(({ data }) => data.data));
	}

	findOneFromFb(args: GetPageFromFbArgs, fields: string[]) {
		return this.apiService
			.get("/me?", {
				params: {
					fields: fields.join(","),
					access_token: args.pageToken,
				},
			})
			.pipe(map(({ data }) => data));
	}
}
