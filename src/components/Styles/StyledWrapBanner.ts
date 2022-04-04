import styled from "styled-components";

import { PAGE_HOME, PAGE_ABOUT, PAGE_HOTELS, PAGE_CONTACT } from "@configs";

interface IWrapHeader {
    background_banner?: string;
    hidden?: boolean;
    typeComponent?: string;
}
export const StyledWrapBanner = styled.div<IWrapHeader>`
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
        position: relative;
    }
    @media (min-width: 2000px) {
        height: 50vh;
        padding: 2.6rem 16.5rem 0 16.5rem;
    }
    @media (min-width: 3500px) {
        height: 60vh;
    }
    @media (max-width: 992px) {
        height: ${(p) =>
            p.typeComponent === PAGE_HOME
                ? "48rem"
                : p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT
                ? "20rem"
                : "42rem"};
        padding: 0 8rem;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding: 0 2rem;
        height: ${(p) => {
            if (p.typeComponent === PAGE_ABOUT || p.typeComponent === PAGE_CONTACT) {
                return "20rem";
            } else if (p.typeComponent === PAGE_HOME) {
                return "64rem";
            } else {
                return "54rem";
            }
        }};
    }
`;
