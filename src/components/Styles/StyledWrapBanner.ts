import styled from "styled-components";

import background from "@assets/banner.png";
import { PAGE_HOME, BREAK_ONLY_MOBILE, PAGE_ABOUT } from "@configs";

interface IWrapHeader {
    background_banner?: string;
    hidden?: boolean;
    typeComponent?: string;
}
export const StyledWrapBanner = styled.div<IWrapHeader>`
    position: relative;
    height: ${(p) =>
        p.typeComponent === PAGE_HOME
            ? "76.6rem"
            : p.typeComponent === PAGE_ABOUT
            ? "40rem"
            : "66.6rem"};
    padding: 0 16.5rem;
    width: 100%;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    font-family: ${(p) => p.theme.typography.fontFamily};
    .featured {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 83rem;
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
        right: 16.5rem;
        width: 44.5rem;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.704) 1.52%,
            rgba(255, 255, 255, 0.64) 100%
        );
        backdrop-filter: blur(42px);
    }
    @media (max-width: 992px) {
        height: ${(p) =>
            p.typeComponent === PAGE_HOME
                ? "60rem"
                : p.typeComponent === PAGE_ABOUT
                ? "20rem"
                : "60rem"};
        padding: 0 8rem;
        .featured {
            width: 60rem;
            padding: 2.6rem 8rem 0 8rem;
        }
        .filter {
            width: 45%;
            right: 8rem;
        }
    }
    @media (max-width: ${BREAK_ONLY_MOBILE}) {
        padding: 0 2rem;
        height: ${(p) =>
            p.typeComponent === PAGE_HOME
                ? "87.6rem"
                : p.typeComponent === PAGE_ABOUT
                ? "20rem"
                : "60rem"};
        .featured {
            top: 30%;
            left: 2rem;
            right: 2rem;
            width: 90%;
            height: 6.9rem;
            padding: 2rem;
        }

        .filter {
            left: 2rem;
            right: 2rem;
            width: 90%;
            bottom: 1rem;
        }
    }
`;
