import { Card, Image, Text, Group, createStyles, Title, Spoiler } from "@mantine/core";

import testImg from "../../assets/type-icon.png";

import React from "react";

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		// marginTop: "20px",
		height: window.innerHeight - 310,
	},

	title: {
		padding: theme.spacing.md,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},

	borderBottom: {
		padding: "10px 20px",
		borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},

	label: {
		marginBottom: theme.spacing.xs,
		lineHeight: 1,
		fontWeight: 700,
		fontSize: theme.fontSizes.xs,
		letterSpacing: -0.25,
		textTransform: "uppercase",
	},

	section: {
		padding: theme.spacing.md,
		borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},

	icon: {
		marginRight: 5,
		color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5],
	},
}));

const mockdata = [
	{ label: "Periodic Dashboards", icon: testImg, showSpoiler: true },
	{ label: "Campaign Dashboards", icon: testImg, showSpoiler: false },
	{ label: "Rolling Dashboards", icon: testImg, showSpoiler: false },
];

export function TemplateTypes({ setTemplateType }: { setTemplateType: any }) {
	const { classes } = useStyles();
	const templateTypesData = mockdata.map((template) => (
		<Group position="apart" mt="md" className={classes.borderBottom}>
			<div>
				<Group>
					<Image src={template.icon} alt={template.label} width={18} />
					<Text weight={500} onClick={() => setTemplateType(template.label)}>
						{template.label}
					</Text>
				</Group>
				{template.showSpoiler ? (
					<Spoiler maxHeight={55} showLabel="Learn more" hideLabel="Hide">
						<Text size="xs" color="dimmed">
							aghaki aerhg aeiuhg aeuigha aeruihg; aeriguh;aeg aeiugha egaieuhg aegaieug;ae aeiugh;aehig aeiughaaeg
							aergae aegy aeriug egiaeig aeyglae aeigaleiughii aghaki aerhg aeiuhg aeuigha aeruihg; aeriguh;aeg aeiugha
							egaieuhg aegaieug;ae aeiugh;aehig aeiughaaeg aergae aegy aeriug egiaeig aeyglae aeigaleiughii aghaki aerhg
							aeiuhg aeuigha aeruihg; aeriguh;aeg aeiugha egaieuhg aegaieug;ae aeiugh;aehig aeiughaaeg aergae aegy
							aeriug egiaeig aeyglae aeigaleiughii aghaki aerhg aeiuhg aeuigha aeruihg; aeriguh;aeg aeiugha egaieuhg
							aegaieug;ae eiugh;aehig aeiughaaeg aergae aegy aeriug egiaeig aeyglae aeigaleiughii
						</Text>
					</Spoiler>
				) : (
					<div></div>
				)}
			</div>
		</Group>
	));

	return (
		<Card withBorder radius="md" className={classes.card}>
			<Card.Section className={classes.title}>
				<Title order={3}>Dashboard Templates</Title>
			</Card.Section>

			<Card.Section>{templateTypesData}</Card.Section>
		</Card>
	);
}
