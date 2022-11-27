import { Args, ID, Query, Resolver } from "@nestjs/graphql";
import { Node } from "../gql-interfaces/node.interface";

@Resolver(() => Node)
export class NodeResolver {
	@Query((id) => Node)
	node(@Args("id", { type: () => ID }) id: string) {
		return null as Node;
	}
}
