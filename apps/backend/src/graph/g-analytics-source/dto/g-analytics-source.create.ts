import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { GAnalyticsSource } from "../entities/g-analytics-source.entity";

@InputType()
export class CreateGAnalyticsSource extends CreateType(GAnalyticsSource, []) {
	// Add your own fields here
}
