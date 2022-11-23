import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { Dashboard } from "../entities/dashboard.entity";

@InputType()
export class UpdateDashboard extends UpdateType(Dashboard, []) {
	// Add your own fields here
}
