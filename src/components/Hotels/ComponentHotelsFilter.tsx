import React, { ChangeEvent } from "react";
import { Divider } from "@material-ui/core";
import { Formik } from "formik";

import { AppRangeSlider, AppCheckBox, StyleComponentFilter } from "..";
import { selectHotel, useAppSelector } from "@redux";
import { IHotel } from "@types";
import { filterArry } from "@utils";

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
    handleClose: () => void;
    setListFilter: React.Dispatch<React.SetStateAction<IHotel[]>>;
}

export const ComponentHotelsFilter = (props: IProps) => {
    const hotels = useAppSelector(selectHotel);
    //    hooks
    const { stars, moneyRange, reviewScore, setListFilter, handleClose } = props;
    // component state
    const [valueRange, setValueRange] = React.useState<number[]>([0, 1000]);
    // component variable
    const initialValuesPackage = {
        star: [] as number[],
        rating: [] as number[],
    };
    // WHAT: handle range value
    const handleChangeRange = (event: ChangeEvent<any>, newValue: number | number[]) => {
        setValueRange(newValue as number[]);
    };
    return (
        <StyleComponentFilter>
            <Formik
                initialValues={initialValuesPackage}
                onSubmit={(values) => {
                    setListFilter(
                        filterArry(hotels.dataHotelsList, { ...values, price: valueRange })
                    );
                    handleClose();
                }}
            >
                {({ handleSubmit, values, handleChange, resetForm }) => {
                    return (
                        <div className="wrapper">
                            <div className="top">
                                <p className="top__title">Filter By</p>
                                <span
                                    onClick={() => {
                                        resetForm({ values: initialValuesPackage });
                                        setValueRange([0, 1000]);
                                    }}
                                    className="top__btn"
                                >
                                    CLEAR
                                </span>
                            </div>
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
                                        handleChange={handleChange("star")}
                                        title="Hotel Stars"
                                        name="star"
                                        values={values.star}
                                        options={stars && stars.data}
                                    />
                                    <Divider />
                                </div>
                                <div className="select">
                                    <AppCheckBox
                                        handleChange={handleChange("rating")}
                                        title={reviewScore && reviewScore.name}
                                        name="rating"
                                        values={values.rating}
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
                        </div>
                    );
                }}
            </Formik>
        </StyleComponentFilter>
    );
};
