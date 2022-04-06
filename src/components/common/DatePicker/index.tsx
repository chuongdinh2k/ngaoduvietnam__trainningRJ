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
    // props
    const { size, format, value, hideIcon, handleChange, minDate, maxDate, placeholder, icon } =
        props;
    return (
        <InputWrapper size={size}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid direction="column" container justifyContent="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        fullWidth
                        variant="dialog"
                        format={format || "dd/MM/yyyy "}
                        value={value || null}
                        onChange={handleChange}
                        InputProps={{ readOnly: true, disableUnderline: true }}
                        inputVariant="standard"
                        keyboardIcon={hideIcon ? "" : icon}
                        InputAdornmentProps={{ position: "start" }}
                        KeyboardButtonProps={{
                            "aria-label": "change date",
                        }}
                        autoOk
                        InputLabelProps={{
                            shrink: false,
                        }}
                        minDate={minDate}
                        maxDate={maxDate}
                        placeholder={placeholder || "dd/mm/yyyy"}
                        onClick={() => setOpenCalendar(true)}
                        onClose={() => setOpenCalendar(false)}
                        open={openCalendar}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </InputWrapper>
    );
};
