import { ActionIcon, Group, Text } from "@mantine/core";
import React from "react";

interface EditTodoNameProps {
	todoName: string;
	connectionID: string;
}

const EditTodoName: React.FC<EditTodoNameProps> = (props) => {
	return (
		<>
<Group>
			<Text weight={500}>{props.todoName}</Text>
            <ActionIcon ></ActionIcon>
</Group>
		</>
	);
};

export default EditTodoName;

