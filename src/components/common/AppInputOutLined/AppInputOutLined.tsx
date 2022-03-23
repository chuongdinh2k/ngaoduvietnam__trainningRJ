import styled from "styled-components";
import {
    makeStyles,
    createStyles,
    FormControl,
    InputLabel,
    OutlinedInput,
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
    const classes = useStyles();

    // component variable
    const [showPassword, setShowPassword] = React.useState(props.typePassword);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleOnChange = React.useCallback(
        (event) => {
            props.handleChange(event);
        },
        [props]
    );
    return (
        <StyledAppInputOutLined>
            {/* <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
                <WithOutBorderTextField
                    name={props.name}
                    id={`outlined-adornment-password-${props.name}`}
                    type={showPassword ? "password" : "text"}
                    value={props.value}
                    onChange={handleOnChange}
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            {props.typePassword && (
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
                    labelWidth={70}
                />
            </FormControl>
            {props.noError || (props.name && <ErrorMessage name={props.name} component={Error} />)} */}
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="input-with-icon-adornment">{props.label}</InputLabel>
                <Input
                    name={props.name}
                    id={`inpit-adornment-password-${props.name}`}
                    type={showPassword ? "password" : "text"}
                    value={props.value}
                    onChange={handleOnChange}
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            {props.typePassword && (
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
            {props.noError || (props.name && <ErrorMessage name={props.name} component={Error} />)}
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
