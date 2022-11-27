import { Field, ID, InterfaceType } from "@nestjs/graphql";

@InterfaceType()
export abstract class Node {
	@Field((type) => ID)
	id: string;
}

