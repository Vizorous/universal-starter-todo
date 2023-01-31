import { createStyles, TextInput, Card } from "@mantine/core";
import { DashboardAccordion } from "./DashboardAccordion";
// import { IconSearch } from '@tabler/icons';
import searchImg from '../../../assets/search.png';
import fbIcon from '../../../assets/facebook.png';
import customeSources from '../../../assets/custom-data-sources.png';

const useStyles = createStyles((theme) => ({
	main: {
		background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
		borderRadius: theme.radius.md,
	},
    addBox: {
        paddingTop: "3%",
        marginBottom: "3%",
    },
	label: {
		color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark,
        fontWeight: 700,
        fontSize: "25px",
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        padding: "2% 2.5% 2%",
        boxShadow: "2px gray",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column",
            fontSize: "20px",
            alignItems: "center"
        },
	},
    inputBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // padding: "3%",
        flexDirection: "column",
    },
    continueBtnBox: {
        marginTop: "3%",
        width: "30%",
        background: "red",
        borderRadius: "5px",
    },
    continueBtn: {
        width: "100%"
    },
    search:{
        width: "50%",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: "100%",
        },
    }
}));

const sourcesTypes = [
  {label: "Facebook Ads", img: fbIcon},
  {label: "Facebook Insights", img:fbIcon},
  {label: "Custom Data Source", img: customeSources},
];

const sourcesInfoData = [
  {text: "Maneesha"},
  {text: "Lakshani"},
  {text: "ABCD"},
  {text: "Maneesha Lakshani"},
];


function AddDataSources() {
   const { classes, theme } = useStyles();

  return (
    <div className={classes.main}>
        <Card shadow="sm" radius="md" className={classes.label} justify="spaceBetween">
            <div>Add your data sources</div>
            <TextInput
                placeholder="Search"
                icon={<img src={searchImg} width={15} />}
                rightSectionWidth={90}
                // rightSection={rightSection}
                styles={{ rightSection: { pointerEvents: 'none' } }}
                className={classes.search}
            />
        </Card>
        <div className={classes.addBox}>
            <div className={classes.inputBox}>
                <DashboardAccordion sourcesInfoData={sourcesInfoData} sourcesTypes={sourcesTypes} />
            </div>
        </div>
    </div>
  )
}

export default AddDataSources