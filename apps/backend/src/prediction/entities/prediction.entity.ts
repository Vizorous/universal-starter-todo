import { ObjectType } from "@nestjs/graphql";
import { Entity, JoinColumn, OneToOne } from "typeorm";
import { CF, CFF, BaseEntity, CFFID, CFID } from "@vizorous/nest-query-utils";
import { AnswerAttempt } from "src/answer-attempt/entities/answer-attempt.entity";
import { Relation } from "@vizorous/nestjs-query-graphql";

@ObjectType()
@Entity()
// Defines a OneToOne or ManyToOne relations in the GraphQL Schema.
// You can filter todos by category due to FilterableRelation.
@Relation("answerAttempt", () => AnswerAttempt, { disableRemove: true })

// Defines a OneToMany or ManyToMany relations in the GraphQL Schema.
// This defines a subtask relation which outputs a list of subtasks in GraphQL Schema.
// You can use @FilterableCursorConnection to enable filtering through subtasks.
// @CursorConnection("subTasks", () => SubTask, { nullable: true, enableAggregate: false })
export class Prediction extends BaseEntity {
	// Turns on fulltext search for this field.
	// @Index({ fulltext: true })
	@CFF({ description: "Prediction  name", fieldOptions: { allowedComparisons: ["in", "is", "like"] } })
	value: string;

	@CF({ nullable: true })
	calculatedNumbers?: string;

	// This a OnetoOne relation inside TypeORM (DB Side).
	// @JoinColumn() is required on the owner side.
	@OneToOne(() => AnswerAttempt,{eager:true,cascade:true})
	@JoinColumn()
	answerAttempt: AnswerAttempt;

	@CFID()
	answerAttemptId: string;

	// This a OnetoMany relation inside TypeORM (DB Side).
	// For this to work, ManyToOne relation is required in the other entity.
	// subTasks field will contain a list of subtasks.
	// @OneToMany(() => SubTask, (subTask) => subTask.todo)
	// subTasks: SubTask[];

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

