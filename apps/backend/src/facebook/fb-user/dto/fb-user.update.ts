import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { FbUser } from "../entities/fb-user.entity";

@InputType()
export class UpdateFbUser extends UpdateType(FbUser, []) {
	// Add your own fields here
}
