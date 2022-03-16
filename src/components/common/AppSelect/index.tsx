import React from "react";
import { makeStyles, MenuItem, Select } from "@material-ui/core";

import { InputWrapper, LabelWrapper, Placeholder } from "./style";

const useStyles = makeStyles((theme) => ({
    select: {
        width: "100%",
        marginLeft: "1.75rem",
        fontSize: "14px",
        backgroundColor: theme.colors.pureWhite,
        lineHeight: "2.24rem",
        fontWeight: 500,
    },
}));

interface IAppSelect {
    labelStyle?: any;
    icon?: JSX.Element[] | JSX.Element;
    style?: any;
    label?: string;
    placeholder?: string;
    request?: boolean;
    note?: string;
    error?: string;
    value?: string | Array<string> | number;
    defaultValue?: string;
    handleChange: (value: any) => void;
    // handleBlur?: (value: any) => void;
    name?: string;
    options?: any;
    disabled?: boolean;
    styleSelect?: any;
    multiple?: boolean;
}
export const AppSelect = (props: IAppSelect) => {
    const classes = useStyles();

    const RendePlaceholder = ({ children }: any) => {
        return <Placeholder>{children}</Placeholder>;
    };
    return (
        <InputWrapper>
            <LabelWrapper>{props.icon}</LabelWrapper>
            <Select
                name={props.name}
                className={classes.select}
                value={props.value}
                displayEmpty
                disableUnderline
                multiple={props.multiple}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                renderValue={
                    props.value === ""
                        ? () => <RendePlaceholder>{props.placeholder}</RendePlaceholder>
                        : undefined
                }
            >
                <MenuItem value="" disabled>
                    {props.placeholder}
                </MenuItem>
                {props.options &&
                    props.options.length > 0 &&
                    props.options.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
            </Select>
        </InputWrapper>
    );
};
