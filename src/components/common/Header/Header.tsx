import React from "react";
import { Grid } from "@material-ui/core";

import logo from "../../../assets/logo.png";
import styled from "styled-components";
import { ComponentSidebar } from "./SideBarMenu";
import { BREAK_ONLY_MOBILE } from "@configs";

export const Header = () => {
    return (
        <StyledHeader>
            <Grid container>
                <Grid item xs={6} md={6}>
                    <img src={logo} />
                </Grid>
                <Grid xs={6} md={6}>
                    <ComponentSidebar />
                </Grid>
            </Grid>
        </StyledHeader>
    );
};
const StyledHeader = styled.div`
    position: relative;
    padding: 0 16.5rem;
    position: fixed;
    z-index: 999;
    width: 100%;
    padding-top: 2rem;
    background-color: transparent;
    @media (max-width: ${BREAK_ONLY_MOBILE}) {
        padding: 0 2rem;
    }
`;
