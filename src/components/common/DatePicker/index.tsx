import React, { useState } from "react";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { InputWrapper } from "./style";
import { Grid } from "@material-ui/core";

interface IAppDatePicker {
    icon?: JSX.Element[] | JSX.Element;
    label?: string;
    placeholder?: string;
    request?: boolean;
    note?: string;
    error?: string;
    value: Date | undefined | null;
    handleChange(date: Date | null | undefined, value?: string | null | undefined): void;
    // handleBlur: (value: any) => void;
    name?: string;
    minDate?: Date;
    maxDate?: Date;
    format?: string;
    hideIcon?: boolean;
    size?: string;
}
export const AppDatePicker = (props: IAppDatePicker) => {
    // component state
    const [openCalendar, setOpenCalendar] = useState(false);

    return (
        <InputWrapper size={props.size}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid direction="column" container justifyContent="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        fullWidth
                        variant="dialog"
                        format={props.format || "dd/MM/yyyy "}
                        value={props.value || null}
                        onChange={props.handleChange}
                        InputProps={{ readOnly: true, disableUnderline: true }}
                        inputVariant="standard"
                        keyboardIcon={props.hideIcon ? "" : props.icon}
                        InputAdornmentProps={{ position: "start" }}
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                        autoOk
                        InputLabelProps={{
                            shrink: false,
                        }}
                        minDate={props.minDate}
                        maxDate={props.maxDate}
                        placeholder={props.placeholder || "dd/mm/yyyy"}
                        onClick={() => setOpenCalendar(true)}
                        onClose={() => setOpenCalendar(false)}
                        open={openCalendar}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </InputWrapper>
    );
};
