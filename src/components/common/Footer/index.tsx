import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { StyledFooter } from "./styles";
import logo from "@assets/logo.png";
import { IconFacebook, IconTwitter, IconInstagram, IconLocation, IconLetter } from "@components";
import { appRoutesEnum } from "@enums";

interface INav {
    title?: string;
    route?: string;
}
interface IData {
    nav?: Array<INav>;
    policy?: Array<string>;
}

const fakeDataNav: IData = {
    nav: [
        { title: "Home", route: appRoutesEnum.HOME },
        { title: "About", route: appRoutesEnum.ABOUT },
        { title: "Tours", route: appRoutesEnum.TOURS },
        { title: "Hotels", route: appRoutesEnum.HOTELS },
        { title: "Contact", route: appRoutesEnum.CONTACT },
    ],
    policy: ["Partner with us", "Term & Conditions", "Privacy Policy", "Guest Policy"],
};

export const Footer = () => {
    const history = useHistory();
    return (
        <div style={{ backgroundColor: "#000000" }}>
            <div className="wrapperFooter">
                <StyledFooter>
                    <div className="wrapper">
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
                                                {fakeDataNav.nav
                                                    ? fakeDataNav.nav.map(
                                                          (item: INav, index: number) => (
                                                              <li
                                                                  key={index}
                                                                  className="text__nav-item"
                                                              >
                                                                  <a
                                                                      onClick={() =>
                                                                          history.push(
                                                                              item.route as string
                                                                          )
                                                                      }
                                                                  >
                                                                      {item?.title}
                                                                  </a>
                                                              </li>
                                                          )
                                                      )
                                                    : ""}
                                            </ul>
                                        </Grid>
                                        <Grid md={4} xs={12}>
                                            <ul className="text__nav">
                                                {fakeDataNav.policy
                                                    ? fakeDataNav.policy.map(
                                                          (item: string, index: number) => (
                                                              <li
                                                                  key={index}
                                                                  className="text__nav-item"
                                                              >
                                                                  <a>{item}</a>
                                                              </li>
                                                          )
                                                      )
                                                    : ""}
                                            </ul>
                                        </Grid>
                                        <Grid md={5} xs={12}>
                                            <div className="text_address">
                                                <span className="text_address-icon">
                                                    <IconLocation
                                                        color="white"
                                                        width="18px"
                                                        height="20px"
                                                    />
                                                </span>
                                                <p className="text_address-sub">
                                                    Lilama 10 Tower, 56 To Huu, Trung Van, Nam Tu
                                                    Liem, Ha Noi
                                                </p>
                                            </div>
                                            <div className="text_address">
                                                <span className="text_address-icon">
                                                    <IconLetter />
                                                </span>
                                                <p className="text_address-sub">
                                                    hello@adamotravel.com
                                                </p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </StyledFooter>
                <StyledCoppyRight>
                    <p>Copyright © We.travel. All rights reserved</p>
                </StyledCoppyRight>
            </div>
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
