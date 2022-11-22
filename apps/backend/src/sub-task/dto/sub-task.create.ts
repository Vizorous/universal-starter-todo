import { InputType } from "@nestjs/graphql";
import { CreateType } from "@vizorous/nest-query-utils";
import { SubTask } from "../entities/sub-task.entity";

// Make sure to omit category and todo from the CreateType
// This is because those are relations for objects.
// We use categoryId and todoId for DTO purposes.
@InputType()
export class CreateSubTask extends CreateType(SubTask, ["category", "done", "todo"]) {}
