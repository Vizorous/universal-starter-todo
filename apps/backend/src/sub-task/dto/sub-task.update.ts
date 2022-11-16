import { InputType } from "@nestjs/graphql";
import { UpdateType } from "src/_common/utils/MappedTypes";
import { SubTask } from "../entities/sub-task.entity";

// Make sure to omit category and todo from the UpdateType
// This is because those are relations for objects.
// We use categoryId and todoId for DTO purposes.
@InputType()
export class UpdateSubTask extends UpdateType(SubTask, ["category", "todo"]) {}
