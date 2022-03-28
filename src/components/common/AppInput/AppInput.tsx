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
    const {
        handleChange,
        hasBorder,
        defaultValue,
        backgroundColor,
        icon,
        size,
        placeholder,
        className,
        multiple,
        noError,
        name,
        style,
        value,
    } = props;
    const classes = useStyles();
    // component state
    const handleOnChange = (event: any) => {
        handleChange && handleChange(event);
    };
    return (
        <CustomInputWrapper {...style}>
            <InputWrapper hasBorder={hasBorder} backgroundColor={backgroundColor} size={size}>
                {icon ? <LabelWrapper>{icon}</LabelWrapper> : ""}
                <TextField
                    className={clsx(classes.input, className)}
                    placeholder={placeholder}
                    fullWidth
                    multiline={multiple ? true : false}
                    value={value?.toString()}
                    defaultValue={defaultValue}
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
            </InputWrapper>
            {noError || (name && <ErrorMessage name={name} component={Error} />)}
        </CustomInputWrapper>
    );
});
