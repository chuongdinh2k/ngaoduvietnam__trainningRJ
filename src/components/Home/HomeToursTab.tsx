import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles, Button } from "@material-ui/core";

import { AppSelect, GroupPeople, Flag } from "@components";
import { IconSearch, AppInput, AppDatePicker, Location } from "@components";
import { BREAK_ONLY_MOBILE } from "@configs";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing,
        width: "100%",
        height: "6.4rem",
        color: theme.colors.pureWhite,
        textTransform: "capitalize",
    },
}));

export const HomeToursTab = () => {
    const classes = useStyles();
    // component state
    const [valueDate, setValueDate] = useState<any>();

    const onChangeDate = (value: string) => {
        setValueDate((prev: any) => ({ ...prev, departureDate: value }));
    };

    return (
        <StyledHomeToursTab>
            <p className="title">Discover beautiful Vietnam</p>
            <form className="tour__form">
                <AppInput icon={<Location />} placeholder="Enter Location" />
                <AppDatePicker
                    label="Departure time:"
                    placeholder="Departure time"
                    value={valueDate}
                    handleChange={(date: any) => {
                        onChangeDate(date);
                    }}
                    // handleBlur={(date: any) => onChangeDate(date)}
                    minDate={new Date()}
                    labelStyle={{ fontSize: "14px" }}
                />
                <AppSelect
                    icon={<Flag width="16" height="18" />}
                    value=""
                    placeholder="Type of Tour"
                    options={[
                        { label: "Beach", value: "Beach" },
                        { label: "Moutain", value: "Moutain" },
                    ]}
                />
                <AppSelect
                    icon={<GroupPeople width="16" height="18" />}
                    value=""
                    placeholder="Number of Guest"
                    options={[
                        { label: "Beach", value: "Beach" },
                        { label: "Moutain", value: "Moutain" },
                    ]}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<IconSearch />}
                >
                    Search
                </Button>
            </form>
        </StyledHomeToursTab>
    );
};
const StyledHomeToursTab = styled.div`
    .title {
        font-size: 2.4rem;
        font-family: ${(p) => p.theme.typography.fontFamily};
        margin-block-start: 0;
        @media (max-width: ${BREAK_ONLY_MOBILE}) {
            font-size: 1.5rem;
        }
    }
`;