import { ObjectType } from "@nestjs/graphql";
import { FilterableRelation } from "@vizorous/nestjs-query-graphql";
import { Entity, Index, ManyToOne } from "typeorm";
import { BaseEntity, CFF, CFFID } from "@vizorous/nest-query-utils";
import { Todo } from "src/todo/entities/todo.entity";
import { Category } from "src/category/entities/category.entity";
import { CF } from "@vizorous/nest-query-utils";

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
	@CFF({
		description: "SubTask name",
		fieldOptions: { allowedComparisons: ["in", "is", "like"] },
	})
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

	// Below code defines a many to one relation to category in TypeORM (DB Side).
	// It is required to have two fields for this, one for the id and one for the object.

	// todoId field can be used to set the relationship on input from GraphQL Schema.
	// This can be used to filter as well.
	@CFFID({ nullable: false })
	todoId!: string;
	// This is used to create the TypeORM relation (DB Side).
	// This holds data of one todo.
	@ManyToOne(() => Todo)
	todo!: Todo;

	// Below code defines a many to one relation to category in TypeORM (DB Side).
	// It is required to have two fields for this, one for the id and one for the object.

	// categoryId field can be used to set the relationship on input from GraphQL Schema.
	// This can be used to filter as well.
	@CFF({ nullable: true })
	categoryId?: string;

	// This is used to create the TypeORM relation (DB Side).
	// This holds data of one category.
	@ManyToOne(() => Category)
	category?: Category;
}
