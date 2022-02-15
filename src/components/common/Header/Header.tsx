import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import logo from "@assets/logo.png";
import styled from "styled-components";

import { ComponentSidebar } from "./SideBarMenu";
import { BREAK_ONLY_MOBILE } from "@configs";
import { theme } from "@styles";

interface IStyledHeader {
    backgroundColor?: string;
}

export const Header = () => {
    // component state
    const [backgroundColor, setBackgroundColor] = useState<string>("transparent");
    // WHAT: change backgroundColor Header when scroll
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setBackgroundColor(`${theme.colors.gray1}`);
        } else {
            setBackgroundColor("transparent");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return (
        <StyledHeader backgroundColor={backgroundColor}>
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
const StyledHeader = styled.div<IStyledHeader>`
    position: relative;
    padding: 0 16.5rem;
    position: fixed;
    z-index: 999;
    width: 100%;
    padding-top: 2rem;
    background-color: ${(p) => p.backgroundColor};
    opacity: 0.8;
    @media (max-width: ${BREAK_ONLY_MOBILE}) {
        padding: 0 2rem;
    }
`;
