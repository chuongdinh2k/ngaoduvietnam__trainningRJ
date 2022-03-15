import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { IconDoubleQuotationMarks } from "@components";

export const ComponentIntroduce = () => {
    return (
        <StyledComponentIntroduce>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div className="imageWrapper">
                        <img
                            className="image1"
                            src="https://res.cloudinary.com/chuongdinh/image/upload/v1644991995/bannerIntro_q98ln6.png"
                        />
                        <img
                            className="image2"
                            src="https://res.cloudinary.com/chuongdinh/image/upload/v1644991994/bannerIntro2_eqto6c.png"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="content__wrapper">
                        <h4 className="content__title">
                            With <span className="content__title-active">NgaoduVietnam</span>,
                            immerses you in majestic space and unique cultural features
                        </h4>
                        <div className="content__quote">
                            <span className="content__quote-icon">
                                <IconDoubleQuotationMarks />
                            </span>
                            <span>
                                <p className="content__quote-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                    viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
                                    feugiat nec consequat, montes. Elementum scelerisque phasellus
                                    donec lectus ullamcorper faucibus. Malesuada et adipiscing
                                    molestie egestas leo ut.
                                </p>
                                <p className="content__quote-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                    viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
                                    feugiat nec consequat, montes.
                                </p>
                            </span>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </StyledComponentIntroduce>
    );
};
const StyledComponentIntroduce = styled.div`
    padding: 21rem 0 23.2rem 0;
    .imageWrapper {
        position: relative;
    }
    .image1 {
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            width: 80%;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 80%;
            height: 20rem;
        }
    }
    .image2 {
        position: absolute;
        left: 19.3rem;
        top: 26.6rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            width: 70%;
            top: 20.6rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            left: 15rem;
            top: 6rem;
            width: 50%;
        }
    }
    .content__wrapper {
        padding-left: 3.2rem;
        font-size: 4rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding-top: 10rem;
            width: 90%;
            padding-left: 0;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            height: 20rem;
            font-size: 2rem;
            padding-top: 5rem;
            padding-left: 0;
        }
    }
    .content__title {
        line-height: 1;
        .content__title-active {
            color: ${(p) => p.theme.colors.orange};
        }
    }

    .content__quote {
        display: flex;
        padding-top: 4.8rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-top: 1rem;
        }
    }
    .content__quote-text {
        padding-left: 3.9rem;
        padding-bottom: 1.6rem;
        font-weight: 400;
        font-size: 1.6rem;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        padding: 4rem 0 4rem 0;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding: 4rem 0 4rem 0;
    }
`;
