import styled from "styled-components";
import {
    makeStyles,
    createStyles,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
    Input,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import { Error } from "..";
import { ErrorMessage } from "formik";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
            },
            "& .MuiFormLabel-root": {
                background: "white !important",
            },
        },
        margin: {
            // margin: theme.spacing(1),
        },

        textField: {
            width: "100%",
            "& .MuiInputBase-input": {
                fontSize: "1.6rem",
            },
            "& .MuiInputLabel-formControl": {
                fontSize: "1.6rem",
            },
        },
    })
);

interface IProps {
    placeholder?: string;
    value?: string;
    handleChange: (value: string) => void;
    handleBlur?: (value: string) => void;
    name?: string;
    label?: string;
    error?: string;
    typePassword?: boolean;
    noError?: boolean;
}
export const AppInputOutLined = (props: IProps) => {
    const { handleChange, typePassword, label, noError, value, name } = props;
    const classes = useStyles();
    // component variable
    const [showPassword, setShowPassword] = React.useState(typePassword);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleOnChange = React.useCallback(
        (event) => {
            handleChange(event);
        },
        [handleChange]
    );
    return (
        <StyledAppInputOutLined>
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
                <Input
                    name={name}
                    id={`inpit-adornment-password-${name}`}
                    type={showPassword ? "password" : "text"}
                    value={value}
                    onChange={handleOnChange}
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            {typePassword && (
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            )}
                        </InputAdornment>
                    }
                />
            </FormControl>
            {noError || (name && <ErrorMessage name={name} component={Error} />)}
        </StyledAppInputOutLined>
    );
};

const StyledAppInputOutLined = styled.div`
    label {
        background-color: white;
    }
    input:-internal-autofill-selected {
        background-color: transparent;
    }
`;
