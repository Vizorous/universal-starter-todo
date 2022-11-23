import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { FbInsightsSource } from "../entities/fb-insights-source.entity";

@InputType()
export class UpdateFbInsightsSource extends UpdateType(FbInsightsSource, []) {
	// Add your own fields here
}
