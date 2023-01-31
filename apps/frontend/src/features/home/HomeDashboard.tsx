import { useState } from "react";
import { Grid, Container } from "@mantine/core";

import { ProgressTracker } from "./ProgressTracker";
import { TemplateGrid } from "./TemplateGrid";
import { TemplateTypes } from "./TemplateTypes";

export function HomeDashboard() {
	const [templateType, setTemplateType] = useState("periodic");

	return (
		<Container my="md">
			<Grid>
				<Grid.Col xs={12}>
					{/* <Stepper active={active} onStepClick={setActive} breakpoint="sm" color="orange" allowNextStepsSelect={false}> */}
					{/* <Stepper active={active} onStepClick={setActive} breakpoint="sm" color="orange">
						<Stepper.Step label="Select Template">
							<Container my="md">
								<Grid>
									<Grid.Col xs={4}>
										<TemplateTypes />
									</Grid.Col>
									<Grid.Col xs={8}>
										<TemplateGrid nextStep={nextStep} />
									</Grid.Col>
								</Grid>
							</Container>
						</Stepper.Step>
						<Stepper.Step label="Choose Dashboard Preferences">Step 2 content: Verify email</Stepper.Step>
						<Stepper.Step label="Add Data Sources">Step 3 content: Get full access</Stepper.Step>
						<Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
					</Stepper> */}
					<ProgressTracker />
				</Grid.Col>
				<Grid.Col xs={4}>
					<TemplateTypes setTemplateType={setTemplateType} />
				</Grid.Col>
				<Grid.Col xs={8}>
					<TemplateGrid templateType={templateType} />
				</Grid.Col>
			</Grid>
		</Container>
	);
}
