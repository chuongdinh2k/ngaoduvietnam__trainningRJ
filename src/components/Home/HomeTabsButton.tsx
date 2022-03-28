import React from "react";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";

import { theme } from "@styles";
import { HomeToursTab } from ".";
import { NUMBER_ONE, NUMBER_ZERO } from "@configs";
import { IDataTour } from "@types";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
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
        // height: "52.2rem",
        [theme.breakpoints.up("xl")]: {
            padding: "5rem 5rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "1rem 1.5rem",
        },
    },
}));
// WHAT: create id for tab
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
// WHAT: custom tab
const CustomTab = withStyles({
    root: {
        width: "50%",
        minWidth: "50%",
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

interface IProps {
    show?: boolean;
    formTitle?: string;
    inputTypeOfTour?: boolean;
    onChangeDebounce?: (e: string | undefined) => void;
    dataInputBounce?: Array<IDataTour>;
    loadingDebounce?: boolean;
    userQuery?: string;
}
export const HomeTabsButtonComponent = (props: IProps) => {
    const {
        show,
        formTitle,
        inputTypeOfTour,
        userQuery,
        onChangeDebounce,
        dataInputBounce,
        loadingDebounce,
    } = props;
    // material ui hooks
    const classes = useStyles();

    // componentvalue state
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <StyledHomeTabsButtonComponent show={show}>
            <div className="tab">
                <Tabs
                    TabIndicatorProps={{ style: { background: theme.colors.orange } }}
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <CustomTab label="Tours" {...a11yProps(NUMBER_ZERO)} />
                    <CustomTab label="Hotels" {...a11yProps(NUMBER_ONE)} />
                </Tabs>
            </div>
            <TabPanel value={value} index={NUMBER_ZERO}>
                <div className={classes.tabContent}>
                    <HomeToursTab
                        dataInputBounce={dataInputBounce}
                        onChangeDebounce={onChangeDebounce}
                        formTitle={formTitle}
                        inputTypeOfTour={inputTypeOfTour}
                        loadingDebounce={loadingDebounce}
                        userQuery={userQuery}
                    />
                </div>
            </TabPanel>
            <TabPanel value={value} index={NUMBER_ONE}>
                <div className={classes.tabContent}></div>
            </TabPanel>
        </StyledHomeTabsButtonComponent>
    );
};
const StyledHomeTabsButtonComponent = styled.div<IProps>`
    .tab {
        display: ${(p) => (p.show ? "block" : "none")};
    }
`;
