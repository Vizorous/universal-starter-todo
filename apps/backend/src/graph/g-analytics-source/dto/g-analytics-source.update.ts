import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { GAnalyticsSource } from "../entities/g-analytics-source.entity";

@InputType()
export class UpdateGAnalyticsSource extends UpdateType(GAnalyticsSource, []) {
	// Add your own fields here
}
