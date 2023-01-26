import { Container } from "@mantine/core";
import React from "react";
import { GridAsymmetrical } from "./HomeDashboard";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<Container size="md">
				{/* <QueryFragContainer<TodosQuery>
					query={todosQ}
					variables={{ first: 50 }}
					render={(data) => <Todos todoKey={data} categoryKey={data}></Todos>}
				></QueryFragContainer> */}
				<GridAsymmetrical />
			</Container>
		</>
	);
};

export default Home;
