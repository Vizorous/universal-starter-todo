import { registerEnumType } from "@nestjs/graphql";

export enum FbPeriod {
	day = "day",
	week = "week",
	days_28 = "days_28",
	month = "month",
	lifetime = "lifetime",
}
registerEnumType(FbPeriod, {
	name: "FbPeriod",
});
