import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { map } from "rxjs";
import { getEnv } from "src/_common/config/local.config";
import { FbPageService } from "../fb-page/fb-page.service";
import { FbUserService } from "../fb-user/fb-user.service";
import { CreatePageLongTokenInput } from "./dto/create-page-long-token.input";
import { CreateUserLongTokenInput } from "./dto/create-user-long-token.input";
import { FbLongToken } from "./entities/fb-long-token.entity";
// this is a custom service.
// you can override the default service methods here as well.
@Injectable()
export class FbLongTokenService {
	constructor(
		private apiService: HttpService,
		private pageService: FbPageService,
		private userService: FbUserService
	) {}
	async createUserLongToken(createUserLongToken: CreateUserLongTokenInput) {
		const { fbUserId, fbUserShortToken } = createUserLongToken;
		const params = {
			grant_type: "fb_exchange_token",
			client_id: getEnv().FB_APP_ID,
			client_secret: getEnv().FB_APP_SECRET,
			fb_exchange_token: fbUserShortToken,
		};

		return this.apiService
			.get("oauth/access_token", {
				params,
			})
			.pipe(
				map(({ data }) => {
					//convert response data to LongToken
					const fbUserLongToken = plainToInstance(FbLongToken, data, {
						excludeExtraneousValues: true,
						strategy: "excludeAll",
					});
					return this.userService.updateOne(fbUserId, fbUserLongToken);
				})
			);
	}

	removeUserLongToken(fbUserId: string) {
		return this.userService.updateOne(fbUserId, {
			token: null,
			tokenExpiryDate: null,
		});
	}

	async createPageLongToken(createPageLongToken: CreatePageLongTokenInput) {
		let {
			fbInternalPageId,
			fbPageId,
			fbUserId,
			userLongToken,
			fbInternalUserId,
		} = createPageLongToken;
		// if the page internal id is not provided, get it from the page id
		if (!fbInternalPageId) {
			const fbPage = await this.pageService.findById(fbPageId);
			fbInternalPageId = fbPage.fbInternalPageId;
			// if the user id is not provided, get it from the page
			if (!fbUserId) {
				fbUserId = fbPage.fbUserId;
				// if the user long token is not provided, get it from the user
				if (!userLongToken || !fbInternalUserId) {
					const fbUser = await this.userService.findById(fbUserId);
					userLongToken = fbUser.token;
					fbInternalUserId = fbUser.fbInternalUserId;
				}
			}
		}
		// code for debugging
		// try {
		// 	const data = await firstValueFrom(
		return (
			this.apiService
				.get(`${fbInternalUserId}/accounts`, {
					params: {
						access_token: userLongToken,
					},
				})
				// 	);
				// 	console.error(data);
				// } catch (e) {
				// 	console.error(e);
				// }
				.pipe(
					map(({ data }) => {
						// this response contain page data.
						const dataToTransform = data?.data
							?.filter((page: any) => page.id === fbInternalPageId)
							.pop();
						// since we dont need all the page data
						// we use this call to transform the data.
						// into a LongToken
						const fbPageLongToken = plainToInstance(
							FbLongToken,
							dataToTransform,
							{ excludeExtraneousValues: true }
						);
						return this.pageService.updateOne(fbPageId, fbPageLongToken);
					})
				)
		);
	}

	removePageLongToken(fbPageId: string) {
		return this.pageService.updateOne(fbPageId, {
			token: null,
			tokenExpiryDate: null,
		});
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
