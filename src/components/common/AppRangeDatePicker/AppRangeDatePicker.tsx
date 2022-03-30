import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import { RangeInput } from "@mui/lab/DateRangePicker/RangeTypes";
import { Box, TextField } from "@mui/material";
import { ErrorMessage } from "formik";

import { InputWrapperRangeDate } from ".";
import { Error } from "..";

interface IDateRange {
    size?: string;
    icon?: JSX.Element[] | JSX.Element;
    handleChange(date: DateRange<unknown>): void;
    value: RangeInput<unknown>;
    placeholder?: string;
    name?: string;
    noError?: boolean;
}
export const AppRangeDatePicker = (props: IDateRange) => {
    const { size, icon, value, name, noError, handleChange } = props;
    return (
        <InputWrapperRangeDate size={size}>
            <label className="label__icon">{icon}</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="wrapperRangeContent">
                    <DateRangePicker
                        disableCloseOnSelect={false}
                        calendars={2}
                        value={value}
                        onChange={handleChange}
                        inputFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField
                                    {...startProps}
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    label=""
                                    placeholder="Placeholder"
                                />
                                <Box sx={{ mx: 2 }}> - </Box>
                                <TextField
                                    {...endProps}
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    label=""
                                />
                            </React.Fragment>
                        )}
                    />
                </div>
            </LocalizationProvider>
            {noError || (name && <ErrorMessage name={name} component={Error} />)}
        </InputWrapperRangeDate>
    );
};
