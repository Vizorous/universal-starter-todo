import React from "react";
import { AppShell, Header, MediaQuery, Burger, Image, createStyles, CSSObject } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResponsiveNavbar from "../navbar/ResponsiveNavbar";
import { aiesecmanLogo } from "../_common/assets/exports";
import Home from "../home/Home";

interface ShellProps {}

const useStyles = createStyles((theme) => ({
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		height: "100%",
	},
	main: {
		background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2],
	},
}));

const Shell: React.FC<ShellProps> = () => {
	const [respOpen, respOpenHandlers] = useDisclosure(false);
	const { classes, cx, theme } = useStyles();
	return (
		<AppShell
			styles={{
				main: classes.main as unknown as CSSObject,
			}}
			navbarOffsetBreakpoint="xs"
			fixed
			navbar={<ResponsiveNavbar respOpen={respOpen} />}
			header={
				<Header height={60} p="xm" className={cx(classes.header)}>
					<div style={{ display: "flex", alignItems: "center", width: "100vw", justifyContent: "space-between" }}>
						<MediaQuery largerThan="xs" styles={{ display: "none" }}>
							<Burger
								opened={respOpen}
								onClick={respOpenHandlers.toggle}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery>
						<Image height={54} width={54} src={aiesecmanLogo}></Image>
						<div style={{ marginRight: "10px" }}>
							<div style={{ backgroundColor: "orange", borderRadius: 100, width: 36, height: 36 }}></div>
						</div>
					</div>
					{/* placeholder for user profile */}
				</Header>
			}
		>
			<Home></Home>
		</AppShell>
	);
};

export default Shell;
