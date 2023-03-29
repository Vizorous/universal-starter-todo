import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { Prediction } from "../entities/prediction.entity";

@InputType()
export class UpdatePrediction extends UpdateType(Prediction, []) {
  // Add your own fields here
}
