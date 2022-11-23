import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { FbPage } from "../entities/fb-page.entity";

@InputType()
export class CreateFbPage extends CreateType(FbPage, []) {
	// Add your own fields here
}
