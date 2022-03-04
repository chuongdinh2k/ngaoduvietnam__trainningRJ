import React from "react";
import styled from "styled-components";
import { makeStyles, Button } from "@material-ui/core";

import { AppSelect, GroupPeople, Flag } from "@components";
import { IconSearch, AppInput, IconCalendar, IconLocation } from "@components";
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

interface IProps {
    formTitle?: string;
    inputTypeOfTour?: boolean;
}

export const HomeToursTab = (props: IProps) => {
    // component variable
    const initialValuesPackage = {
        location: "",
        departure: "",
        group: "",
        typeOfTour: "",
    };
    const classes = useStyles();
    return (
        <StyledHomeToursTab>
            <p className="title">{props.formTitle}</p>
            <Formik
                initialValues={initialValuesPackage}
                onSubmit={(values, { resetForm }) => {
                    resetForm();
                }}
                validationSchema={formSchemaHomeFilter}
            >
                {({ handleSubmit, values, handleChange }) => {
                    return (
                        <div className="tour__form">
                            <div className="input-group">
                                <AppInput
                                    handleChange={handleChange("location")}
                                    icon={<IconLocation />}
                                    value={values.location}
                                    name="location"
                                    placeholder="Enter Location"
                                />
                            </div>
                            <div className="input-group">
                                <AppInput
                                    handleChange={handleChange("departure")}
                                    icon={<IconCalendar />}
                                    value={values.departure}
                                    name="departure"
                                    placeholder="Departure time"
                                />
                            </div>
                            {!props.inputTypeOfTour ? (
                                ""
                            ) : (
                                <div className="input-group">
                                    <AppSelect
                                        name="typeOfTour"
                                        icon={<Flag width="16" height="18" />}
                                        value={values.typeOfTour}
                                        placeholder="Type of Tour"
                                        options={[
                                            { label: "Beach", value: "Beach" },
                                            { label: "Moutain", value: "Moutain" },
                                        ]}
                                        handleChange={handleChange("typeOfTour")}
                                    />
                                </div>
                            )}
                            <div className="input-group">
                                <AppSelect
                                    name="group"
                                    icon={<GroupPeople width="16" height="18" color="#FF7B42" />}
                                    value={values.group}
                                    handleChange={handleChange("group")}
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
                                type="submit"
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
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            font-size: 2rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.5rem;
        }
    }
    .input-group {
        margin-top: 1.8rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            margin-top: 0.8rem;
        }
    }
`;
