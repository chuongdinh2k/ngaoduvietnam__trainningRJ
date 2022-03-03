import { Divider, Grid, TextField } from "@material-ui/core";
import { Formik } from "formik";

import { StyledComponentCheckOutContent, ComponentPaymentMethod, ComponentCheckOutTotal } from ".";
import { formSchemaCheckOut } from "@utils";
import { AppInput } from "..";

export const ComponentCheckOutContent = () => {
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
        dispatchEvent: "",
        group: "",
        promoCode: "",
    };

    return (
        <StyledComponentCheckOutContent>
            <Formik
                initialValues={initialValuesPackage}
                onSubmit={(values, { resetForm }) => {
                    resetForm();
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
                                                        handleBlur={handleBlur("firstName")}
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
                                                        handleBlur={handleBlur("lastName")}
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
                                                        handleBlur={handleBlur("email")}
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
                                                        handleBlur={handleBlur("phoneNumber")}
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
                                                        handleBlur={handleBlur("address")}
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
                                                        handleBlur={handleBlur("city")}
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
                                                        handleBlur={handleBlur("state")}
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
                                                        handleBlur={handleBlur("zipCode")}
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
                                                        handleBlur={handleBlur("country")}
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
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={8}>
                                    <div className="divider" />
                                    <ComponentPaymentMethod handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <button
                                        className="btn"
                                        type="submit"
                                        onClick={() => handleSubmit()}
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
