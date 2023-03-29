import { Resolver } from "@nestjs/graphql";
import { Question } from "./entities/question.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => Question)
export class QuestionResolver {
	//  constructor(readonly service: QuestionService) {}
	//  @Query(() => [String], { name: "getAllquestionIDs", nullable: "items" })
	//  async getAllQuestionIDs() {
	//  return this.service.getAllIDs();
}
