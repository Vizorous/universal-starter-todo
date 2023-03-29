import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { Question } from "../entities/question.entity";

@InputType()
export class CreateQuestion extends CreateType(Question, []) {
  // Add your own fields here
}
