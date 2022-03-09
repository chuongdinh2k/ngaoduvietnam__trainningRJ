import styled from "styled-components";

import {
    PAGE_HOME,
    PAGE_ABOUT,
    PAGE_LISTTOUR,
    PAGE_HOTELS,
    PAGE_CONTACT,
    DEFAULT_SCREEN,
} from "@configs";

interface IWrapHeader {
    background_banner?: string;
    hidden?: boolean;
    typeComponent?: string;
}
export const StyledWrapBanner = styled.div<IWrapHeader>`
    /* position: relative; */
    display: flex;
    justify-content: center;
    height: ${(p) =>
        p.typeComponent === PAGE_HOME || p.typeComponent === PAGE_HOTELS
            ? "76.6rem"
            : p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT
            ? "40rem"
            : "66.6rem"};
    padding: 0 16.5rem;
    width: 100%;
    background-image: url(${(p) => p.background_banner});
    background-position: center;
    background-size: cover;
    font-family: ${(p) => p.theme.typography.fontFamily};
    .wrapContainer {
        width: 100%;
        height: 100%;
        /* max-width: ${DEFAULT_SCREEN}; */
        position: relative;
    }
    .featured {
        position: absolute;
        left: -17rem;
        bottom: -0.5rem;
        width: 84rem;
        height: 9.9rem;
        padding: 2.6rem 16.5rem 0 16.5rem;
        background-color: ${(p) => p.theme.colors.pureWhite};
    }
    .featured__title {
        font-size: ${(p) => p.theme.typography.fontSize}px;
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        color: ${(p) => p.theme.colors.darkBlack};
        padding-left: 0.8rem;
    }
    .filter {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 44.5rem;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.704) 1.52%,
            rgba(255, 255, 255, 0.64) 100%
        );
        backdrop-filter: blur(42px);
    }
    @media (min-width: 2000px) {
        height: 60vh;
        padding: 2.6rem 16.5rem 0 16.5rem;
        .featured {
            left: 0;
            width: 40%;
            padding: 2.6rem 2rem 0 2rem;
            font-size: 2.2rem;
        }
        .filter {
            right: 0;
            width: 40%;
            .MuiTabs-flexContainer {
                justify-content: space-between;
            }
            .MuiTab-root {
                height: 10rem;
                font-size: 2.6rem;
                max-width: 50%;
            }
        }
    }
    @media (max-width: 992px) {
        height: ${(p) =>
            p.typeComponent === PAGE_HOME || p.typeComponent === PAGE_HOTELS
                ? "60rem"
                : p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT
                ? "20rem"
                : "60rem"};
        padding: 0 8rem;
        .featured {
            width: 54rem;
            padding: 2.6rem 2rem 0 16rem;
        }
        .filter {
            width: 45%;
        }
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding: 0 2rem;
        height: ${(p) =>
            p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT ? "20rem" : "62rem"};
        .featured {
            top: 30%;
            left: 2rem;
            right: 2rem;
            width: 90%;
            height: 6.9rem;
            padding: 2rem;
            display: none;
            /* display: ${(p) =>
                p.typeComponent === PAGE_LISTTOUR || p.typeComponent === PAGE_HOTELS
                    ? "none"
                    : ""}; */
        }

        .filter {
            left: 0;
            right: 0;
            width: 99%;
            bottom: 1rem;
        }
    }
`;
