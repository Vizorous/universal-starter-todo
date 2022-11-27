import { graphqlMacro } from "babel-plugin-relay/macro";
import reactRelay from "react-relay";
declare module "react-relay" {
	export type useQueryLoaderHookType<TQuery extends OperationType> = [
		PreloadedQuery<TQuery>,
		(variables: VariablesOf<TQuery>, options?: UseQueryLoaderLoadQueryOptions) => void,
		DisposeFn
	];
	export function useQueryLoader<TQuery extends OperationType>(
		preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
		initialQueryReference?: PreloadedQuery<TQuery> | null
	): useQueryLoaderHookType<TQuery>;

	 graphqlMacro as graphql
}
