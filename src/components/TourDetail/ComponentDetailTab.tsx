import React from "react";
import { makeStyles, Theme, AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import clsx from "clsx";

import { ComponentTabDetailDescription, ComponentTabDetailAdditionalInfo } from ".";
import { dataTourDetail } from "@demos";

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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        "& .MuiTab-root": {
            minWidth: "33.33%",
            textAlign: "left",
            textTransform: "capitalize",
            fontSize: "2.4rem",
            padding: 0,
            paddingBottom: "1.8rem",
            borderBottom: "1px solid #888888",
            [theme.breakpoints.down("xs")]: {
                fontSize: "1.4rem",
            },
        },
        "& .MuiBox-root": {
            padding: 0,
        },
        "& .MuiTab-wrapper": {
            alignItems: "flex-start",
        },
    },
    appBar: {
        marginTop: "16rem",
        backgroundColor: theme.colors.pureWhite,
        boxShadow: "none",
        [theme.breakpoints.down("xs")]: {
            marginTop: "8rem",
        },
    },
    activeTab: {
        color: theme.colors.orange,
    },
}));

export const ComponentDetailTab = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{ style: { display: "none" } }}
                    aria-label="simple tabs example"
                >
                    <Tab
                        label="Descriptions"
                        className={clsx(value === 0 ? classes.activeTab : "")}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label="Additional Info"
                        className={clsx(value === 1 ? classes.activeTab : "")}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label="Reviews(54)"
                        className={clsx(value === 2 ? classes.activeTab : "")}
                        {...a11yProps(2)}
                    />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ComponentTabDetailDescription discription={dataTourDetail.discription} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ComponentTabDetailAdditionalInfo additionalInfo={dataTourDetail.additionalInfo} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
};
