import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles, Button } from "@material-ui/core";

import { AppSelect, GroupPeople, Flag } from "@components";
import { IconSearch, AppInput, IconCalendar, Location } from "@components";
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
    const [selectedTour, setSelectedTour] = useState<string>();
    const [selectedQuantityPeople, setSelectedQuantityPeople] = useState<number>();
    return (
        <StyledHomeToursTab>
            <p className="title">Discover beautiful Vietnam</p>
            <form className="tour__form">
                <AppInput icon={<Location />} placeholder="Enter Location" />
                <AppInput icon={<IconCalendar />} placeholder="Departure time" />
                <AppSelect
                    icon={<Flag width="16" height="18" />}
                    value={selectedTour}
                    placeholder="Type of Tour"
                    options={[
                        { label: "Beach", value: "Beach" },
                        { label: "Moutain", value: "Moutain" },
                    ]}
                    handleChange={(e) => setSelectedTour(e.target.value)}
                />
                <AppSelect
                    icon={<GroupPeople width="16" height="18" />}
                    value={selectedQuantityPeople}
                    handleChange={(e) => setSelectedQuantityPeople(e.target.value)}
                    placeholder="Number of Guest"
                    options={[
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
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
