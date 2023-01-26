import { useState } from "react";
import { Stepper, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		height: "100%",
	},
	main: {
		background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
		padding: "20px 30px",
		borderRadius: theme.radius.md,
	},
}));

export function ProgressTracker() {
	const [active, setActive] = useState(0);
	const { classes, theme } = useStyles();

	return (
		<>
			<Stepper active={active} onStepClick={setActive} breakpoint="sm" color="orange" className={classes.main}>
				<Stepper.Step label="Select Template"></Stepper.Step>
				<Stepper.Step label="Choose Dashboard Preferences"></Stepper.Step>
				<Stepper.Step label="Add Data Sources"></Stepper.Step>
				<Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
			</Stepper>
		</>
	);
}
