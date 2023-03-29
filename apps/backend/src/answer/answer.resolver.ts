import { Resolver } from "@nestjs/graphql";
import { Answer } from "./entities/answer.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => Answer)
export class AnswerResolver {
	//  constructor(readonly service: AnswerService) {}
	//  @Query(() => [String], { name: "getAllanswerIDs", nullable: "items" })
	//  async getAllAnswerIDs() {
	//  return this.service.getAllIDs();
}
