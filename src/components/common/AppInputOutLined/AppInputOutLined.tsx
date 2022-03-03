import styled from "styled-components";
import {
    makeStyles,
    Theme,
    createStyles,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import { Error } from "..";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
            },
        },
        margin: {
            // margin: theme.spacing(1),
        },
        // withoutLabel: {
        //     marginTop: theme.spacing(3),
        // },
        textField: {
            width: "100%",
            "& .MuiOutlinedInput-input": {
                fontSize: "1.6rem",
            },
            "& .MuiInputLabel-outlined": {
                fontSize: "1.6rem",
            },
        },
    })
);

interface IProps {
    placeholder?: string;
    value?: string;
    handleChange: (value: string) => void;
    handleBlur: (value: string) => void;
    name?: string;
    label?: string;
    error?: string;
    typePassword?: boolean;
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
    const handleOnBlur = React.useCallback(
        (event) => {
            props.handleBlur(event);
            // setShowPassword(!showPassword);
        },
        [props]
    );
    return (
        <StyledAppInputOutLined>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
                <OutlinedInput
                    name={props.name}
                    id="outlined-adornment-password"
                    type={showPassword ? "password" : "text"}
                    value={props.value}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            {props.typePassword && (
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
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
            {props.error && <Error>{props.error}</Error>}
        </StyledAppInputOutLined>
    );
};

const StyledAppInputOutLined = styled.div``;