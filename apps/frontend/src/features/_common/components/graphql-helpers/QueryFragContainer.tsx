import React, { ReactElement, ReactNode, Suspense, useEffect } from "react";
import { useQueryLoader } from "react-relay";
import { GraphQLTaggedNode, OperationType, VariablesOf } from "relay-runtime";
import { FetchRenderFunc, QueryFetchContainer } from "./QueryFetchContainer";

export interface QueryFragContainerProps<T extends OperationType> {
	query: GraphQLTaggedNode;
	variables?: VariablesOf<T>;
	suspenseFallback?: ReactNode;
	errorFallback?: ReactNode;
	render: FetchRenderFunc<T>;
}
/**
 * A container that loads and fetches a query or a fragment and renders the result.
 * @param props.query {@link GraphQLTaggedNode} graphql query
 * @param props.variables {@link VariablesOf<T>} variables for the query
 * @param props.render {@link FetchRenderFunc} render function, takes the fetched data as argument
 * @param props.suspenseFallback {@link ReactNode} fallback for suspense
 * @param props.errorFallback {@link ReactNode} fallback for error
 * @returns {ReactElement} returns a ReactElement
 * @example <QueryFragContainer<TodosQuery>
				query={todosQ}
				variables={{ first: 3 }}
				render={(data) => <Todos todoKey={data}></Todos>}
			></QueryFragContainer>
 */
const QueryFragContainer = <T extends OperationType>(props: QueryFragContainerProps<T>): ReactElement => {
	const [queryRef, loadQuery] = useQueryLoader<T>(props.query);
	useEffect(() => {
		loadQuery(props.variables);
	}, [loadQuery]);
	return (
		<>
			<Suspense fallback={props.suspenseFallback ?? "Loading page..."}>
				{queryRef !== null && (
					<QueryFetchContainer<T> query={props.query} queryRef={queryRef} render={props.render}></QueryFetchContainer>
				)}
			</Suspense>
		</>
	);
};

export default QueryFragContainer;
