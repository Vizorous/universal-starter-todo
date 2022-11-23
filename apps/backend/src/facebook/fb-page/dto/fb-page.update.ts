import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { FbPage } from "../entities/fb-page.entity";

@InputType()
export class UpdateFbPage extends UpdateType(FbPage, []) {
	// Add your own fields here
}
