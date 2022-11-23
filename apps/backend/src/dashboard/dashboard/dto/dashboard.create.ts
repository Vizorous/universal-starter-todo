import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { Dashboard } from "../entities/dashboard.entity";

@InputType()
export class CreateDashboard extends CreateType(Dashboard, []) {
	// Add your own fields here
}
