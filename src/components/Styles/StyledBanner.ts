import {
    PAGE_ABOUT,
    PAGE_CONTACT,
    PAGE_HOME,
    PAGE_HOTELS,
    PAGE_LISTTOUR,
    // DEFAULT_SCREEN,
} from "@configs";
import styled from "styled-components";

interface IStyledBanner {
    typeComponent?: string;
}
export const StyledBanner = styled.div<IStyledBanner>`
    padding-top: ${(p) => {
        if (p.typeComponent === PAGE_HOME || p.typeComponent === PAGE_HOTELS) {
            return "27rem";
        } else if (
            p.typeComponent === PAGE_ABOUT ||
            p.typeComponent === PAGE_LISTTOUR ||
            p.typeComponent === PAGE_CONTACT
        ) {
            return "20rem";
        }
    }};
    width: ${(p) => {
        if (p.typeComponent === PAGE_HOME || p.typeComponent === PAGE_LISTTOUR) {
            return "40%";
        } else if (p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT) {
            return "100%";
        } else if (p.typeComponent === PAGE_HOTELS) {
            return "50%";
        }
    }};
    text-align: ${(p) => {
        if (p.typeComponent === PAGE_HOME) {
            return "left";
        } else if (p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT) {
            return "center";
        }
    }};

    .content {
        &__subTitle {
            color: ${(p) => p.theme.colors.lightPink};
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
            font-size: 16px;
            font-family: ${(p) => p.theme.typography.fontFamily};
            /*  Animation decalaration   */
            animation-name: moveInleft;
            animation-duration: 3s;
            @media (min-width: 2000px) {
                font-size: 5rem;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                width: 100%;
            }
        }
        &__title {
            margin-block-start: 0;
            font-size: 6rem;
            line-height: 100%;
            color: ${(p) => p.theme.colors.pureWhite};
            font-family: ${(p) => p.theme.typography.fontFamily};
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            /*  Animation decalaration   */
            animation-name: moveInRight;
            animation-duration: 3s;
            @media (min-width: 2000px) {
                font-size: 8rem;
            }
            @media (min-width: 3500px) {
                font-size: 10rem;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.md}px) {
                font-size: 4rem;
                width: 50%;
            }

            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                font-size: 3rem;
                width: ${(p) =>
                    p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT
                        ? `100%`
                        : `50%`};
                text-align: ${(p) =>
                    p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT
                        ? `center`
                        : `left`};
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 3rem;
                width: 100%;
                text-align: ${(p) =>
                    p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT
                        ? `center`
                        : `left`};
            }
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
    @media (min-width: 2000px) {
        padding-top: ${(p) =>
            p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT ? `50rem` : `35rem`};
        width: ${(p) =>
            p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT ? `100%` : `50%`};
        text-align: ${(p) =>
            p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT ? `center` : `left`};
    }
    @media (min-width: 3500px) {
        padding-top: ${(p) =>
            p.typeComponent === PAGE_ABOUT ||
            p.typeComponent === PAGE_CONTACT ||
            p.typeComponent === PAGE_HOTELS
                ? `50rem`
                : `35rem`};
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        width: 100%;
        padding-top: ${(p) => {
            if (p.typeComponent === PAGE_HOTELS) {
                return "20rem";
            } else if (p.typeComponent === PAGE_HOME) {
                return "13rem";
            } else if (p.typeComponent === PAGE_LISTTOUR) {
                return "18rem";
            } else if (p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT) {
                return "11rem";
            }
        }};
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding-top: 10rem;
    }
`;
