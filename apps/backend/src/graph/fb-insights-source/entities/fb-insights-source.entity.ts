import { ObjectType } from "@nestjs/graphql";
import { Entity, ManyToOne } from "typeorm";
import { CF, BaseEntity, CFID } from "@vizorous/nest-query-utils";
import { FbDatePreset } from "../enums/fb-date-preset.enum";
import { FbPage } from "src/facebook/fb-page/entities/fb-page.entity";
import { Relation } from "@vizorous/nestjs-query-graphql";

@ObjectType()
@Entity()
// Defines a OneToOne or ManyToOne relations in the GraphQL Schema.
// You can filter todos by category due to FilterableRelation.
@Relation("fbPage", () => FbPage, { disableRemove: true, disableUpdate: true })

// Defines a OneToMany or ManyToMany relations in the GraphQL Schema.
// This defines a subtask relation which outputs a list of subtasks in GraphQL Schema.
// You can use @FilterableCursorConnection to enable filtering through subtasks.
// @CursorConnection("subTasks", () => SubTask, { nullable: true, enableAggregate: false })
export class FbInsightsSource extends BaseEntity {
	// Turns on fulltext search for this field.
	// @Index({ fulltext: true })

	@CF({
		gqlType: () => [String],
		columnOptions: { type: "simple-array" },
		exposeOptions: { groups: ["params"], name: "metric", toClassOnly: true },
	})
	metric: string[];

	@CF({
		gqlType: () => FbDatePreset,
		nullable: true,
		exposeOptions: { groups: ["params"], toClassOnly: true },
		columnOptions: { type: "enum", enum: FbDatePreset },
	})
	period?: FbDatePreset;

	@CF({
		nullable: true,
		exposeOptions: { groups: ["params"], toClassOnly: true },
	})
	since?: string;

	@CF({
		nullable: true,
		exposeOptions: { groups: ["params"], toClassOnly: true },
	})
	until?: string;

	@CF({
		gqlType: () => FbDatePreset,
		nullable: true,
		columnOptions: { type: "enum", enum: FbDatePreset },
		exposeOptions: {
			groups: ["params"],
			name: "date_preset",
			toClassOnly: true,
		},
	})
	datePreset?: FbDatePreset;

	@CF({
		fieldOptions: { defaultValue: false },
		columnOptions: { default: false },
		exposeOptions: {
			name: "show_description_from_api_doc",
			groups: ["params"],
			toClassOnly: true,
		},
	})
	show_description_from_api_doc: boolean;

	@CFID()
	fbPageId: string;
	@ManyToOne(() => FbPage)
	fbPage: FbPage;
}
