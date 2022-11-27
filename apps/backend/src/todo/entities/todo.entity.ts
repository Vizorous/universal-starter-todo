import { ID, ObjectType } from "@nestjs/graphql";
import { CursorConnection, FilterableRelation } from "@vizorous/nestjs-query-graphql";
import { Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { CFF, CF } from "@vizorous/nest-query-utils";
import { BaseEntity } from "@vizorous/nest-query-utils";
import { Category } from "src/category/entities/category.entity";
import { SubTask } from "src/sub-task/entities/sub-task.entity";

@ObjectType()
@Entity({})
// Defines a OneToOne or ManyToOne relations in the GraphQL Schema.
// You can filter todos by category due to FilterableRelation.
@FilterableRelation("category", () => Category, { disableRemove: true, nullable: true })
// Defines a OneToMany or ManyToMany relations in the GraphQL Schema.
// This defines a subtask relation which outputs a list of subtasks in GraphQL Schema.
// You can use @FilterableCursorConnection to enable filtering through subtasks.
@CursorConnection("subTasks", () => SubTask, { nullable: true, enableAggregate: false })
export class Todo extends BaseEntity {
	// Turns on fulltext search for this field.
	@Index({ fulltext: true })
	// CFF is a custom decorator which stands for Column Filterable Field.
	// It combines @Column and @FilterableField decorators.
	// This enables filtering by this field.
	@CFF({ description: "Todo name", fieldOptions: { allowedComparisons: ["in", "is", "like"] } })
	name: string;

	@CFF({
		description: "Todo done",
		columnOptions: {
			default: false,
		},
	})
	done!: boolean;

	// This a One-to-Many relation inside TypeORM (DB Side).
	// For this to work, ManyToOne relation is required in the other entity.
	// subTasks field will contain a list of subtasks.
	@OneToMany(() => SubTask, (subTask) => subTask.todo)
	subTasks: SubTask[];

	// CF is a custom decorator which stands for Column Filterable Field.
	// It combines @Column and @Field decorators.
	// You cannot filter todos by this field.
	@CF({ description: "Todo description" })
	description: string;

	// Below code defines a many to one relation to category in TypeORM (DB Side).
	// It is required to have two fields for this, one for the id and one for the object.

	// categoryId field can be used to set the relationship on input from GraphQL Schema.
	// This can be used to filter as well.
	@CFF({ gqlType: () => ID, columnOptions: { nullable: true } })
	categoryId?: string;

	// This is used to create the TypeORM relation (DB Side).
	// This holds data of one category.
	@ManyToOne(() => Category)
	category?: Category;
}
