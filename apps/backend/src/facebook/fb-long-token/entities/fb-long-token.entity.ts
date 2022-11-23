import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "@vizorous/nest-query-utils";
import { Expose, Transform } from "class-transformer";
import { add } from "date-fns";
import { Column } from "typeorm";
@ObjectType()
export class FbLongToken extends BaseEntity {
	// actual token
	@Expose({ name: "access_token" })
	@Field({ description: "Long lived token" })
	@Column()
	token: string;
	//transform expires_in seconds to Date
	@Transform(({ value }) =>
		value
			? new Date(value * 1000 + Date.now())
			: new Date(add(Date.now(), { days: 59 }))
	)
	@Expose({ name: "expires_in" })
	@Field({ description: "Expiration date" })
	@Column()
	tokenExpiryDate: Date;
}
