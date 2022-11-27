import { Field, InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { Graph } from "../entities/graph.entity";

@InputType()
export class CreateGraph extends CreateType(Graph, ["graphDatasets"]) {
	// Add your own fields here
}
@InputType()
export class Test {
	@Field()
	test: string;
}
