import { ObjectType } from "@nestjs/graphql";
import { FilterableRelation, UnPagedRelation } from "@vizorous/nestjs-query-graphql";
import { Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CF } from "@vizorous/nest-query-utils";
import { CFF } from "@vizorous/nest-query-utils";
import { BaseEntity } from "@vizorous/nest-query-utils";
import { Category } from "src/category/entities/category.entity";
import { SubTask } from "src/sub-task/entities/sub-task.entity";

@ObjectType()
@Entity()
// This defines category as a filterable relation.
// This means you can filter todos by category.
@FilterableRelation("category", () => Category, { disableRemove: true, nullable: true })
// This defines a subtask relation which outputs a list of subtasks WITHOUT paging.
// You cannot filter todos through this.
@UnPagedRelation("subTasks", () => SubTask, { nullable: true })
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

	// This a one to many relation with sub tasks.
	// You have to define the inverse side of the relation.
	// This is required because we need to access subTasks from todo.
	//subTasks field will contain a list of subtasks.
	@OneToMany(() => SubTask, (subTask) => subTask.todo)
	subTasks: SubTask[];

	// CF is a custom decorator which stands for Column Filterable Field.
	// It combines @Column and @Field decorators.
	// You cannot filter todos by this field.
	@CF({ description: "Todo description" })
	description: string;

	// Below code defines a many to one relation to category.
	// This relation is filterable through use of CFF.
	// It is required to have two fields for this, one for the id and one for the object.

	// categoryId field is used mainly in the DTO.
	@CFF({ nullable: true })
	categoryId?: string;
	// category field is used for outputting the category object.
	// This field is used also in filtering.
	@ManyToOne(() => Category, { cascade: true, eager: true })
	@JoinColumn()
	category?: Category;
}
