import { ReactElement } from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
export type FetchRenderFunc<T extends OperationType> = (data: T["response"]) => ReactElement;

export interface QueryFetchContainerProps<T extends OperationType> {
	query: GraphQLTaggedNode;
	queryRef: PreloadedQuery<T>;
	render: FetchRenderFunc<T>;
}
/**
 *
 * @description A component that fetches the data from the query and renders the result.
 * @param props.query {@link GraphQLTaggedNode} graphql query
 * @param props.queryRef {@link PreloadedQuery<T>} query reference
 * @param props.render {@link FetchRenderFunc} render function, takes the fetched data as argument
 * @returns {ReactElement} returns a ReactElement
 * @example <QueryFetch<TodosQuery>
 	query={todosQ} queryRef={queryRef} render={(data)=><Todos todoKey={data}/>}>
	</QueryFetch>

 */
export const QueryFetchContainer = <T extends OperationType>(props: QueryFetchContainerProps<T>): ReactElement => {
	const data = usePreloadedQuery<T>(props.query, props.queryRef);
	return <>{props.render(data)}</>;
};
