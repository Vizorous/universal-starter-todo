import { Resolver } from "@nestjs/graphql";
import { Section } from "./entities/section.entity";

// this is a custom resolver.
// this resolver will merge with the default resolver
@Resolver(() => Section)
export class SectionResolver {
	//  constructor(readonly service: SectionService) {}
	//  @Query(() => [String], { name: "getAllsectionIDs", nullable: "items" })
	//  async getAllSectionIDs() {
	//  return this.service.getAllIDs();
}
