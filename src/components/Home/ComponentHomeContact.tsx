import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { Formik } from "formik";

import { AppInput, IconLetter } from "@components";
import { theme } from "@styles";
import { formSchemaEmail } from "@utils";

export const ComponentHomeContact = () => {
    // component variable

    return (
        <StyledComponentHomeContact>
            <div className="contactWrapper">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <h3>
                            Leave us an email,
                            <br className="xl-hidden" /> to get{" "}
                            <span className="title__active">the lastest deals</span>
                        </h3>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Formik
                            initialValues={{
                                email: "",
                            }}
                            onSubmit={(values, { resetForm }) => resetForm()}
                            validationSchema={formSchemaEmail}
                        >
                            {({ handleSubmit, values, errors, handleChange }) => {
                                return (
                                    <div className="form">
                                        <AppInput
                                            // errors={errors}
                                            name="email"
                                            hasBorder
                                            handleChange={handleChange("email")}
                                            // setFieldValue={setFieldValue}
                                            value={values.email}
                                            icon={
                                                <IconLetter
                                                    size="large"
                                                    color={`${theme.colors.orange}`}
                                                />
                                            }
                                            placeholder="example@gmail.com"
                                            error={errors.email}
                                        />
                                        <div
                                            className="form__button"
                                            onClick={() => handleSubmit()}
                                        >
                                            Send
                                        </div>
                                    </div>
                                );
                            }}
                        </Formik>
                    </Grid>
                </Grid>
            </div>
        </StyledComponentHomeContact>
    );
};
const StyledComponentHomeContact = styled.div`
    .contactWrapper {
        padding: 15rem 0;
        display: flex;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding: 4rem 0;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 4rem 0;
        }
    }
    h3 {
        width: 43.4rem;
        font-size: 4rem;
        font-family: ${(p) => p.theme.typography.fontFamily};
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 2rem;
            width: 100%;
        }
    }
    .title__active {
        color: ${(p) => p.theme.colors.orange};
    }
    .form {
        padding-left: 4rem;
        margin-top: 4rem;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        @media (min-width: 2000px) {
            .MuiInputBase-input {
                padding: 2px 0 7px;
            }
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            margin-top: 0;
            padding-left: 0;
            justify-content: flex-start;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            margin-top: 0;
            padding-left: 0;
            .MuiInputBase-input {
                padding: 0 0 0 7px !important;
            }
        }
    }
    .form__button {
        font-size: ${(p) => p.theme.typography.fontSize}px;
        height: 5rem;
        padding: 1rem 3.3rem;
        padding-top: 1.5rem;
        background-color: ${(p) => p.theme.colors.darkBlack};
        color: ${(p) => p.theme.colors.pureWhite};
        margin-left: 2.1rem;
        margin-bottom: 2rem;
        transition: 250ms;
        &:hover {
            transition: translateY(-10px);
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-top: 1rem;
            height: 4rem;
        }
    }
`;
