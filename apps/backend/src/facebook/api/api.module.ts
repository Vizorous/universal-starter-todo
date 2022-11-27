import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { stringify } from "qs";

@Module({
	imports: [
		HttpModule.register({
			baseURL: "https://graph.facebook.com/v13.0/",
			paramsSerializer: {
				serialize: (params) => stringify(params, { arrayFormat: "comma" }),
			},
		}),
	],
	providers: [],
	exports: [HttpModule],
})
export class FbApiModule {}
