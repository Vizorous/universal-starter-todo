import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { Question } from "../entities/question.entity";

@InputType()
export class UpdateQuestion extends UpdateType(Question, []) {
	// Add your own fields here
}
