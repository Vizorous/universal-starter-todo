import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { <%= classify(name) %> } from "../entities/<%= singular(name)%>.entity";

@InputType()
export class Create<%= classify(name) %> extends CreateType(<%= classify(name) %>, []) {
  // Add your own fields here
}
