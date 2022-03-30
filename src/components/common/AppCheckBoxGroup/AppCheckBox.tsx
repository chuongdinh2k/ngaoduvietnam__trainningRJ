import { makeStyles, createStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import clsx from "clsx";

import { ComponentsRenderStars } from "@components";
import { ErrorMessage } from "formik";
import { Error } from "..";

interface IOption {
    label?: string;
    value?: string | number | number[];
    icon?: string;
    star?: number;
}
interface IProps {
    name?: string;
    values?: any;
    options?: Array<IOption>;
    title?: string;
    noError?: boolean;
    handleChange: (value: any) => void;
}

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            "& .MuiTypography-body1": {
                fontSize: "16px",
            },
            "& .MuiRating-icon": {
                paddingRight: "0.5rem",
                fontSize: "2rem",
            },
        },
        formControl: {
            fontSize: "16px",
        },
        title: {
            fontSize: "16px",
            fontWeight: "bold",
            padding: "2rem 0",
        },
        wrapLabel: {
            display: "flex !important",
        },
        label: {
            flex: "50%",
            fontWeight: 500,
            fontSize: "16px",
            textTransform: "capitalize",
            [theme.breakpoints.down("xs")]: {
                fontSize: "13px",
            },
        },
        labelWithImage: {
            width: "10rem",
            [theme.breakpoints.down("md")]: {
                paddingTop: "0.5rem",
            },
            [theme.breakpoints.down("xs")]: {
                width: "7rem",
            },
        },
        icon: {
            height: "100%",
            paddingLeft: "3.3rem",
            [theme.breakpoints.down("xs")]: {
                paddingLeft: 0,
            },
        },
        tickSize: {
            transform: "scale(1.5)",
        },
        hidden: {
            display: "none",
        },
    })
);
export const AppCheckBox = (props: IProps) => {
    const handleOnChange = React.useCallback(
        (event) => {
            props.handleChange(event);
        },
        [props]
    );
    const classes = useStyles();
    const { name, options, title } = props;
    return (
        <>
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <p className={classes.title}>{title}</p>
                    <FormGroup>
                        {options &&
                            options.map((opt, i) => (
                                <FormControlLabel
                                    key={i}
                                    control={
                                        <Checkbox
                                            onChange={handleOnChange}
                                            color="primary"
                                            name={name}
                                            value={opt.value}
                                            checked={
                                                props.values &&
                                                props.values.indexOf(opt.value?.toString()) > -1
                                            }
                                            className={classes.tickSize}
                                        />
                                    }
                                    label={
                                        <div className={classes.wrapLabel}>
                                            {/* WHAT: render with star select */}
                                            {opt.star && (
                                                <ComponentsRenderStars number={opt.star} />
                                            )}
                                            {/* WHAT: render with image  */}
                                            <span
                                                className={clsx(
                                                    classes.label,
                                                    opt.star && classes.hidden,
                                                    opt.icon && classes.labelWithImage
                                                )}
                                            >
                                                {opt.label}
                                            </span>
                                            {opt.icon && (
                                                <img className={classes.icon} src={opt.icon} />
                                            )}
                                        </div>
                                    }
                                />
                            ))}
                    </FormGroup>
                </FormControl>
            </div>
            {props.noError || (props.name && <ErrorMessage name={props.name} component={Error} />)}
        </>
    );
};
