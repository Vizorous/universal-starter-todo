import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { GraphLayout } from "../entities/graph-layout.entity";

@InputType()
export class UpdateGraphLayout extends UpdateType(GraphLayout, []) {
	// Add your own fields here
}
