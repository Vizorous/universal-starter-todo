import { ObjectType } from "@nestjs/graphql";
import { Entity, ManyToOne, OneToMany } from "typeorm";
import { CF, CFF, BaseEntity, CFID } from "@vizorous/nest-query-utils";
import { Graph } from "src/graph/graph/entities/graph.entity";
import { FilterableCursorConnection } from "@vizorous/nestjs-query-graphql";
import { Dashboard } from "src/dashboard/dashboard/entities/dashboard.entity";

@ObjectType()
@Entity()
// Defines a OneToOne or ManyToOne relations in the GraphQL Schema.
// You can filter todos by category due to FilterableRelation.
// @FilterableRelation("dashboard", () => Dashboard, { disableRemove: true, nullable: true })

// Defines a OneToMany or ManyToMany relations in the GraphQL Schema.
// This defines a subtask relation which outputs a list of subtasks in GraphQL Schema.
// You can use @FilterableCursorConnection to enable filtering through subtasks.
@FilterableCursorConnection("graphs", () => Graph, {
	enableAggregate: false,
	description: "Graphs in this section",
})
export class Section extends BaseEntity {
	// Turns on fulltext search for this field.
	// @Index({ fulltext: true })
	@CFF({
		description: "Section name",
		fieldOptions: { allowedComparisons: ["in", "is", "like"] },
	})
	name: string;

	@CF({ nullable: true, description: "Section description" })
	description?: string;

	// This a OnetoOne relation inside TypeORM (DB Side).
	// @JoinColumn() is required on the owner side.
	// @OneToOne(() => Category)
	// @JoinColumn()
	// category: Category;

	// This a OnetoMany relation inside TypeORM (DB Side).
	// For this to work, ManyToOne relation is required in the other entity.
	// subTasks field will contain a list of subtasks.
	@OneToMany(() => Graph, (graph) => graph.section)
	graphs: Graph[];

	// This a ManyToOne relation inside TypeORM (DB Side).
	// This holds data of one category.
	@ManyToOne(() => Dashboard)
	dashboard: Dashboard;

	@CFID({ description: "ID of the parent dashboard" })
	dashboardId: string;
	// This is a ManyToMany relation inside TypeORM (DB Side).
	// This creates a virtual relation table.
	// @JoinTable() is used to show the owner of the relation.
	// The other side must have a ManyToMany relation as well.
	// @ManyToMany(() => SubTask)
	// @JoinTable()
	// subTasks: SubTask[]
}
