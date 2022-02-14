import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { InputWrapper, LabelWrapper } from "./style";

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
    // handleChange: (value: any) => void;
    defaultValue?: string;
    multiple?: boolean;
    name?: string;
    label?: string;
}

export const AppInput = (props: IAppInput) => {
    const classes = useStyles();
    // component state
    const [inputValue, setInputValue] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return (
        <InputWrapper>
            <LabelWrapper>{props.icon}</LabelWrapper>
            <TextField
                className={classes.input}
                placeholder={props.placeholder}
                fullWidth
                value={inputValue}
                onChange={handleChange}
                defaultValue="Default value"
                InputProps={{
                    disableUnderline: true,
                    style: {
                        fontSize: "14px",
                    },
                    classes: {},
                }}
            />
        </InputWrapper>
    );
};
