import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { Section } from "../entities/section.entity";

@InputType()
export class UpdateSection extends UpdateType(Section, []) {
	// Add your own fields here
}
