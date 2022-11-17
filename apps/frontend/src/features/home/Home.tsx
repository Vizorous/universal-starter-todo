import { Container } from "@mantine/core";
import React from "react";
import { TodosQuery } from "../../__gen__/TodosQuery.graphql";
import QueryFragContainer from "../0common/components/graphql-helpers/QueryFragContainer";
import Todos, { todosQ } from "../todos/Todos";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<Container size="md">
				<QueryFragContainer<TodosQuery>
					query={todosQ}
					variables={{ first: 50 }}
					render={(data) => <Todos todoKey={data} categoryKey={data}></Todos>}
				></QueryFragContainer>
			</Container>
		</>
	);
};

export default Home;
