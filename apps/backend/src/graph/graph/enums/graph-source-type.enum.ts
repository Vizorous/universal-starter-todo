import { registerEnumType } from "@nestjs/graphql";

export enum GraphSourceType {
	fbInsights = "fbInsights",
	googleAnalytics = "googleAnalytics",
	linkedIn = "linkedIn",
}
registerEnumType(GraphSourceType, {
	name: "GraphSourceType",
});
