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
        paddingLeft: "1.8rem",
    },
}));

interface IAppInput {
    icon?: JSX.Element[] | JSX.Element;
    placeholder?: string;
    value?: string;
    handleChange: (value: any) => void;
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
}

export const AppInput = forwardRef((props: IAppInput, ref) => {
    const classes = useStyles();
    // component state
    const handleOnChange = (event: any) => {
        props.handleChange(event);
    };
    return (
        <CustomInputWrapper {...props.style}>
            <InputWrapper hasBorder={props.hasBorder} backgroundColor={props.backgroundColor}>
                {props.icon ? <LabelWrapper>{props.icon}</LabelWrapper> : ""}
                <TextField
                    className={clsx(classes.input, props.className)}
                    placeholder={props.placeholder}
                    fullWidth
                    multiline={props.multiple ? true : false}
                    value={props.value?.toString()}
                    onChange={handleOnChange}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            fontSize: "16px",
                        },
                        classes: {},
                    }}
                />
            </InputWrapper>
            {props.noError || (props.name && <ErrorMessage name={props.name} component={Error} />)}
        </CustomInputWrapper>
    );
});
