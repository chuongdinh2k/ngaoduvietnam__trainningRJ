import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

import { StyledFooter } from "./styles";
import logo from "@assets/logo.png";
import { IconFacebook, IconTwitter, IconInstagram, Location, Letter } from "@components";

export const Footer = () => {
    return (
        <div style={{ backgroundColor: "#000000" }}>
            <StyledFooter>
                <Grid container>
                    <Grid item md={5} xs={12}>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div className="socialMedia">
                                <span className="socialMedia__item">
                                    <IconFacebook />
                                </span>
                                <span className="socialMedia__item">
                                    <IconInstagram />
                                </span>
                                <span className="socialMedia__item">
                                    <IconTwitter />
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <div className="text">
                            <Grid container>
                                <Grid md={3} xs={12}>
                                    <ul className="text__nav">
                                        <li className="text__nav-item">
                                            <a>Home</a>
                                        </li>
                                        <li className="text__nav-item">
                                            <a>Abouts</a>
                                        </li>
                                        <li className="text__nav-item">
                                            <a>Tours</a>
                                        </li>
                                        <li className="text__nav-item">
                                            <a>Hotels</a>
                                        </li>
                                        <li className="text__nav-item">
                                            <a>Contact</a>
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid md={4} xs={12}>
                                    <ul className="text__nav">
                                        <li className="text__nav-item">
                                            <a>Partner with us</a>
                                        </li>
                                        <li className="text__nav-item">
                                            <a>Term &amp; Conditions </a>
                                        </li>
                                        <li className="text__nav-item">
                                            <a>Privacy Policy</a>
                                        </li>
                                        <li className="text__nav-item">
                                            <a>Guest Policy</a>
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid md={5} xs={12}>
                                    <div className="text_address">
                                        <span className="text_address-icon">
                                            <Location color="white" width="18px" height="20px" />
                                        </span>
                                        <p className="text_address-sub">
                                            Lilama 10 Tower, 56 To Huu, Trung Van, Nam Tu Liem, Ha
                                            Noi
                                        </p>
                                    </div>
                                    <div className="text_address">
                                        <span className="text_address-icon">
                                            <Letter />
                                        </span>
                                        <p className="text_address-sub">hello@adamotravel.com</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </StyledFooter>
            <StyledCoppyRight>
                <p>Copyright © We.travel. All rights reserved</p>
            </StyledCoppyRight>
        </div>
    );
};
const StyledCoppyRight = styled.div`
    width: 100%;
    height: 4.1rem;
    line-height: 200%;
    font-size: ${(p) => p.theme.typography.fontSize}px;
    color: ${(p) => p.theme.colors.pureWhite};
    text-align: center;
    background-color: #000000;
`;