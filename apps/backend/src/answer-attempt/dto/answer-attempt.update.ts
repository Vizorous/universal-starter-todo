import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { AnswerAttempt } from "../entities/answer-attempt.entity";

@InputType()
export class UpdateAnswerAttempt extends UpdateType(AnswerAttempt, []) {
	// Add your own fields here
}
