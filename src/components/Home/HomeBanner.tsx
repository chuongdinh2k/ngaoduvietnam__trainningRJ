import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { BACKGROUND_WRAPHEADER, PAGE_HOME } from "@configs";
import { StyledWrapBanner, StyledBanner, IconDot } from "..";
import { HomeTabsButtonComponent } from ".";

interface banner {
    title?: string;
    subTitle?: string;
    formTitle?: string;
}

interface IProps {
    banner: banner;
}

export const HomeBanner = (props: IProps) => {
    const { banner } = props;
    return (
        <StyledWrapBanner background_banner={BACKGROUND_WRAPHEADER} typeComponent={PAGE_HOME}>
            <div className="wrapContainer">
                <StyledBanner typeComponent={PAGE_HOME}>
                    <div className="content">
                        <p className="content__subTitle">{banner?.subTitle}</p>
                        <h3 className="content__title">{banner?.title}</h3>
                    </div>
                </StyledBanner>
                <div className="featured">
                    <div>
                        <IconDot />
                        <span className="featured__title">Featured</span>
                    </div>
                    <StyledFeaturedContent>
                        <Grid container spacing={2}>
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
                    <HomeTabsButtonComponent show formTitle={banner.formTitle} inputTypeOfTour />
                </div>
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
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            font-size: 1.2rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.2rem;
        }
    }
    .featured__number {
        font-size: 2rem;
        padding-right: 0.2rem;
        color: ${(p) => p.theme.colors.darkBlack};
        font-weight: bold;
        line-height: 100%;
        @media (min-width: 2000px) {
            padding-right: 2rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            font-size: 1.4rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.4rem;
        }
    }
`;
