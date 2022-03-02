import React, { ChangeEvent } from "react";
import { Divider } from "@material-ui/core";
import styled from "styled-components";
import { Formik } from "formik";

import { AppRangeSlider, AppCheckBox } from "..";

interface IRangeSlider {
    name?: string;
    max: number;
    min: number;
}
interface ICheckBoxInput {
    lable?: string;
    value?: string | number;
}
interface ICheckBoxGroup {
    name?: string;
    data: Array<ICheckBoxInput>;
}
interface IProps {
    duration?: ICheckBoxGroup;
    typeOfTour?: ICheckBoxGroup;
    moneyRange?: IRangeSlider;
}

export const ComponentListTourFilter = (props: IProps) => {
    const { duration, typeOfTour, moneyRange } = props;
    // component state
    const [valueRange, setValueRange] = React.useState<number[]>([150, 1000]);
    // component variable
    const initialValuesPackage = {
        typeOfTour: [],
        duration: [],
        range: valueRange,
    };
    // WHAT: handle range value
    const handleChangeRange = (event: ChangeEvent<any>, newValue: number | number[]) => {
        setValueRange(newValue as number[]);
    };
    return (
        <StyleComponentFilter>
            <div className="wrapper">
                <div className="top">
                    <p className="top__title">Filter By</p>
                    <span className="top__btn">CLEAR</span>
                </div>
                <Formik
                    initialValues={initialValuesPackage}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ handleSubmit, values, handleChange }) => {
                        return (
                            <div>
                                <div className="slide">
                                    <AppRangeSlider
                                        value={valueRange}
                                        name="range"
                                        handleChange={handleChangeRange}
                                        title={moneyRange && moneyRange.name}
                                        min={moneyRange && moneyRange.min}
                                        max={moneyRange && moneyRange.max}
                                    />
                                    <Divider />
                                </div>
                                <div className="select">
                                    <AppCheckBox
                                        handleChange={handleChange("duration")}
                                        title="Duration"
                                        name="duration"
                                        values={values.duration}
                                        options={duration && duration.data}
                                    />
                                    <Divider />
                                </div>
                                <div className="select">
                                    <AppCheckBox
                                        handleChange={handleChange("typeOfTour")}
                                        title={typeOfTour && typeOfTour.name}
                                        name={typeOfTour && typeOfTour.name}
                                        values={values.typeOfTour}
                                        options={typeOfTour && typeOfTour.data}
                                    />
                                    <Divider />
                                </div>
                                <button
                                    type="submit"
                                    className="btn"
                                    onClick={() => handleSubmit()}
                                >
                                    Apply Filter
                                </button>
                            </div>
                        );
                    }}
                </Formik>
            </div>
        </StyleComponentFilter>
    );
};
export const StyleComponentFilter = styled.div`
    .wrapper {
        background-color: ${(p) => p.theme.colors.pureWhite};
        width: 35rem;
        padding: 2.4rem;
    }
    .top {
        display: flex;
        justify-content: space-between;
        &__title,
        &__btn {
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &__title {
            font-size: 1.8rem;
            color: ${(p) => p.theme.colors.darkBlue};
            text-transform: uppercase;
        }
        &__btn {
            color: ${(p) => p.theme.colors.gray4};
            text-transform: capitalize;
            font-size: 1.6rem;
            &:hover {
                color: ${(p) => p.theme.colors.red};
            }
        }
    }
    .btn {
        width: 100%;
        margin-top: 2rem;
        background-color: ${(p) => p.theme.colors.orange};
        color: ${(p) => p.theme.colors.pureWhite};
        padding: 12px 0;
        border: none;
        font-size: 16px;
        cursor: pointer;
        &:hover {
            color: ${(p) => p.theme.colors.gray4};
        }
    }
`;
