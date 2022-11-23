import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { FbUser } from "../entities/fb-user.entity";

@InputType()
export class CreateFbUser extends CreateType(FbUser, []) {
	// Add your own fields here
}
