import { Resolver } from "@nestjs/graphql";
import { AnswerAttempt } from "./entities/answer-attempt.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => AnswerAttempt)
export class AnswerAttemptResolver {
	//  constructor(readonly service: AnswerAttemptService) {}
	//  @Query(() => [String], { name: "getAllanswer-attemptIDs", nullable: "items" })
	//  async getAllAnswerAttemptIDs() {
	//  return this.service.getAllIDs();
}
