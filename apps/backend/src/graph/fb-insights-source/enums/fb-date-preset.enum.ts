import { registerEnumType } from "@nestjs/graphql";

export enum FbDatePreset {
	today = "today",
	yesterday = "yesterday",
	this_month = "this_month",
	last_month = "last_month",
	this_quarter = "this_quarter",
	maximum = "maximum",
	data_maximum = "data_maximum",
	last_3d = "last_3d",
	last_7d = "last_7d",
	last_14d = "last_14d",
	last_28d = "last_28d",
	last_30d = "last_30d",
	last_90d = "last_90d",
	last_week_mon_sun = "last_week_mon_sun",
	last_week_sun_sat = "last_week_sun_sat",
	last_quarter = "last_quarter",
	last_year = "last_year",
	this_week_mon_today = "this_week_mon_today",
	this_week_sun_today = "this_week_sun_today",
	this_year = "this_year",
}
registerEnumType(FbDatePreset, {
	name: "FbDatePreset",
});
