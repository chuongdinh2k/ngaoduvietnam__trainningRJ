import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

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
    handleBlur: (value: any) => void;
    defaultValue?: string;
    multiple?: boolean;
    name?: string;
    label?: string;
    hasBorder?: boolean;
    error?: string;
    className?: string;
    style?: any;
    backgroundColor?: string;
}

export const AppInput = (props: IAppInput) => {
    const classes = useStyles();
    // component state
    const [inputValue, setInputValue] = React.useState("");
    const [selectedItem, setSelectedItem] = React.useState<any>([]);
    const handleOnChange = React.useCallback(
        (event) => {
            props.handleChange(event);
            // setInputValue(event.target.value);
            if (props.multiple) {
                props.handleChange(selectedItem.concat([event.target.value]).join(","));
                setInputValue(event.target.value);
            }
        },
        [props, selectedItem]
    );
    const handleOnBlur = React.useCallback(
        (event) => {
            props.handleBlur(event);
        },
        [props]
    );
    return (
        <CustomInputWrapper {...props.style}>
            <InputWrapper hasBorder={props.hasBorder} backgroundColor={props.backgroundColor}>
                {props.icon ? <LabelWrapper>{props.icon}</LabelWrapper> : ""}
                <TextField
                    className={clsx(classes.input, props.className)}
                    placeholder={props.placeholder}
                    fullWidth
                    multiline={props.multiple ? true : false}
                    value={props.multiple ? inputValue : props.value?.toString() || ""}
                    onChange={handleOnChange}
                    defaultValue="Default value"
                    onBlur={handleOnBlur}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            fontSize: "16px",
                        },
                        classes: {},
                    }}
                />
            </InputWrapper>
            {props.error && <Error>{props.error}</Error>}
        </CustomInputWrapper>
    );
};
