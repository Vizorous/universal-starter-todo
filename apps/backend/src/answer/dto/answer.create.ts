import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { Answer } from "../entities/answer.entity";

@InputType()
export class CreateAnswer extends CreateType(Answer, []) {
	// Add your own fields here
}
