import React from "react";

import { BACKGROUND_WRAPHEADER, BREAK_ONLY_MOBILE } from "@configs";
import { StyledWrapBanner, StyledBanner } from "@components";
import styled from "styled-components";
import { Dot } from "@components";
import { Grid } from "@material-ui/core";

import { HomeTabsButton } from "./HomeTabsButton";

export const HomeBanner = () => {
    return (
        <StyledWrapBanner background_banner={BACKGROUND_WRAPHEADER} height="76.6rem">
            <StyledBanner width="50%" paddingTop="24.4rem">
                <p className="subTitle">Welcome to NgaoduVietNam</p>
                <h3 className="title">
                    Perfect place <br /> for your stories
                </h3>
            </StyledBanner>
            <div className="featured">
                <div>
                    <Dot />
                    <span className="featured__title">Featured</span>
                </div>
                <StyledFeaturedContent>
                    <Grid container spacing={4}>
                        <Grid item xs={4}>
                            <div className="featured__wrapper">
                                <span className="featured__number">200+</span>
                                tours
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="featured__wrapper">
                                <span className="featured__number">100+</span>
                                destination
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="featured__wrapper">
                                <span className="featured__number">8+</span>
                                type of tour
                            </div>
                        </Grid>
                    </Grid>
                </StyledFeaturedContent>
            </div>
            <div className="filter">
                <HomeTabsButton></HomeTabsButton>
            </div>
        </StyledWrapBanner>
    );
};
const StyledFeaturedContent = styled.div`
    display: flex;
    .featured__wrapper {
        display: flex;
        padding-top: 1rem;
        font-size: 1.6rem;
        font-family: ${(p) => p.theme.typography.fontFamily};
        @media (max-width: ${BREAK_ONLY_MOBILE}) {
            font-size: 1.2rem;
        }
    }
    .featured__number {
        font-size: 2rem;
        padding-right: 0.2rem;
        color: ${(p) => p.theme.colors.darkBlack};
        font-weight: bold;
        line-height: 100%;
        @media (max-width: ${BREAK_ONLY_MOBILE}) {
            font-size: 1.5rem;
        }
    }
`;
