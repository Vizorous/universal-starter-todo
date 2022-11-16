import { InputType } from "@nestjs/graphql";
import { CreateType } from "src/_common/utils/MappedTypes";
import { User } from "../entities/user.entity";

@InputType()
export class CreateUser extends CreateType(User, ["aiesecEmail"]) {}
