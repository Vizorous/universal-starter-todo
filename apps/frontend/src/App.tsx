import React from "react";
import "./App.css";
import Shell from "./features/shell/Shell";

const { Suspense } = React;

function App() {
	return (
		// <RelayEnvironmentProvider environment={relayEnv}>
		<Suspense fallback={"Loading..."}>
			<div className="App">
				<Shell></Shell>
			</div>
		</Suspense>
		// </RelayEnvironmentProvider>
	);
}

export default App;
