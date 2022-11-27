import { Module } from "@nestjs/common";
import { <%= classify(name) %>Service } from "./<%= name %>.service";
import { <%= classify(name) %>Resolver } from "./<%= name %>.resolver";
import { NestjsQueryTypeOrmModule } from "@vizorous/nestjs-query-typeorm";
import { NestjsQueryGraphQLModule } from "@vizorous/nestjs-query-graphql";
import { Create<%= singular(classify(name)) %> } from "./dto/<%= singular(name) %>.create";
import { Update<%= singular(classify(name)) %> } from "./dto/<%= singular(name) %>.update";
import { <%= classify(name) %> } from "./entities/<%= singular(name) %>.entity";

const dbModule = NestjsQueryTypeOrmModule.forFeature([<%=singular(classify(name))%>]);

@Module({
	providers: [<%= classify(name) %>Resolver],
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [dbModule],
			services: [<%= classify(name) %>Service],
			resolvers: [
				{
					DTOClass: <%= classify(name) %>,
					EntityClass: <%= classify(name) %>,
					UpdateDTOClass: Update<%= classify(name) %>,
					CreateDTOClass: Create<%= classify(name) %>,
					//this enabled aggregation.
					//this allows count, sum, avg, min, max operations. Disabled cuz its heavy
					// enableAggregate: true,
					ServiceClass: <%= classify(name) %>Service,
					// this disabled many create, update, and delete options.
					// These options could be hard to use therefore it is disabled.
					create: { many: { disabled: true } },
					update: { many: { disabled: true } },
					delete: { many: { disabled: true } },
				},
			],
		}),
		dbModule,
	],
	exports: [dbModule],
})
export class <%= classify(name) %>Module {}

