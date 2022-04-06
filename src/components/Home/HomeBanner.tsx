import React from "react";

import { BACKGROUND_WRAPHEADER, PAGE_HOME } from "@configs";
import { StyledWrapBanner, IconDot, StyledBanner } from "..";
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
                        <div className="content__left">
                            <div className="content__left-top">
                                <p className="content__subTitle">{banner?.subTitle}</p>
                                <h3 className="content__title">{banner?.title}</h3>
                            </div>
                            <div className="content__left-bottom">
                                <div className="featured">
                                    <div className="featured__top">
                                        <IconDot />
                                        <span className="featured__title">Featured</span>
                                    </div>
                                    <div className="featured__content">
                                        <div className="featured__wrapper">
                                            <span className="featured__number">200+</span>
                                            tours
                                        </div>
                                        <div className="featured__wrapper">
                                            <span className="featured__number">100+</span>
                                            destination
                                        </div>
                                        <div className="featured__wrapper">
                                            <span className="featured__number">8+</span>
                                            type of tour
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content__right">
                            <div className="filter__hotel">
                                <HomeTabsButtonComponent
                                    show
                                    formTitle={banner.formTitle}
                                    inputTypeOfTour
                                />
                            </div>
                        </div>
                    </div>
                </StyledBanner>
            </div>
        </StyledWrapBanner>
    );
};
