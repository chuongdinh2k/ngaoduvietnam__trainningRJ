import React, { useEffect } from "react";
import { Formik } from "formik";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { login, selectAuth, useAppSelector } from "@redux";
import { CircularProgress } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { authRoutesEnum, appRoutesEnum } from "@enums";
import { StyledContentAuth } from ".";
import { AppInputOutLined } from "@components";
import { formSchemaLogin } from "@utils";
import clsx from "clsx";

export const Login = () => {
    const auth = useAppSelector(selectAuth);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        if (auth.tokenInfoAuth) {
            history.push(appRoutesEnum.HOME);
        }
    }, [auth]);
    const initialValuesPackage = {
        password: "",
        email: "",
    };
    return (
        <StyledContentAuth>
            <div className="wrapperAuth">
                <div className="content">
                    <h2 className="content__title">Sign In</h2>
                    <p className="content__subTitle">
                        Welcome to <span>NgaoduVietNam</span>
                    </p>
                    <Formik
                        initialValues={initialValuesPackage}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            dispatch(login(values));
                            setSubmitting(true);
                            resetForm();
                        }}
                        validationSchema={formSchemaLogin}
                    >
                        {({ handleSubmit, values, handleChange }) => {
                            return (
                                <div className="content__form">
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
                                    <div className="content__form-forgot">
                                        <Link to={authRoutesEnum.FORGOT_PASSWORD}>
                                            Forgot Password?
                                        </Link>
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
                                            Sign In
                                        </span>
                                    </Button>
                                </div>
                            );
                        }}
                    </Formik>
                    <p className="content__bottom">
                        Don't have an account? <Link to={authRoutesEnum.SIGN_UP}>Sign up</Link>
                    </p>
                </div>
            </div>
        </StyledContentAuth>
    );
};
