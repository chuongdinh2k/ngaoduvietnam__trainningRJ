import React, { useLayoutEffect } from "react";
import { Divider, Grid, TextField } from "@material-ui/core";
import { Formik } from "formik";
import { DateRange } from "@mui/lab/DateRangePicker/RangeTypes";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { StyledComponentCheckOutContent, ComponentPaymentMethod, ComponentCheckOutTotal } from ".";
import { formSchemaCheckOut, getEndDate } from "@utils";
import { AppInput } from "..";
import { useAppSelector, selectHotel, setBookingForm } from "@redux";

export const ComponentCheckOutContent = () => {
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    // redux store
    const hotel = useAppSelector(selectHotel);
    useLayoutEffect(() => {
        if (Object.keys(hotel.bookingHotel).length === 0) {
            history.goBack();
        }
    }, []);
    const [inputDateRange, setInputDateRange] = React.useState<DateRange<unknown> | undefined>(
        hotel.bookingHotel?.dateRange
    );
    const [inputStartDate, setInputStartDate] = React.useState<Date | undefined>(
        hotel.bookingHotel?.startDate
    );
    // component variable
    const initialValuesPackage = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        specialRequirement: "",
        payment: [],
        startDate: hotel.bookingHotel?.startDate,
        group: hotel.bookingHotel?.group,
        promoCode: "",
        dateRange: hotel.bookingHotel?.dateRange,
    };
    const handleChangeStartDate = (date: Date) => {
        setInputStartDate(date);
        dispatch(
            setBookingForm({
                ...hotel.bookingHotel,
                startDate: date,
                endDate: getEndDate(date, hotel?.bookingHotel?.duration),
            })
        );
    };
    const handleOnChangeDate = (date: DateRange<unknown>) => {
        setInputDateRange(date);
        dispatch(
            setBookingForm({
                ...hotel.bookingHotel,
                dateRange: date,
            })
        );
    };
    return (
        <StyledComponentCheckOutContent>
            <Formik
                initialValues={initialValuesPackage}
                onSubmit={(values, { resetForm }) => {
                    alert({ ...values });
                    resetForm({ values: initialValuesPackage });
                }}
                validationSchema={formSchemaCheckOut}
            >
                {({ handleSubmit, values, errors, handleChange, handleBlur }) => {
                    return (
                        <div className="wrapper">
                            <h3>Booking Submission</h3>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={8}>
                                    <Divider />
                                    <div className="inforForm">
                                        <h4 className="inforForm__title">Traveler Detail</h4>
                                        <p className="inforForm__text">
                                            Information we need to confirm your tour or activity
                                        </p>
                                        <p className="inforForm__subTitle">Lead Traveler (Adult)</p>
                                        <Grid container spacing={4}>
                                            <Grid item xs={12} md={6}>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">
                                                        First Name
                                                        <span className="activeLabel">*</span>
                                                    </label>
                                                    <AppInput
                                                        handleChange={handleChange("firstName")}
                                                        name="firstName"
                                                        value={values.firstName}
                                                        placeholder="First Name"
                                                        hasBorder
                                                        error={errors.firstName}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">
                                                        Last Name
                                                        <span className="activeLabel">*</span>
                                                    </label>
                                                    <AppInput
                                                        handleChange={handleChange("lastName")}
                                                        name="lastName"
                                                        value={values.lastName}
                                                        placeholder="Last Name"
                                                        hasBorder
                                                        error={errors.lastName}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">
                                                        Email<span className="activeLabel">*</span>
                                                    </label>
                                                    <AppInput
                                                        handleChange={handleChange("email")}
                                                        name="email"
                                                        value={values.email}
                                                        placeholder="email@domain.com"
                                                        hasBorder
                                                        error={errors.email}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">
                                                        Phone Number
                                                        <span className="activeLabel">*</span>
                                                    </label>
                                                    <AppInput
                                                        handleChange={handleChange("phoneNumber")}
                                                        name="phoneNumber"
                                                        value={values.phoneNumber}
                                                        placeholder="Your Phone"
                                                        hasBorder
                                                        error={errors.phoneNumber}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <p className="inforForm__subTitle">Address</p>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">Your Address</label>
                                                    <AppInput
                                                        handleChange={handleChange("address")}
                                                        name="address"
                                                        value={values.address}
                                                        placeholder="Your Address"
                                                        hasBorder
                                                        error={errors.address}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">City</label>
                                                    <AppInput
                                                        handleChange={handleChange("city")}
                                                        name="city"
                                                        value={values.city}
                                                        placeholder="Your City"
                                                        hasBorder
                                                        error={errors.city}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">
                                                        State/Province/Region
                                                    </label>
                                                    <AppInput
                                                        handleChange={handleChange("state")}
                                                        name="state"
                                                        value={values.state}
                                                        placeholder="State/Province/Region"
                                                        hasBorder
                                                        error={errors.state}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">
                                                        Zip Code/ Postal Code
                                                    </label>
                                                    <AppInput
                                                        handleChange={handleChange("zipCode")}
                                                        name="zipCode"
                                                        value={values.zipCode}
                                                        placeholder="Your Zip Code/ Postal Code"
                                                        hasBorder
                                                        error={errors.zipCode}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">Country</label>
                                                    <AppInput
                                                        handleChange={handleChange("country")}
                                                        name="country"
                                                        value={values.country}
                                                        placeholder="Your Country"
                                                        hasBorder
                                                        error={errors.country}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <div className="inforForm__wrapperInput">
                                                    <label className="label">
                                                        Special Requirement
                                                    </label>
                                                    <TextField
                                                        fullWidth
                                                        id="outlined-multiline-static"
                                                        multiline
                                                        rows={4}
                                                        variant="outlined"
                                                        placeholder="Special Requirement"
                                                        name="specialRequirement"
                                                        value={values.specialRequirement}
                                                        onChange={handleChange(
                                                            "specialRequirement"
                                                        )}
                                                    />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <ComponentCheckOutTotal
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        values={values}
                                        handleOnChangeDate={handleOnChangeDate}
                                        inputDateRange={inputDateRange}
                                        handleChangeStartDate={handleChangeStartDate}
                                        inputStartDate={inputStartDate}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={8}>
                                    <div className="divider" />
                                    <ComponentPaymentMethod
                                        handleChange={handleChange}
                                        payment={values.payment}
                                    />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <button
                                        className="btn"
                                        type="submit"
                                        onClick={() => {
                                            handleSubmit();
                                        }}
                                    >
                                        Complete Booking
                                    </button>
                                </Grid>
                            </Grid>
                        </div>
                    );
                }}
            </Formik>
        </StyledComponentCheckOutContent>
    );
};
