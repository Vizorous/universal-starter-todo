import { createStyles, TextInput, Card  } from "@mantine/core";
import { DashboardAccordion } from "./DashboardAccordion";
// import { IconSearch } from '@tabler/icons';
import searchImg from '../../../assets/search.png';

const useStyles = createStyles((theme) => ({
	main: {
		background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
		borderRadius: theme.radius.md,
	},
    addBox: {
        padding: "2% 3%",
        marginBottom: "3%"
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
	},
    inputBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3%",
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
    }
}));


function AddDataSources() {
   const { classes, theme } = useStyles();

  return (
    <div className={classes.main}>
        <Card shadow="sm" radius="md" className={classes.label} justify="spaceBetween">
            <div>{window.innerWidth >= 500 ? "Add you data sources" : "A"}</div>
            <TextInput
                placeholder="Search"
                // icon={<IconSearch size={16} />}
                rightSectionWidth={90}
                // rightSection={rightSection}
                styles={{ rightSection: { pointerEvents: 'none' } }}
                className={classes.search}
            />
        </Card>
        <div className={classes.addBox}>
            <div className={classes.inputBox}>
                <DashboardAccordion />
            </div>
        </div>
    </div>
  )
}

export default AddDataSources