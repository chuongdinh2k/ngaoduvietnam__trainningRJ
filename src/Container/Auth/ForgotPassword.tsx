import React from "react";
import { Formik } from "formik";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { selectAuth, useAppSelector } from "@redux";
import { authRoutesEnum } from "@enums";
import { StyledContentAuth } from ".";
import { AppInputOutLined } from "@components";
import { formSchemaEmail } from "@utils";
import clsx from "clsx";

export const ForgotPassword = () => {
    // hook
    const history = useHistory();
    const auth = useAppSelector(selectAuth);
    const initialValuesPackage = {
        email: "",
    };
    return (
        <StyledContentAuth>
            <div className="wrapperAuth">
                <div className="content">
                    <h2 className="content__title">Forgot Password</h2>
                    <p className="content__subTitle">
                        Enter the e-mail address associated with the account. We'll e-mail a link to
                        reset your password.
                    </p>
                    <Formik
                        initialValues={initialValuesPackage}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            resetForm();
                        }}
                        validationSchema={formSchemaEmail}
                    >
                        {({ handleSubmit, values, handleChange }) => {
                            return (
                                <div className="content__form">
                                    <div className="content__form-input">
                                        <AppInputOutLined
                                            value={values.email}
                                            label="Email address"
                                            name="email"
                                            typePassword
                                            handleChange={handleChange("email")}
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
                                            Send Request
                                        </span>
                                    </Button>
                                    <Button
                                        className="content__form-btn withOutBG"
                                        onClick={() => history.push(authRoutesEnum.LOGIN)}
                                    >
                                        Back to sign in
                                    </Button>
                                </div>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </StyledContentAuth>
    );
};
