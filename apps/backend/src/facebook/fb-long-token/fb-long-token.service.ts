import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { map } from "rxjs";
import { FbPageService } from "../fb-page/fb-page.service";
import { CreatePageLongTokenInput } from "./dto/create-page-long-token.input";
import { FbLongToken } from "./entities/fb-long-token.entity";
// this is a custom service.
// you can override the default service methods here as well.
@Injectable()
export class FbLongTokenService {
	constructor(
		private apiService: HttpService,
		private pageService: FbPageService // @InjectRepository(FbPage) private pageRepo: Repository<FbPage>, // @InjectRepository(FbUser) private userRepo: Repository<FbUser>
	) {}
	// createUserLongToken(createUserLongToken: CreateUserLongTokenInput) {
	// 	return this.apiService
	// 		.get("oauth/access_token", {
	// 			params: {
	// 				grant_type: "fb_exchange_token",
	// 				clientid: getEnv().FB_APP_ID,
	// 				client_secret: getEnv().FB_APP_SECRET,
	// 				fb_exchange_token: createUserLongToken.userShortToken,
	// 			},
	// 		})
	// 		.pipe(
	// 			map(async ({ data }) => {
	// 				//convert response data to LongToken
	// 				const fbUserLongToken = plainToInstance(FbLongToken, data, {
	// 					excludeExtraneousValues: true,
	// 					strategy: "excludeAll",
	// 				});
	// 				await this.pageService
	// 					.updateOne()

	// 					.findOneAndUpdate({ fbUserId: createUserLongToken.fbUserId }, { fbUserLongToken }, { new: true })
	// 					.exec();
	// 				return fbUserLongToken;
	// 			})
	// 		);
	// }

	// async findUserLongToken(fbUserId: string) {
	// 	return (await this.userModel.findOne({ fbUserId }).exec())?.id;
	// }

	// async removeUserLongToken(fbUserId: string) {
	// 	return (await this.userModel.findOneAndUpdate({ fbUserId }, { $unset: { fbUserLongToken: "" } }).exec())?.fbUserId;
	// }

	createPageLongToken(createPageLongToken: CreatePageLongTokenInput) {
		const { fbInternalPageId, fbPageId, fbUserId, userLongToken } =
			createPageLongToken;
		return this.apiService
			.get(`${fbUserId}/accounts`, {
				params: {
					access_token: userLongToken,
				},
			})
			.pipe(
				map(async ({ data }) => {
					const dataToTransform = data?.data
						?.filter((page: any) => page.id === fbInternalPageId)
						.pop();
					const fbPageLongToken = plainToInstance(
						FbLongToken,
						dataToTransform,
						{ excludeExtraneousValues: true }
					);
					await this.pageService.updateOne(fbPageId, fbPageLongToken);
					return fbPageLongToken;
				})
			);
	}

	// async query(query: Query<FbLongToken>): Promise<FbLongToken[]> {
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
