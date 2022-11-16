import React, { ReactElement, Suspense, useEffect } from 'react'
import { PreloadedQuery, useQueryLoader } from 'react-relay'
import { GraphQLTaggedNode, OperationType, VariablesOf } from 'relay-runtime'

interface RootContainerProps<T extends OperationType> {
	query: GraphQLTaggedNode
	variables: VariablesOf<T>
	render: (queryRef: PreloadedQuery<T>, query?: GraphQLTaggedNode) => ReactElement
}
const QueryRootContainer = <T extends OperationType>(props: RootContainerProps<T>): ReactElement => {
	const [queryRef, loadQuery] = useQueryLoader<T>(props.query)

	useEffect(() => {
		loadQuery(props.variables)
	}, [loadQuery])
	return (
		<>
			<Suspense fallback={'Loading page...'}>{queryRef != null && props.render(queryRef, props.query)}</Suspense>
		</>
	)
}

export default QueryRootContainer
