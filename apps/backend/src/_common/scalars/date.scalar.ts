import { Scalar, CustomScalar } from "@nestjs/graphql";
import { Kind, ValueNode } from "graphql";

@Scalar("Date", () => Date)
export class DateScalar implements CustomScalar<Date, Date> {
	description = "Date custom scalar type";

	parseValue(value: string): Date {
		return new Date(value); // value from the client
	}

	serialize(value: string): Date {
		return new Date(value); // value sent to the client
	}

	parseLiteral(ast: ValueNode): Date {
		if (ast.kind === Kind.INT || ast.kind === Kind.STRING) {
			return new Date(ast.value);
		}
		return null;
	}
}
