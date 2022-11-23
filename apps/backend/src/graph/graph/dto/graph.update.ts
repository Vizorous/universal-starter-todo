import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { Graph } from "../entities/graph.entity";

@InputType()
export class UpdateGraph extends UpdateType(Graph, [
	"graphLayoutId",
	"fbInsightsSourceId",
	"gAnalyticsSourceId",
	"graphDataset",
]) {
	// Add your own fields here
}
