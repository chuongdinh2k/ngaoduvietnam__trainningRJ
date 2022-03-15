import { Button, Grid, TextField } from "@material-ui/core";
import { ErrorMessage, Formik } from "formik";

import React from "react";

import { AppInput, Error } from "..";
import { theme } from "@styles";
import { formSchemaContact } from "@utils";
import { StyledComponentContactForm } from ".";
import background__contact from "@assets/bannerIntro.png";
import { IconHome } from "..";

export const ComponentContactForm = () => {
    // component variable
    const initialValuesPackage = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };
    return (
        <StyledComponentContactForm>
            <div className="wrapperContact">
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <div className="wrapperForm">
                            <h3 className="title">We'd love to hear from you</h3>
                            <p className="text">
                                Send us a message and we'll respond as soon as possible
                            </p>
                            <Formik
                                initialValues={initialValuesPackage}
                                onSubmit={(values, { resetForm }) => resetForm()}
                                validationSchema={formSchemaContact}
                            >
                                {({ handleSubmit, values, handleChange, handleBlur }) => {
                                    return (
                                        <div className="form">
                                            <div className="form__input">
                                                <AppInput
                                                    name="name"
                                                    value={values.name}
                                                    placeholder="Your name"
                                                    handleChange={handleChange("name")}
                                                    handleBlur={handleBlur("name")}
                                                    backgroundColor={theme.colors.backgroundGray2}
                                                />
                                            </div>
                                            <div className="form__input">
                                                <AppInput
                                                    name="email"
                                                    value={values.email}
                                                    placeholder="Your email"
                                                    handleChange={handleChange("email")}
                                                    handleBlur={handleBlur("email")}
                                                    backgroundColor={theme.colors.backgroundGray2}
                                                />
                                            </div>
                                            <div className="form__input">
                                                <AppInput
                                                    name="phone"
                                                    value={values.phone}
                                                    placeholder="Your phone"
                                                    handleChange={handleChange("phone")}
                                                    handleBlur={handleBlur("phone")}
                                                    backgroundColor={theme.colors.backgroundGray2}
                                                />
                                            </div>
                                            <div className="form__input">
                                                <TextField
                                                    fullWidth
                                                    id="outlined-multiline-static"
                                                    multiline
                                                    rows={6}
                                                    defaultValue="Default Value"
                                                    variant="outlined"
                                                    placeholder="Message"
                                                    name="message"
                                                    value={values.message}
                                                    onChange={handleChange("message")}
                                                />
                                                <ErrorMessage name="message" component={Error} />
                                            </div>
                                            <div className="form__wrappButton">
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    className="form__wrappButton-btn"
                                                    onClick={() => handleSubmit()}
                                                >
                                                    Send Message
                                                </Button>
                                            </div>
                                        </div>
                                    );
                                }}
                            </Formik>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="contact__right">
                            <img
                                className="contact__right-img"
                                src={background__contact}
                                alt="background-image contact"
                            />
                            <div className="contact__right-content">
                                <h4 className="right__content-title">Our Office</h4>
                                <div className="right__list">
                                    <span className="right__list-icon">
                                        <IconHome />
                                    </span>
                                    <p className="right__list-text">
                                        <span className="right__list-title">Address</span>
                                        <span className="right__list-subtext">
                                            27 Old Gloucester Street, London, WC1N 3AX
                                        </span>
                                    </p>
                                </div>
                                <div className="right__list">
                                    <span className="right__list-icon">
                                        <IconHome />
                                    </span>
                                    <p className="right__list-text">
                                        <span className="right__list-title">Address</span>
                                        <span className="right__list-subtext">
                                            27 Old Gloucester Street, London, WC1N 3AX
                                        </span>
                                    </p>
                                </div>
                                <div className="right__list">
                                    <span className="right__list-icon">
                                        <IconHome />
                                    </span>
                                    <p className="right__list-text">
                                        <span className="right__list-title">Address</span>
                                        <span className="right__list-subtext">
                                            27 Old Gloucester Street, London, WC1N 3AX
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </StyledComponentContactForm>
    );
};
