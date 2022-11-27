import { Resolver, Args, Query } from "@nestjs/graphql";
import { <%= classify(name) %> } from "./entities/<%= singular(name) %>.entity";
import { <%= classify(name) %>Service } from "./<%= singular(name) %>.service";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => <%= classify(name) %>)
export class <%= classify(name) %>Resolver {
  //  constructor(readonly service: <%= classify(name) %>Service) {}
  //  @Query(() => [String], { name: "getAll<%= singular(name) %>IDs", nullable: "items" })
  //  async getAll<%= classify(name) %>IDs() {
  //  return this.service.getAllIDs();
}

