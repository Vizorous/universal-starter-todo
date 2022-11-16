import { Environment, FetchFunction, Network, RecordSource, Store } from "relay-runtime";

const fetchRelay: FetchFunction = async function (operation, variables, cacheConfig, uploadables) {
	try {
		return await (
			await fetch("http://localhost:3333/graphql", {
				method: "POST",
				headers: {
					// Add authentication and other headers here
					"content-type": "application/json",
				},
				body: JSON.stringify({
					query: operation.text, // GraphQL text from input
					variables,
				}),
			})
		).json();
	} catch (err) {
		console.error(err);
	}
};
export default new Environment({
	network: Network.create(fetchRelay),
	store: new Store(new RecordSource()),
	
});

