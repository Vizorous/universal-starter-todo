import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { Answer } from "../entities/answer.entity";

@InputType()
export class UpdateAnswer extends UpdateType(Answer, []) {
	// Add your own fields here
}
