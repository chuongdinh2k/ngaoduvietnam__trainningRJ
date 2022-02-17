import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { AppInput, IconLetter } from "@components";
import { theme } from "@styles";

export const ComponentHomeContact = () => {
    return (
        <StyledComponentHomeContact>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <h3>
                        Leave us an email,
                        <br /> to get <span className="title__active">the lastest deals</span>
                    </h3>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form className="form">
                        <AppInput
                            hasBorder={true}
                            icon={<IconLetter color={`${theme.colors.orange}`} />}
                            placeholder="example@gmail.com"
                        />
                        <input type="submit" className="form__button" value="Send" />
                    </form>
                </Grid>
            </Grid>
        </StyledComponentHomeContact>
    );
};
const StyledComponentHomeContact = styled.div`
    padding: 15rem 0;
    display: flex;
    h3 {
        width: 43.4rem;
        font-size: 4rem;
        font-family: ${(p) => p.theme.typography.fontFamily};
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 2.5rem;
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
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            margin-top: 0;
            padding-left: 0;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            margin-top: 0;
            padding-left: 0;
        }
    }
    .form__button {
        font-size: ${(p) => p.theme.typography.fontSize}px;
        padding: 1rem 3.3rem;
        background-color: ${(p) => p.theme.colors.darkBlack};
        color: ${(p) => p.theme.colors.pureWhite};
        margin-left: 2.1rem;
        margin-bottom: 2rem;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding: 4rem 0;
    }
`;
