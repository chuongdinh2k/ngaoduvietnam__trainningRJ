import React from "react";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "@styles";
import { withStyles } from "@material-ui/styles";

import { HomeToursTab } from "./HomeToursTab";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabContent: {
        padding: "3.4rem 3.1rem",
        height: "52.2rem",
        [theme.breakpoints.down("sm")]: {
            height: "46.6rem",
        },
    },
}));
// WHAT: create id for tab
function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
// WHAT: custom tab
const CustomTab = withStyles({
    root: {
        width: "50%",
        height: "4.6rem",
        color: theme.colors.darkBlack,
        textTransform: "capitalize",
        fontFamily: theme.typography.fontFamily,
        fontSize: `${theme.typography.fontSize}px`,
        backgroundColor:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.704) 1.52%, rgba(255, 255, 255, 0.64) 100%)",
        backdropFilter: "blur(42px)",
    },
    selected: {
        backgroundColor: theme.colors.orange,
        color: theme.colors.pureWhite,
    },
})(Tab);
export const HomeTabsButton = () => {
    // material ui hooks
    const classes = useStyles();

    // component state
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
            <Tabs
                TabIndicatorProps={{ style: { background: theme.colors.orange } }}
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
            >
                <CustomTab label="Tours" {...a11yProps(0)} />
                <CustomTab label="Hotels" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className={classes.tabContent}>
                    <HomeToursTab />
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={classes.tabContent}></div>
            </TabPanel>
        </div>
    );
};
