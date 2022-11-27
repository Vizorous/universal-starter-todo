import { Module } from "@nestjs/common";
import { FbApiModule } from "../api/api.module";
import { FbPageModule } from "../fb-page/fb-page.module";
import { InsightsService } from "./insights.service";

@Module({
	imports: [FbPageModule, FbApiModule],
	providers: [InsightsService],
	exports: [InsightsService],
})
export class InsightsModule {}
