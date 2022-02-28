import React, { ChangeEvent } from "react";
import { Divider } from "@material-ui/core";
import { Formik } from "formik";

import { AppRangeSlider, AppCheckBox, StyleComponentFilter } from "..";

interface IRangeSlider {
    name?: string;
    max: number;
    min: number;
}
interface ICheckBoxInput {
    lable?: string;
    value?: string | number;
    star?: number;
}
interface ICheckBoxGroup {
    name?: string;
    data: Array<ICheckBoxInput>;
}
interface IProps {
    reviewScore?: ICheckBoxGroup;
    stars?: ICheckBoxGroup;
    moneyRange?: IRangeSlider;
}

export const ComponentHotelsFilter = (props: IProps) => {
    const { stars, moneyRange, reviewScore } = props;
    // component state
    const [valueRange, setValueRange] = React.useState<number[]>([150, 1000]);
    // component variable
    const initialValuesPackage = {
        hotelStars: [] as number[],
        reviewScore: [] as number[],
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
                                        handleChange={handleChange("hotelStars")}
                                        title="Hotel Stars"
                                        name="hotelStars"
                                        values={values.hotelStars}
                                        options={stars && stars.data}
                                    />
                                    <Divider />
                                </div>
                                <div className="select">
                                    <AppCheckBox
                                        handleChange={handleChange("reviewScore")}
                                        title={reviewScore && reviewScore.name}
                                        name={reviewScore && reviewScore.name}
                                        values={values.reviewScore}
                                        options={reviewScore && reviewScore.data}
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
