import { InputType } from "@nestjs/graphql";
import { UpdateType } from "@vizorous/nest-query-utils";
import { <%= classify(name) %> } from "../entities/<%= singular(name)%>.entity";

@InputType()
export class Update<%= classify(name) %> extends UpdateType(<%= classify(name) %>, []) {
  // Add your own fields here
}
