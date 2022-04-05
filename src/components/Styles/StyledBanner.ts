import { PAGE_ABOUT, PAGE_CONTACT, PAGE_HOME } from "@configs";
import styled from "styled-components";

interface IStyledBanner {
    typeComponent?: string;
}

export const StyledBanner = styled.div<IStyledBanner>`
    padding-top: 8rem;
    height: 100%;
    .wrapperBanner {
        height: 100%;
        position: relative;
    }
    .content {
        position: absolute;
        display: flex;
        flex-direction: row;
        width: ${(p) => {
            if (p.typeComponent === PAGE_CONTACT || p.typeComponent === PAGE_ABOUT) {
                return "40%";
            } else {
                return "100%";
            }
        }};
        bottom: ${(p) => {
            if (p.typeComponent === PAGE_CONTACT) {
                return "40%";
            } else {
                return "0";
            }
        }};
        left: ${(p) => {
            if (p.typeComponent === PAGE_CONTACT) {
                return "40%";
            } else {
                return "0";
            }
        }};
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            flex-direction: column;
            left: ${(p) => {
                if (p.typeComponent === PAGE_CONTACT) {
                    return "40%";
                } else {
                    return "0";
                }
            }};
        }
        &__left {
            display: flex;
            width: 65%;
            flex-direction: column;
            justify-content: space-between;
            @media (min-width: 2000px) {
                width: 70%;
            }
            @media (min-width: 3500px) {
                width: 80%;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                width: 60%;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                width: 100%;
            }
            &-top {
                padding-right: 6rem;
                @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                    padding-right: 4rem;
                }
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    padding-bottom: 2rem;
                }
                @keyframes moveInleft {
                    0% {
                        opacity: 0;
                        transform: translateX(-100px);
                        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                            transform: translateX(-50px);
                        }
                    }

                    80% {
                        transform: translateX(10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translate(0);
                    }
                }
                @keyframes moveInRight {
                    0% {
                        opacity: 0;
                        transform: translateX(100px);
                    }

                    80% {
                        transform: translateX(-10px);
                    }

                    100% {
                        opacity: 1;
                        transform: translate(0);
                    }
                }
            }
            &-bottom {
                position: relative;
                height: 10rem;
                max-height: 10rem;
                margin-left: -0.5rem;
                margin-bottom: -0.5rem;

                @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                    height: 6rem;
                }
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    margin-left: 0;
                    margin-bottom: 2rem;
                    display: ${(p) => {
                        if (p.typeComponent === PAGE_HOME) {
                            return "block";
                        } else {
                            return "none";
                        }
                    }};
                }
                &:after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: -100%;
                    background-color: white;
                    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                        background-color: white;
                    }
                    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                        background-color: transparent;
                    }
                }
                .featured {
                    width: 100%;
                    height: 100%;
                    margin-left: -0.2rem;
                    background-color: ${(p) => p.theme.colors.pureWhite};
                    padding-left: 0.2rem;
                    padding-top: 2.5rem;
                    @media (min-width: 2000px) {
                        svg {
                            width: 2rem !important;
                            height: 2rem !important;
                        }
                    }
                    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                        padding-top: 1rem;
                    }
                    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                        padding: 0.5rem 1rem;
                    }
                    &__top {
                        display: flex;
                    }
                    &__title {
                        font-size: ${(p) => p.theme.typography.fontSize}px;
                        font-weight: 600;
                        color: ${(p) => p.theme.colors.darkBlack};
                        padding-left: 1rem;
                        @media (min-width: 2000px) {
                            font-size: 2.5rem;
                        }
                    }
                    &__content {
                        display: flex;
                    }
                    &__wrapper {
                        display: flex;
                        width: 33.33%;
                        padding-top: 1rem;
                        font-size: 1.6rem;
                        font-family: ${(p) => p.theme.typography.fontFamily};
                        @media (min-width: 2000px) {
                            font-size: 2rem;
                        }
                        @media (min-width: 3500px) {
                            font-size: 2.5rem;
                        }
                        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                            font-size: 1.2rem;
                        }
                        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                            font-size: 1.2rem;
                        }
                    }
                    &__number {
                        font-size: 2rem;
                        padding-right: 0.2rem;
                        color: ${(p) => p.theme.colors.darkBlack};
                        font-weight: bold;
                        line-height: 100%;
                        @media (min-width: 2000px) {
                            padding-right: 2rem;
                        }
                        @media (min-width: 3500px) {
                            font-size: 3.2rem;
                        }
                        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                            font-size: 1.4rem;
                        }
                        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
        &__subTitle {
            color: ${(p) => p.theme.colors.lightPink};
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
            font-size: 16px;
            font-family: ${(p) => p.theme.typography.fontFamily};
            /*  Animation decalaration   */
            animation-name: moveInleft;
            animation-duration: 3s;
            @media (min-width: 2000px) {
                font-size: 3rem;
            }
        }
        &__title {
            margin-block-start: 0;
            font-size: 5rem;
            line-height: 100%;
            color: ${(p) => p.theme.colors.pureWhite};
            font-family: ${(p) => p.theme.typography.fontFamily};
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            /*  Animation decalaration   */
            animation-name: moveInRight;
            animation-duration: 3s;
            @media (min-width: 2000px) {
                font-size: 6rem;
            }
            @media (min-width: 3500px) {
                font-size: 10rem;
                width: 70%;
                text-align: ${(p) => {
                    if (p.typeComponent === PAGE_CONTACT || p.typeComponent === PAGE_ABOUT) {
                        return "center";
                    } else {
                        return "left";
                    }
                }};
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                font-size: 3rem;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 1.8rem;
            }
        }
        &__right {
            width: 35%;
            margin-left: -0.5rem;
            margin-bottom: -0.1rem;
            @media (min-width: 2000px) {
                width: 30%;
            }
            @media (min-width: 3500px) {
                width: 20%;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                width: 40%;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                width: 100%;
                margin-left: -0.2rem;
                margin-bottom: 1rem;
            }

            .filter__hotel {
                background: linear-gradient(
                    0deg,
                    rgba(255, 255, 255, 0.704) 1.52%,
                    rgba(255, 255, 255, 0.64) 100%
                );
                backdrop-filter: blur(42px);
            }
        }
    }
`;
