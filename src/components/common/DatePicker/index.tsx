import React, { useState } from "react";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { InputWrapper, LabelWrapper } from "./style";
import { Grid } from "@material-ui/core";
import { IconCalendar } from "@components";

interface IAppDatePicker {
    icon?: JSX.Element[] | JSX.Element;
    labelStyle?: any;
    style?: any;
    label?: string;
    placeholder?: string;
    request?: boolean;
    note?: string;
    error?: string;
    value: Date | string | null;
    handleChange(date: Date | null, value?: string | null | undefined): void;
    // handleBlur: (value: any) => void;
    name?: string;
    minDate?: any;
    maxDate?: any;
    format?: string;
    styleDateInput?: any;
    hideIcon?: boolean;
}
export const AppDatePicker = (props: IAppDatePicker) => {
    // component state
    const [openCalendar, setOpenCalendar] = useState(false);

    return (
        <InputWrapper>
            <LabelWrapper>{props.icon}</LabelWrapper>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid direction="column" container justifyContent="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        fullWidth
                        variant="dialog"
                        format={props.format || "dd/MM/yyyy "}
                        value={props.value || null}
                        onChange={props.handleChange}
                        InputProps={{ readOnly: true }}
                        inputVariant="outlined"
                        keyboardIcon={props.hideIcon ? "" : <IconCalendar />}
                        InputAdornmentProps={{ position: "start" }}
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                        autoOk
                        // allowKeyboardControl={false}
                        InputLabelProps={{
                            shrink: false,
                        }}
                        minDate={props.minDate}
                        maxDate={props.maxDate}
                        placeholder={props.placeholder || "dd/mm/yyyy"}
                        onClick={() => setOpenCalendar(true)}
                        onClose={() => setOpenCalendar(false)}
                        open={openCalendar}
                        style={props.styleDateInput}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </InputWrapper>
    );
};
