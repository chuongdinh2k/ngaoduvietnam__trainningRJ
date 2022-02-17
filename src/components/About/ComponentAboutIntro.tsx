import { Grid } from "@material-ui/core";
import styled from "styled-components";

export const ComponentAboutIntro = () => {
    return (
        <StyledComponentAboutIntroduce>
            <div className="intro">
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <div className="content__wrapper">
                            <h4 className="content__title">
                                With <span className="content__title-active">NgaoduVietnam</span>,
                                immerses you in majestic space and unique cultural features
                            </h4>
                            <div className="content__text-wrapper">
                                <p className="content__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                    viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
                                    feugiat nec consequat, montes. Elementum scelerisque phasellus
                                    donec lectus ullamcorper faucibus. Malesuada et adipiscing
                                    molestie egestas leo ut.
                                </p>
                                <p className="content__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                    viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
                                    feugiat nec consequat, montes.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="intro__imageWrapper">
                            <img
                                className="intro__image"
                                src="https://res.cloudinary.com/chuongdinh/image/upload/v1645000965/about1_hjckq6.png"
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <img
                className="bigImage"
                src="https://res.cloudinary.com/chuongdinh/image/upload/v1645002817/about2_ya92qu.png"
            />
            <div className="experience">
                <h3 className="experience__title">
                    Experience the traditional <br /> cultural beauties of Vietnam
                </h3>
                <div className="experience__text-top">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <p className="experience__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
                                feugiat nec consequat, montes. Elementum scelerisque phasellus donec
                                lectus ullamcorper faucibus. Malesuada et adipiscing molestie
                                egestas leo ut.
                            </p>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <p className="experience__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
                                feugiat nec consequat, montes. Elementum scelerisque phasellus donec
                                lectus ullamcorper faucibus.
                            </p>
                        </Grid>
                    </Grid>
                </div>
                <div className="experience__text-bottom">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <img
                                className="experience__image-left"
                                src="https://res.cloudinary.com/chuongdinh/image/upload/v1645003320/about3_xuacdd.png"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="experience__text-bottomRight">
                                <p className="content__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                                    viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
                                    feugiat nec consequat, montes. Elementum scelerisque phasellus
                                    donec lectus ullamcorper faucibus. Malesuada et adipiscing
                                    molestie egestas leo ut.
                                </p>
                                <img
                                    className="experience__image-right"
                                    src="https://res.cloudinary.com/chuongdinh/image/upload/v1645063929/about4_kwrzro.png"
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </StyledComponentAboutIntroduce>
    );
};

const StyledComponentAboutIntroduce = styled.div`
    padding-bottom: 15rem;
    .content__wrapper {
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
    }
    .content__title-active {
        color: ${(p) => p.theme.colors.orange};
    }
    .content__text {
        font-weight: 400;
        font-size: 1.6rem;
    }
    .intro__imageWrapper {
        height: 54rem;
        width: 100%;
        padding-left: 3rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-left: 0;
            padding-top: 30rem;
        }
    }
    .intro__image {
        width: 100%;
        height: 100%;
    }
    .bigImage {
        padding-top: 15rem;
        width: 100%;
        height: 46.3rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-top: 5rem;
            height: 20rem;
        }
    }
    .experience {
        &__title {
            padding-top: 6rem;
            padding-bottom: 4.8rem;
            font-size: 4rem;
            line-height: 1;
        }
        &__text-top {
            padding-bottom: 9.2rem;
        }
        &__text {
            font-size: ${(p) => p.theme.typography.fontSize}px;
        }
        &__image-left {
            width: 44.5rem;
        }
        &__image-right {
            padding-top: 4.8rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            &__title {
                font-size: 2rem;
                padding-bottom: 2rem;
            }
            &__text-top,
            &__text {
                padding-bottom: 2rem;
            }
            &__image-left {
                width: 100%;
            }
            &__image-right {
                width: 100%;
            }
        }
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding-top: 30rem;
        padding-bottom: 2rem;
    }
`;