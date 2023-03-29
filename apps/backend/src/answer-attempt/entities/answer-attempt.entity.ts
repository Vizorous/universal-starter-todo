import { ObjectType } from "@nestjs/graphql";
import { Entity, OneToMany } from "typeorm";
import { CF, CFF, BaseEntity } from "@vizorous/nest-query-utils";
import { Answer } from "src/answer/entities/answer.entity";
import { FilterableCursorConnection } from "@vizorous/nestjs-query-graphql";

@ObjectType()
@Entity()
// Defines a OneToOne or ManyToOne relations in the GraphQL Schema.
// You can filter todos by category due to FilterableRelation.
// @FilterableRelation("category", () => Category, { disableRemove: true, nullable: true })

// Defines a OneToMany or ManyToMany relations in the GraphQL Schema.
// This defines a subtask relation which outputs a list of subtasks in GraphQL Schema.
// You can use @FilterableCursorConnection to enable filtering through subtasks.
@FilterableCursorConnection("answers", () => Answer, { nullable: true, enableAggregate: false })
export class AnswerAttempt extends BaseEntity {
	// Turns on fulltext search for this field.
	// @Index({ fulltext: true })
	@CFF({ description: "AnswerAttempt  name", fieldOptions: { allowedComparisons: ["in", "is", "like"] } })
	name: string;

	@CF({ nullable: true })
	description?: string;

	// This a OnetoOne relation inside TypeORM (DB Side).
	// @JoinColumn() is required on the owner side.
	// @OneToOne(() => Category)
	// @JoinColumn()
	// category: Category;

	// This a OnetoMany relation inside TypeORM (DB Side).
	// For this to work, ManyToOne relation is required in the other entity.
	// answers field will contain a list of subtasks.
	@OneToMany(() => Answer, (answer) => answer.answerAttempt)
	answers: Answer[];

	// This a ManyToOne relation inside TypeORM (DB Side).
	// This holds data of one category.
	// @ManyToOne(() => Category)
	// category?: Category;

	// This is a ManyToMany relation inside TypeORM (DB Side).
	// This creates a virtual relation table.
	// @JoinTable() is used to show the owner of the relation.
	// The other side must have a ManyToMany relation as well.
	// @ManyToMany(() => SubTask)
	// @JoinTable()
	// subTasks: SubTask[]
}

