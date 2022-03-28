import React, { useRef, RefObject } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

import { AppSelect, IconCalendar, GroupPeople, Flag } from "@components";
import { IconSearch, AppInput, AppDatePicker, IconLocation } from "@components";
import { Formik } from "formik";
import { groupOfPeople, TypeOfTour } from "@demos";
import { getListSearchTours } from "@redux";
import { LIMIT_RECORD_6 } from "@configs";
import { useDispatch } from "react-redux";
import { ComponentPopOver } from "..";
import { IDataTour } from "@types";

interface IOutSide {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    ref: RefObject<HTMLButtonElement>;
}
function useOutsideClick(props: IOutSide) {
    const { ref, setOpen } = props;
    React.useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
interface IProps {
    formTitle?: string;
    inputTypeOfTour?: boolean;
    onChangeDebounce?: (e: string | undefined) => void;
    dataInputBounce?: Array<IDataTour>;
    loadingDebounce?: boolean;
    userQuery?: string;
}
export const HomeToursTab = (props: IProps) => {
    const {
        formTitle,
        inputTypeOfTour,
        onChangeDebounce,
        userQuery,
        dataInputBounce,
        loadingDebounce,
    } = props;
    const ref = useRef(null);
    const [open, setOpen] = React.useState<boolean>(false);
    useOutsideClick({ ref, setOpen });
    // hooks
    const dispatch = useDispatch();
    // component variable
    const initialValuesPackage = {
        departure: "",
        group: "",
        typeOfTour: "",
    };
    const [time, setTime] = React.useState<Date | null>();
    const handleOnChange = (e: Date) => {
        setTime(e);
    };
    return (
        <StyledHomeToursTab>
            <p className="title">{formTitle}</p>
            <Formik
                initialValues={initialValuesPackage}
                onSubmit={(values, { resetForm }) => {
                    dispatch(
                        getListSearchTours({
                            filter: {
                                ...values,
                                location: userQuery,
                            },
                            pagination: {
                                page: 1,
                                limit: LIMIT_RECORD_6,
                            },
                        })
                    );
                    resetForm({ values: initialValuesPackage });
                    setTime(null);
                }}
            >
                {({ handleSubmit, values, handleChange }) => {
                    return (
                        <div className="tour__form">
                            <div
                                className="input-group appInput"
                                onClick={() => setOpen(!open)}
                                ref={ref}
                            >
                                <AppInput
                                    handleChange={(e) => onChangeDebounce?.(e.target.value)}
                                    icon={<IconLocation size="large" />}
                                    name="location"
                                    placeholder="Enter Location"
                                    size="large"
                                    value={userQuery}
                                />
                                <ComponentPopOver
                                    loadingDebounce={loadingDebounce}
                                    dataInputBounce={dataInputBounce}
                                    open={open}
                                    onChangeDebounce={onChangeDebounce}
                                />
                            </div>
                            <div className="input-group">
                                <AppDatePicker
                                    name="departure"
                                    value={time}
                                    handleChange={(date: Date) => handleOnChange(date)}
                                    placeholder="Departure time"
                                    minDate={new Date()}
                                    size="large"
                                    icon={<IconCalendar size="large" color="#FF7B42" />}
                                />
                            </div>
                            {inputTypeOfTour && (
                                <div className="input-group input-select">
                                    <AppSelect
                                        name="typeOfTour"
                                        icon={<Flag size="large" width="16" height="18" />}
                                        value={values.typeOfTour}
                                        placeholder="Type of Tour"
                                        options={TypeOfTour.data}
                                        handleChange={handleChange("typeOfTour")}
                                        size="large"
                                    />
                                </div>
                            )}
                            <div className="input-group input-select">
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
                                    size="large"
                                />
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                className="btn"
                                startIcon={<IconSearch size="large" />}
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
    .input-select {
        .MuiInputBase-input {
            padding: 9px 0 7px;
        }
    }
    .input-group {
        margin-top: 1.8rem;
        @media (min-width: 3500px) {
            margin-top: 3.5rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            margin-top: 0.8rem;
        }
    }
    .appInput {
        position: relative;
    }
    .btn {
        margin-top: 1.8rem;
        width: 100%;
        height: 5rem;
        color: ${(p) => p.theme.colors.pureWhite};
        text-transform: capitalize;
        font-size: 1.6rem;
        @media (min-width: 2000px) {
            margin-top: 2.8rem;
            height: 10rem;
            font-size: 2.6rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            height: 5rem;
            margin-top: 0.8rem;
            font-size: 1.4rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            height: 4rem;
        }
    }
`;
