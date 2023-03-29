import { Resolver } from "@nestjs/graphql";
import { Prediction } from "./entities/prediction.entity";

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
