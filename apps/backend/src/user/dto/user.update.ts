import { InputType } from "@nestjs/graphql";
import { UpdateType } from "src/_common/utils/MappedTypes";
import { User } from "../entities/user.entity";

@InputType()
export class UpdateUser extends UpdateType(User) {}
