import { Module } from "@nestjs/common";
import { FbLongTokenResolver } from "./fb-long-token.resolver";
import { FbPageModule } from "../fb-page/fb-page.module";
import { FbApiModule } from "../api/api.module";
import { FbLongTokenService } from "./fb-long-token.service";

@Module({
	imports: [FbPageModule, FbApiModule, FbPageModule],
	providers: [FbLongTokenResolver, FbLongTokenService],
})
export class FbLongTokenModule {}
