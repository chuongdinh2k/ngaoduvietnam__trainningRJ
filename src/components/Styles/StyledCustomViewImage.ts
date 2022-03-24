import styled from "styled-components";

interface IStyledCustomViewImage {
    numberTour?: number;
    numberHotel?: number;
}
export const StyledCustomViewImage = styled.div<IStyledCustomViewImage>`
    .wrapper {
        width: 100%;
        position: relative;
        &__image {
            width: 100%;
            height: 54rem;
            position: relative;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                height: 25rem;
            }
            .icon {
                position: absolute;
                right: 2.5rem;
                top: 0;
                z-index: 99;
            }
            .image {
                height: 100%;
                width: 100%;
            }
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            width: 100%;
            margin-bottom: 10rem;
            // &__image {
            //     height:
            // }
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 100%;
            margin-bottom: 0;
        }
    }
    .slick-slide {
        img {
            width: 100%;
        }
    }
    .slick-prev:before,
    .slick-next:before {
        color: transparent;
    }
    .slick-prev {
        z-index: 99;
        left: 2rem;
        /* @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        } */
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            /* background: ${(p) => p.theme.colors.pureWhite} !important; */
            color: ${(p) => p.theme.colors.pureWhite} !important;
        }
    }
    .slick-prev,
    .slick-next {
        top: 50%;
    }
    .slick-next {
        right: 2rem;
        /* @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        } */
    }
    .slick-dots {
        text-align: left;
        width: 100%;
        overflow: hidden;
        bottom: -13rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            bottom: -11rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            bottom: -6rem;
        }
        li {
            width: 13.7rem;
            height: 9.7rem;
            margin: 0;
            margin-right: 2.9rem;
            .wrapDot {
                width: 100%;
                height: 100%;
                position: relative;
                &__icon {
                    position: absolute;
                    z-index: 99;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                &__number {
                    padding-left: 0.5rem;
                    font-size: 1.4rem;
                    font-weight: 700;
                    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                        padding-left: 0;
                    }
                }
                &__layer {
                    height: 100%;
                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: ${(p) => p.theme.colors.pureWhite};
                        opacity: 0.5;
                    }
                }
            }

            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                width: 13.9rem;
                margin-right: 1.5rem;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                width: 7.7rem;
                height: 4.7rem;
                margin-right: 0.9rem;
            }
        }
        .slick-active {
            .wrapDot {
                height: 100%;
                &__layer {
                    height: 100%;
                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: ${(p) => p.theme.colors.darkBlack};
                        opacity: 0 !important;
                    }
                }
                &__icon,
                &__number {
                    display: none;
                }
            }
        }
        .image__dot {
            width: 100%;
            height: 100%;
        }
        li:last-of-type {
            margin-right: 0;
        }
    }
`;
