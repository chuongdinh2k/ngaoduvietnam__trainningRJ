import React, { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { theme } from "@styles";

const useStyles = makeStyles({
    root: {
        width: 300,
        paddingTop: "2rem",
        "& .MuiSlider-rail": {
            height: "6px",
        },
        "& .MuiSlider-track": {
            height: "6px",
        },
        "& .MuiSlider-thumb": {
            backgroundColor: theme.colors.pureWhite,
            border: `2px solid ${theme.colors.orange}`,
            width: "15px",
            height: "15px",
        },
        "& .MuiSlider-valueLabel": {
            top: "-20px",
            left: "calc(-50% - 1px)",
        },
        "& .MuiSlider-valueLabel > span": {
            backgroundColor: "transparent",
        },
        "& .MuiSlider-valueLabel > span > span": {
            fontSize: "16px",
            fontWeight: "bold",
        },
    },
    title: {
        fontSize: "16px",
        fontWeight: "bold",
        paddingBottom: "2rem",
    },
});

function valuetext(value: number) {
    return `$${value}`;
}
interface IProps {
    title?: string;
    handleChange: (event: ChangeEvent<any>, value: number | number[]) => void;
    value?: number | number[];
    max?: number;
    min?: number;
    name?: string;
}
export const AppRangeSlider = (props: IProps) => {
    const { handleChange, value, title, max, min } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title} id="range-slider" gutterBottom>
                {title}:
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                min={min}
                max={max}
            />
        </div>
    );
};
