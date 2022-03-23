import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ErrorMessage } from "formik";

import { InputWrapper, LabelWrapper, CustomInputWrapper, Error } from ".";
import clsx from "clsx";

const useStyles = makeStyles((theme: any) => ({
    input: {
        "&::placeholder": {
            color: theme.colors.gray1,
        },
        "& .MuiInputBase-input": {
            fontSize: "1.4rem",
            padding: "3px 0 1px",
            [theme.breakpoints.down("xs")]: {
                fontSize: "1.4rem",
            },
        },
        paddingLeft: "1.8rem",
    },
}));

interface IAppInput {
    icon?: JSX.Element[] | JSX.Element;
    placeholder?: string;
    value?: string;
    handleChange?: (value: any) => void;
    handleBlur?: (value: any) => void;
    defaultValue?: string;
    multiple?: boolean;
    name?: string;
    label?: string;
    hasBorder?: boolean;
    noError?: boolean;
    error?: string;
    className?: string;
    style?: any;
    ref?: any;
    backgroundColor?: string;
    size?: string;
    debounce?: boolean;
}

export const AppInput = forwardRef((props: IAppInput, ref: any) => {
    const classes = useStyles();
    // component state
    const handleOnChange = (event: any) => {
        props.handleChange && props.handleChange(event);
    };
    return (
        <CustomInputWrapper {...props.style}>
            <InputWrapper
                hasBorder={props.hasBorder}
                backgroundColor={props.backgroundColor}
                size={props.size}
            >
                {props.icon ? <LabelWrapper>{props.icon}</LabelWrapper> : ""}
                <TextField
                    className={clsx(classes.input, props.className)}
                    placeholder={props.placeholder}
                    fullWidth
                    multiline={props.multiple ? true : false}
                    value={props.value?.toString()}
                    defaultValue={props.defaultValue}
                    onChange={handleOnChange}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            fontSize: "16px",
                        },
                        classes: {},
                    }}
                    ref={ref}
                />
                {/* {props.debounce && <ComponentPopOver open={props.debounce} />} */}
            </InputWrapper>
            {props.noError || (props.name && <ErrorMessage name={props.name} component={Error} />)}
        </CustomInputWrapper>
    );
});
