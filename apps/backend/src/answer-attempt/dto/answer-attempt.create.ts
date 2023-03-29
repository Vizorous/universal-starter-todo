import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { AnswerAttempt } from "../entities/answer-attempt.entity";

@InputType()
export class CreateAnswerAttempt extends CreateType(AnswerAttempt, []) {
	// Add your own fields here
}
