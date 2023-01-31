import { createStyles, TextInput, Anchor } from "@mantine/core";
// import { IconSearch } from '@tabler/icons';
import searchImg from '../../assets/search.png';
import { DashboardAccordion } from "../home/dashboard-add-data-sources/DashboardAccordion";
import fbIcon from '../../assets/facebook.png';
import customeSources from '../../assets/custom-data-sources.png';
import twitterIcon from '../../assets/twitter.png';

const useStyles = createStyles((theme) => ({
	main: {
		background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
		borderRadius: theme.radius.md,
        paddingTop: "3%",
        marginBottom: "3%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
	},

	label: {
		color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark,
        fontWeight: 700,
        fontSize: "25px",
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        padding: "2% 0% 2%",
        boxShadow: "2px gray",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "transparent",

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column",
            fontSize: "20px",
        },
	},
    search:{
        width: "50%",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: "100%",
        },
    },
    mobileExpandHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    expandAllLink: {
        display: "none",
        fontSize: "15px",
        color: theme.colors.gray[6],
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: "block",
        },
    }
}));

const sourcesTypes = [
    {label: "Facebook Ads", img: fbIcon},
    {label: "Facebook Insights", img:fbIcon},
    {label: "Twitter", img: twitterIcon},
    {label: "Custom Data Source", img: customeSources},
  ];
  
  const sourcesInfoData = [
    {text: "Maneesha"},
    {text: "Lakshani"},
    {text: "ABCD"},
    {text: "Maneesha Lakshani"},
  ];


function Integrations() {
   const { classes, theme } = useStyles();

  return (
    <div>
        <div shadow="sm" radius="md" className={classes.label} justify="spaceBetween">
            <div className={classes.mobileExpandHeader}>
                <div>Integrations</div>
                <Anchor component="button" type="button" className={classes.expandAllLink}>
                    Expand All
                </Anchor>
            </div>
            <TextInput
                placeholder="Search"
                icon={<img src={searchImg} width={15} />}
                rightSectionWidth={90}
                // rightSection={rightSection}
                styles={{ rightSection: { pointerEvents: 'none' } }}
                className={classes.search}
            />
        </div>
        <div className={classes.main}>
            <DashboardAccordion sourcesInfoData={sourcesInfoData} sourcesTypes={sourcesTypes} />
        </div>
    </div>
  )
}

export default Integrations