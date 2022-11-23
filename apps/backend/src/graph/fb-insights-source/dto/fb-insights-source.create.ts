import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { FbInsightsSource } from "../entities/fb-insights-source.entity";

@InputType()
export class CreateFbInsightsSource extends CreateType(FbInsightsSource, []) {
	// Add your own fields here
}
