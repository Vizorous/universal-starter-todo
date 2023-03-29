import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { Prediction } from "../entities/prediction.entity";

@InputType()
export class CreatePrediction extends CreateType(Prediction, []) {
	// Add your own fields here
}
