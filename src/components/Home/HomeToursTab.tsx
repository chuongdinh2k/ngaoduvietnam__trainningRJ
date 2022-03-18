import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

import { AppSelect, GroupPeople, Flag } from "@components";
import { IconSearch, AppInput, AppDatePicker, IconLocation } from "@components";
import { Formik } from "formik";
// import { formSchemaHomeFilter } from "@utils";
import { groupOfPeople, TypeOfTour } from "@demos";
import { getListFilterTours } from "@redux";
import { LIMIT_RECORD_6 } from "@configs";
import { useDispatch } from "react-redux";

interface IProps {
    formTitle?: string;
    inputTypeOfTour?: boolean;
}

export const HomeToursTab = (props: IProps) => {
    // hooks
    const dispatch = useDispatch();
    // component variable
    const initialValuesPackage = {
        location: "",
        departure: "",
        group: "",
        typeOfTour: "",
    };
    const [time, setTime] = React.useState("");
    const handleOnChange = (e: any) => {
        setTime(e);
    };
    return (
        <StyledHomeToursTab>
            <p className="title">{props.formTitle}</p>
            <Formik
                initialValues={initialValuesPackage}
                onSubmit={(values, { resetForm }) => {
                    dispatch(
                        getListFilterTours({
                            filter: {
                                ...values,
                            },
                            pagination: {
                                page: 1,
                                limit: LIMIT_RECORD_6,
                            },
                        })
                    );
                    resetForm({ values: initialValuesPackage });
                    setTime("");
                }}
                // validationSchema={formSchemaHomeFilter}
            >
                {({ handleSubmit, values, handleChange }) => {
                    return (
                        <div className="tour__form">
                            <div className="input-group">
                                <AppInput
                                    handleChange={handleChange("location")}
                                    icon={<IconLocation size="large" />}
                                    value={values.location}
                                    name="location"
                                    placeholder="Enter Location"
                                />
                            </div>
                            <div className="input-group">
                                <AppDatePicker
                                    name="departure"
                                    value={time}
                                    handleChange={(date: any) => handleOnChange(date)}
                                    placeholder="Departure time"
                                    minDate={new Date()}
                                />
                            </div>
                            {!props.inputTypeOfTour ? (
                                ""
                            ) : (
                                <div className="input-group">
                                    <AppSelect
                                        name="typeOfTour"
                                        icon={<Flag size="large" width="16" height="18" />}
                                        value={values.typeOfTour}
                                        placeholder="Type of Tour"
                                        options={TypeOfTour.data}
                                        handleChange={handleChange("typeOfTour")}
                                    />
                                </div>
                            )}
                            <div className="input-group">
                                <AppSelect
                                    name="group"
                                    icon={
                                        <GroupPeople
                                            size="large"
                                            width="16"
                                            height="18"
                                            color="#FF7B42"
                                        />
                                    }
                                    value={values.group}
                                    handleChange={handleChange("group")}
                                    placeholder="Number of Guest"
                                    options={groupOfPeople.data}
                                />
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                className="btn"
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
            font-size: 1.6rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.5rem;
        }
    }
    .input-group {
        margin-top: 1.8rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            margin-top: 0.5rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            margin-top: 0.8rem;
        }
    }
    .btn {
        /* margin: 8px; */
        margin-top: 1.8rem;
        width: 100%;
        height: 6.4rem;
        color: ${(p) => p.theme.colors.pureWhite};
        text-transform: capitalize;
        font-size: 1.6rem;
        @media (min-width: 2000px) {
            height: 10rem;
            font-size: 2.6rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            height: 5rem;
            margin-top: 0.5rem;
            font-size: 1.4rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            height: 4rem;
        }
    }
`;
