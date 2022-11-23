import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { Section } from "../entities/section.entity";

@InputType()
export class CreateSection extends CreateType(Section, []) {
	// Add your own fields here
}
