import { ObjectType } from "@nestjs/graphql";
import { FilterableRelation } from "@vizorous/nestjs-query-graphql";
import { Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import CFF from "src/_common/decorators/CFF";
import { Todo } from "src/todo/entities/todo.entity";
import { Category } from "src/category/entities/category.entity";
import { BaseEntity } from "src/_common/entities/base.entity";
import CF from "src/_common/decorators/CF";

@ObjectType()
@Entity()
// This defines category as a filterable relation.
// This means you can filter subtasks by category.
@FilterableRelation("category", () => Category, { disableRemove: true })
export class SubTask extends BaseEntity {
	// Turns on fulltext search for this field.
	@Index({ fulltext: true })
	// CFF is a custom decorator which stands for Column Filterable Field.
	// It combines @Column and @FilterableField decorators.
	// This enables filtering by this field.
	@CFF({ description: "SubTask name", fieldOptions: { allowedComparisons: ["in", "is", "like"] } })
	name: string;

	@CFF({
		description: "SubTask done",
		columnOptions: {
			default: false,
		},
	})
	done!: boolean;

	// CF is a custom decorator which stands for Column Filterable Field.
	// It combines @Column and @Field decorators.
	// You cannot filter todos by this field.
	@CF({ description: "SubTask description" })
	description: string;

	// Below code defines a many to one relation to todo.
	// This relation is filterable through use of CFF.
	// It is required to have two fields for this, one for the id and one for the object.

	// todoId field is used for filtering and DTO.
	// This field is only available in the DTO.
	@CFF({ nullable: false })
	todoId!: string;
	// todo field is used for outputting the todo object.
	// This field is only available in query output.
	@ManyToOne(() => Todo, { cascade: true, eager: true })
	@JoinColumn()
	todo!: Todo;

	// Below code defines a many to one relation to category.
	// This relation is filterable through use of CFF.
	// It is required to have two fields for this, one for the id and one for the object.

	// categoryId field is used for filtering and DTO.
	// This field is only available in the DTO.
	@CFF({ nullable: false })
	categoryId!: string;
	// category field is used for outputting the category object.
	// This field is only available in query output.
	@ManyToOne(() => Category, { cascade: true, eager: true })
	@JoinColumn()
	category!: Category;
}
