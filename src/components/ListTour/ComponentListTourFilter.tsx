import React from "react";
import { Divider } from "@material-ui/core";
import styled from "styled-components";

import { AppRangeSlider, AppCheckboxGroup } from "..";

interface IRangeSlider {
    name?: string;
    max: number;
    min: number;
}
interface ICheckBox {
    name?: string;
    data: Array<string>;
}
interface IProps {
    duration?: ICheckBox;
    typeOfTour?: ICheckBox;
    moneyRange?: IRangeSlider;
}

export const ComponentListTourFilter = (props: IProps) => {
    const { duration, typeOfTour, moneyRange } = props;
    // component state
    const [checkedValues, setCheckedValues] = React.useState<Array<string | number>>([]);
    const [checkedTypes, setCheckedTypes] = React.useState<Array<string>>([]);
    const [valueRange, setValueRange] = React.useState<number[]>([150, 1000]);

    // WHAT: handle range value
    const handleChangeRange = (event: Event, newValue: number | number[]) => {
        setValueRange(newValue as number[]);
    };
    // WHAT: handle select check box
    function handleSelect(checkedName: string) {
        const newNames = checkedValues?.includes(checkedName)
            ? checkedValues?.filter((name: string | number) => name !== checkedName)
            : [...(checkedValues ?? []), checkedName];
        setCheckedValues(newNames);
        return newNames;
    }
    // WHAT: handle select check box
    function handleSelectType(checkedName: string) {
        const newNames = checkedTypes?.includes(checkedName)
            ? checkedTypes?.filter((name: string | number) => name !== checkedName)
            : [...(checkedTypes ?? []), checkedName];
        setCheckedTypes(newNames);
        return newNames;
    }
    // WHAT: Clear all value
    function handleClear() {
        setCheckedValues([]);
        setCheckedTypes([]);
    }
    return (
        <StyleComponentFilter>
            <form className="wrapper">
                <div className="top">
                    <p className="top__title">Filter By</p>
                    <span className="top__btn" onClick={() => handleClear()}>
                        CLEAR
                    </span>
                </div>
                <div className="slide">
                    <AppRangeSlider
                        value={valueRange}
                        handleChange={handleChangeRange}
                        title={moneyRange && moneyRange.name}
                        min={moneyRange && moneyRange.min}
                        max={moneyRange && moneyRange.max}
                    />
                    <Divider />
                </div>
                <div className="select">
                    <AppCheckboxGroup
                        title="Duration"
                        handleSelect={handleSelect}
                        checkedValues={checkedValues}
                        data={duration && duration.data}
                    />
                    <Divider />
                </div>
                <div className="select">
                    <AppCheckboxGroup
                        title={typeOfTour && typeOfTour.name}
                        handleSelect={handleSelectType}
                        checkedValues={checkedTypes}
                        data={typeOfTour && typeOfTour.data}
                    />
                    <Divider />
                </div>
                <button className="btn">Apply Filter</button>
            </form>
        </StyleComponentFilter>
    );
};
const StyleComponentFilter = styled.div`
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
