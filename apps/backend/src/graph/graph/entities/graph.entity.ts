import { Field, ObjectType } from "@nestjs/graphql";
import { Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { CF, CFF, BaseEntity, CFID } from "@vizorous/nest-query-utils";
import { Section } from "src/dashboard/section/entities/section.entity";
import { Relation } from "@vizorous/nestjs-query-graphql";
import { GraphLayout } from "src/graph/graph-layout/entities/graph-layout.entity";
import { FbInsightsSource } from "src/graph/fb-insights-source/entities/fb-insights-source.entity";
import { GAnalyticsSource } from "src/graph/g-analytics-source/entities/g-analytics-source.entity";
import { GraphSourceType } from "../enums/graph-source-type.enum";
import { GraphDataset } from "src/graph/graph-dataset/entities/graph-dataset.entity";
import { Type } from "class-transformer";

@ObjectType()
@Entity()
// O2O, CR. Required. Used to render the graphs correct position.
@Relation("graphLayout", () => GraphLayout, {
	disableRemove: true,
	disableUpdate: true,
})
// O2O, CR. Get the graph source data for FB Insights.
@Relation("fbInsightsSource", () => FbInsightsSource, {
	disableRemove: true,
	disableUpdate: true,
})
// O2O, CR. Get the graph source data for Google Analytics.
@Relation("gAnalyticsSource", () => GAnalyticsSource, {
	disableRemove: true,
	disableUpdate: true,
})
export class Graph extends BaseEntity {
	@Index({ fulltext: true })
	@CFF({
		description: "Graph  name",
		fieldOptions: { allowedComparisons: ["in", "is", "like"] },
	})
	name: string;

	@CF({ nullable: true })
	description?: string;

	// M20, CRUD. Get the parent section of the graph.
	@CFID()
	sectionId: string;
	@ManyToOne(() => Section)
	section: Section;

	@OneToOne(() => GraphLayout)
	@JoinColumn()
	graphLayout: GraphLayout;

	@CFID({ description: "ID of the graph layout" })
	graphLayoutId: string;

	@OneToOne(() => FbInsightsSource, { nullable: true, eager: true})
	@JoinColumn()
	fbInsightsSource?: FbInsightsSource;

	@CFID({ nullable: true, description: "ID of the FB Insights Source" })
	fbInsightsSourceId?: string;

	@OneToOne(() => GAnalyticsSource, { nullable: true, eager: true })
	@JoinColumn()
	gAnalyticsSource?: GAnalyticsSource;

	@CFID({ nullable: true, description: "ID of the Google Analytics Source" })
	gAnalyticsSourceId?: string;

	// Used to identify which source to use.
	@CF({
		gqlType: () => GraphSourceType,
		description: "Type of the graph source",
		columnOptions: {
			type: "enum",
			enum: GraphSourceType,
		},
	})
	graphSourceType: GraphSourceType;

	@CF({ columnOptions: { default: "line" } })
	graphType: string;

	@Type(() => GraphDataset)
	@Field(() => [GraphDataset], { nullable: "items" })
	graphDatasets: GraphDataset[];
}
