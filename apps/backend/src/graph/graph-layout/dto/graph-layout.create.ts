import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { GraphLayout } from "../entities/graph-layout.entity";

@InputType()
export class CreateGraphLayout extends CreateType(GraphLayout, []) {
	// Add your own fields here
}
