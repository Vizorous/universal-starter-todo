import { Resolver, Args, Query } from "@nestjs/graphql";
import { Prediction } from "./entities/prediction.entity";
import { PredictionService } from "./prediction.service";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => Prediction)
export class PredictionResolver {
	// constructor(readonly service: PredictionService) {}
	// @Query(() => [String], { name: "getAllpredictionIDs", nullable: "items" })
	// async getAllPredictionIDs() {
	// 	return this.service.query({ first: 1000 });
	// }
}

