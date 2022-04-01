import React, { useLayoutEffect } from "react";
import { Formik } from "formik";
import { Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { register, selectAuth, useAppSelector } from "@redux";
import { authRoutesEnum, appRoutesEnum } from "@enums";
import { StyledContentAuth } from ".";
import { AppInputOutLined, IconFacebook } from "@components";
import { formSchemaSignup } from "@utils";
import clsx from "clsx";

export const Register = () => {
    // hook
    const history = useHistory();
    const auth = useAppSelector(selectAuth);
    useLayoutEffect(() => {
        if (auth.tokenInfoAuth) {
            history.push(appRoutesEnum.HOME);
        }
    }, [auth]);

    const dispatch = useDispatch();
    const initialValuesPackage = {
        password: "",
        email: "",
        firstName: "",
        lastName: "",
    };
    return (
        <StyledContentAuth>
            <div className="wrapperAuth">
                <div className="content">
                    <h2 className="content__title">Register</h2>
                    <p className="content__subTitle">
                        Welcome to <span>NgaoduVietNam</span>
                    </p>
                    <Formik
                        initialValues={initialValuesPackage}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            dispatch(register({ ...values, username: values.lastName }));
                            setSubmitting(true);
                            resetForm();
                        }}
                        validationSchema={formSchemaSignup}
                    >
                        {({ handleSubmit, values, handleChange }) => {
                            return (
                                <div className="content__form">
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <div className="content__form-input">
                                                <AppInputOutLined
                                                    value={values.firstName}
                                                    label="First Name"
                                                    name="firstName"
                                                    typePassword={false}
                                                    handleChange={handleChange("firstName")}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <div className="content__form-input">
                                                <AppInputOutLined
                                                    value={values.lastName}
                                                    label="Last Name"
                                                    name="lastName"
                                                    typePassword={false}
                                                    handleChange={handleChange("lastName")}
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className="content__form-input">
                                        <AppInputOutLined
                                            value={values.email}
                                            label="Email"
                                            name="email"
                                            typePassword={false}
                                            handleChange={handleChange("email")}
                                        />
                                    </div>
                                    <div className="content__form-input">
                                        <AppInputOutLined
                                            value={values.password}
                                            label="Password"
                                            name="password"
                                            typePassword
                                            handleChange={handleChange("password")}
                                        />
                                    </div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        className="content__form-btn"
                                        onClick={() => handleSubmit()}
                                        disabled={auth.isLoading}
                                    >
                                        {auth.isLoading && <CircularProgress size={24} />}

                                        <span className={clsx(auth.isLoading ? "pl-1" : "")}>
                                            Sign Up
                                        </span>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        className="content__form-btn facebook"
                                        startIcon={<IconFacebook size="large" />}
                                        onClick={() => history.push("/undefined")}
                                    >
                                        Sign in with Facebook
                                    </Button>
                                </div>
                            );
                        }}
                    </Formik>
                    <p className="content__bottom">
                        Member already? <Link to={authRoutesEnum.LOGIN}>Log in</Link>{" "}
                    </p>
                </div>
            </div>
        </StyledContentAuth>
    );
};
