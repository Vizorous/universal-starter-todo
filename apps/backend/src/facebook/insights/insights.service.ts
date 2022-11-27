import { HttpService } from "@nestjs/axios";
import { BadRequestException, Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FbInsightsSource } from "src/graph/fb-insights-source/entities/fb-insights-source.entity";
import { FbPageService } from "../fb-page/fb-page.service";
import { Insight } from "./entities/insight.entity";

@Injectable()
export class InsightsService {
	constructor(
		private apiService: HttpService,
		private pageService: FbPageService
	) {}

	async findAll(
		fbInsightsSource: FbInsightsSource
	): Promise<Observable<[Insight]>> {
		// get the page details from the database
		const page = await this.pageService.findById(fbInsightsSource.fbPageId);
		//check if the page exists and page token is valid
		console.log(page);
		if (page && page.token) {
			// transform the args to a params object
			// we utilize plainToInstance to transform
			//metricList to metric
			const params = {
				...plainToInstance(FbInsightsSource, fbInsightsSource, {
					excludeExtraneousValues: true,
					groups: ["params"],
				}),
				access_token: page?.token,
			};
			return this.apiService
				.get(`${page?.fbInternalPageId}/insights`, { params: params })
				.pipe(map(({ data }) => data.data));
		} else {
			throw new BadRequestException(
				"Insights service Error! page or access token of page"
			);
		}
	}
}
