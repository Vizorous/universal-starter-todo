import { createStyles, Text, Image, Container, Grid, Group, Anchor } from "@mantine/core";

// import ad_report from "../../assets/ad_report.png";
// import report from "../../assets/report.png";
// import blank from "../../assets/blank.png";

import templateTypes from "./data.js";

// const mockdata = [
// 	{ title: "Blank Periodic Dashboard", icon: ad_report },
// 	{
// 		title: "Advertising Campaign Report",
// 		icon: report,
// 		link1: "https://www.google.com/",
// 		link2: "https://www.facebook.com/",
// 	},
// 	{
// 		title: "Automative Marketing Report",
// 		icon: blank,
// 		link1: "https://www.google.com/",
// 		link2: "https://www.facebook.com/",
// 	},
// 	{
// 		title: "B2B Marketing Dashboard",
// 		icon: ad_report,
// 		link1: "https://www.google.com/",
// 		link2: "https://www.facebook.com/",
// 	},
// 	{ title: "Bing Ads Report", icon: report, link1: "https://www.google.com/", link2: "https://www.facebook.com/" },
// 	{
// 		title: "Business Executive Report",
// 		icon: ad_report,
// 		link1: "https://www.google.com/",
// 		link2: "https://www.facebook.com/",
// 	},
// 	{
// 		title: "CallRail Tracking Report",
// 		icon: blank,
// 		link1: "https://www.google.com/",
// 		link2: "https://www.facebook.com/",
// 	},
// 	{
// 		title: "Campaign Monitor Performance Report",
// 		icon: report,
// 		link1: "https://www.google.com/",
// 		link2: "https://www.facebook.com/",
// 	},
// 	{ title: "Bing Ads Report", icon: ad_report, link1: "https://www.google.com/", link2: "https://www.facebook.com/" },
// 	{ title: "Credit cards", icon: ad_report, color: "violet" },
// 	{ title: "Campaign Monitor ", icon: report },
// 	{ title: "Campaign Monitor ", icon: blank },
// ];

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2],
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 700,
		padding: "0px 15px",
	},

	item: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		borderRadius: theme.radius.md,
		height: 180,
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		transition: "box-shadow 150ms ease, transform 100ms ease",

		"&:hover": {
			boxShadow: `${theme.shadows.md} !important`,
			transform: "scale(1.05)",
		},
		border: `1px solid ${theme.colors.gray[4]}`,
	},

	link: {
		color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[5],
		fontSize: theme.fontSizes.xs,
		textDecoration: "underline",
	},
}));

export function TemplateGrid({ templateType }: { templateType: String }) {
	const { classes, theme } = useStyles();

	// const items = mockdata.map((item) => (
	// 	<UnstyledButton key={item.title} className={classes.item}>
	// 		<Image src={item.icon} alt={item.title} width={50} />
	// 		<Text size="xs" mt={7} className={classes.title}>
	// 			{item.title}
	// 		</Text>
	// 	</UnstyledButton>
	// ));

	// const templates = mockdata.map((item) => (
	// const templates = templateTypes.campaign.map((item) => (
	let data = templateTypes.periodic;
	if (templateType === "Campaign Dashboards") {
		data = templateTypes.campaign;
	} else if (templateType === "Periodic Dashboards") {
		data = templateTypes.periodic;
	} else if (templateType === "Rolling Dashboards") {
		data = templateTypes.rolling;
	}
	const templates = data.map((item) => (
		<Grid.Col xs={3} key={item.title}>
			<Group className={classes.item}>
				<Image src={item.icon} alt={item.title} width={40} />
				<Text size="xs" mt={7} className={classes.title}>
					{item.title}
				</Text>
				<Group>
					{item.link1 ? (
						<Anchor href={item.link1} className={classes.link}>
							Details
						</Anchor>
					) : (
						<div></div>
					)}
					{item.link2 ? (
						<Anchor href={item.link2} className={classes.link}>
							Preview
						</Anchor>
					) : (
						<div></div>
					)}
				</Group>
			</Group>
		</Grid.Col>
	));

	return (
		// <Card className={classes.card}>
		// 	<SimpleGrid cols={4} mt="md">
		// 		{items}
		// 	</SimpleGrid>
		// </Card>

		<Container>
			<Grid>{templates}</Grid>
		</Container>
	);
}
