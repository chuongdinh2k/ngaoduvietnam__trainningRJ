import React from "react";
import { Formik } from "formik";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { selectAuth, useAppSelector } from "@redux";
import { authRoutesEnum } from "@enums";
import { StyledContentAuth } from ".";
import { AppInputOutLined, IconFacebook } from "@components";
import { formSchemaChangePassword } from "@utils";
import clsx from "clsx";

export const ChangePassword = () => {
    // hook
    const history = useHistory();
    const auth = useAppSelector(selectAuth);
    const initialValuesPackage = {
        newPassword: "",
        confirmPassword: "",
    };
    return (
        <StyledContentAuth>
            <div className="wrapperAuth">
                <div className="content">
                    <h2 className="content__title">New Password</h2>
                    <p className="content__subTitle">Ceate your new password</p>
                    <Formik
                        initialValues={initialValuesPackage}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            resetForm();
                        }}
                        validationSchema={formSchemaChangePassword}
                    >
                        {({ handleSubmit, values, handleChange }) => {
                            return (
                                <div className="content__form">
                                    <div className="content__form-input">
                                        <AppInputOutLined
                                            value={values.newPassword}
                                            label="New password"
                                            name="newPassword"
                                            typePassword
                                            handleChange={handleChange("newPassword")}
                                        />
                                    </div>
                                    <div className="content__form-input">
                                        <AppInputOutLined
                                            value={values.confirmPassword}
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            typePassword
                                            handleChange={handleChange("confirmPassword")}
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
                                            Sign In
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
