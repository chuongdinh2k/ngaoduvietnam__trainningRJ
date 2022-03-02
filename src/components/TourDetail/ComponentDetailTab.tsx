import React from "react";
import { makeStyles, Theme, AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import clsx from "clsx";

import {
    ComponentTabDetailDescription,
    ComponentTabDetailAdditionalInfo,
    ComponentTabReview,
} from ".";
// import { dataTourDetail } from "@demos";
import { NUMBER_ZERO, NUMBER_ONE, NUMBER_TWO } from "@configs";
import { IDataTour, IHotel } from "@types";
import { ComponentHotelDetailDescription, ComponentListRooms } from "..";

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

interface ITab {
    name?: string;
    index?: number;
}
interface IProps {
    tabs?: Array<ITab>;
    dataTour?: IDataTour;
    dataHotel?: IHotel;
}
export const ComponentDetailTab = (props: IProps) => {
    // component variable
    const { tabs, dataTour, dataHotel } = props;
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
                    {tabs &&
                        tabs.map((tab) => (
                            <Tab
                                disableRipple
                                key={tab.index}
                                label={tab.name}
                                className={clsx(value === tab.index ? classes.activeTab : "")}
                                {...a11yProps(tab.index)}
                            />
                        ))}
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={NUMBER_ZERO}>
                {dataTour && <ComponentTabDetailDescription description={dataTour.discription} />}
                {dataHotel && <ComponentListRooms selectRooms={dataHotel.selectRooms} />}
            </TabPanel>
            <TabPanel value={value} index={NUMBER_ONE}>
                {dataHotel && (
                    <ComponentHotelDetailDescription description={dataHotel.description} />
                )}
                {dataTour && (
                    <ComponentTabDetailAdditionalInfo additionalInfo={dataTour.additionalInfo} />
                )}
            </TabPanel>
            <TabPanel value={value} index={NUMBER_TWO}>
                {dataTour && <ComponentTabReview tourReviews={dataTour.reviews} />}
                {dataHotel && <ComponentTabReview hotelReviews={dataHotel.reviews} />}
            </TabPanel>
        </div>
    );
};
