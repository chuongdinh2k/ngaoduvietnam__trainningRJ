import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles, Button } from "@material-ui/core";

import { AppSelect, GroupPeople, Flag } from "@components";
import { IconSearch, AppInput, IconCalendar, IconLocation } from "@components";
import { BREAK_ONLY_MOBILE } from "@configs";
import { Formik } from "formik";
import { formSchemaHomeFilter } from "@utils";

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
    // component variable
    const initialValuesPackage = {
        location: "",
        departure: "",
    };

    const classes = useStyles();
    // component state
    const [selectedTour, setSelectedTour] = useState<string>();
    const [selectedQuantityPeople, setSelectedQuantityPeople] = useState<number>();

    const handleChangeSelect = (
        event: React.ChangeEvent<{
            name?: string | undefined;
            value: unknown;
        }>
    ) => {
        const value = event.target.value as number;
        setSelectedQuantityPeople(value);
    };
    return (
        <StyledHomeToursTab>
            <p className="title">Discover beautiful Vietnam</p>
            <Formik
                initialValues={initialValuesPackage}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                }}
                validationSchema={formSchemaHomeFilter}
            >
                {({ handleSubmit, values, errors, handleChange, handleBlur }) => {
                    return (
                        <div className="tour__form">
                            <div className="input-group">
                                <AppInput
                                    handleChange={handleChange("location")}
                                    handleBlur={handleBlur("location")}
                                    icon={<IconLocation />}
                                    error={errors.location}
                                    value={values.location}
                                    name="location"
                                    placeholder="Enter Location"
                                />
                            </div>
                            <div className="input-group">
                                <AppInput
                                    handleChange={handleChange("departure")}
                                    handleBlur={handleBlur("departure")}
                                    icon={<IconCalendar />}
                                    error={errors.departure}
                                    value={values.departure}
                                    name="departure"
                                    placeholder="Departure time"
                                />
                            </div>
                            <div className="input-group">
                                <AppSelect
                                    icon={<Flag width="16" height="18" />}
                                    value={selectedTour}
                                    placeholder="Type of Tour"
                                    options={[
                                        { label: "Beach", value: "Beach" },
                                        { label: "Moutain", value: "Moutain" },
                                    ]}
                                    handleChange={handleChangeSelect}
                                />
                            </div>
                            <div className="input-group">
                                <AppSelect
                                    icon={<GroupPeople width="16" height="18" />}
                                    value={selectedQuantityPeople}
                                    handleChange={handleChangeSelect}
                                    placeholder="Number of Guest"
                                    options={[
                                        { label: "1", value: 1 },
                                        { label: "2", value: 2 },
                                    ]}
                                />
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<IconSearch />}
                                onClick={() => handleSubmit()}
                            >
                                Search
                            </Button>
                        </div>
                    );
                }}
            </Formik>
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
    .input-group {
        margin-top: 1.8rem;
        @media (max-width: ${BREAK_ONLY_MOBILE}) {
            margin-top: 0.8rem;
        }
    }
`;
