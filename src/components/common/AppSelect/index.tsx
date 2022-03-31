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
    name?: string;
    options?: any;
    disabled?: boolean;
    styleSelect?: any;
    multiple?: boolean;
    size?: string;
}
export const AppSelect = (props: IAppSelect) => {
    // props
    const { name, size, icon, value, multiple, placeholder, options, handleChange } = props;
    const classes = useStyles();

    const RendePlaceholder = ({ children }: any) => {
        return <Placeholder>{children}</Placeholder>;
    };
    return (
        <InputWrapper size={size}>
            <LabelWrapper>{icon}</LabelWrapper>
            <Select
                name={name}
                className={classes.select}
                value={value}
                displayEmpty
                disableUnderline
                multiple={multiple}
                onChange={handleChange}
                placeholder={placeholder}
                renderValue={
                    value === ""
                        ? () => <RendePlaceholder>{placeholder}</RendePlaceholder>
                        : undefined
                }
            >
                <MenuItem value="" disabled>
                    {placeholder}
                </MenuItem>
                {options &&
                    options.length > 0 &&
                    options.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
            </Select>
        </InputWrapper>
    );
};
