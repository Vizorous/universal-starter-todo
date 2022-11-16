import { ArgumentsHost, Catch, HttpException } from "@nestjs/common";
import { GqlArgumentsHost, GqlExceptionFilter } from "@nestjs/graphql";

@Catch(HttpException)
export class GlobalGraphQLFilter implements GqlExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		GqlArgumentsHost.create(host);
		return exception;
	}
}
