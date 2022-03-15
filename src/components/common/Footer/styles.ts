import styled from "styled-components";

import { DEFAULT_SCREEN } from "@configs";

export const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 5rem 16.5rem 6rem 16.5rem;
    padding-top: 5rem;
    color: ${(p) => p.theme.colors.pureWhite};
    background-color: ${(p) => p.theme.colors.darkBlack};
    .wrapper {
        width: 100%;
        max-width: ${DEFAULT_SCREEN};
    }
    .logo {
        @media (max-width: ${(p) => p.theme.breakpoints.values.md}px) {
            display: flex;
            justify-content: space-between;
        }
    }
    .socialMedia {
        padding-top: 5.3rem;
    }
    .socialMedia__item {
        padding-right: 3.5rem;
        &:hover {
            cursor: pointer;
            margin-bottom: 5rem;
        }
    }
    .text {
        padding-top: 4rem;
    }
    .text__nav {
        padding: 0;
        margin: 0;
        @media (max-width: ${(p) => p.theme.breakpoints.values.md}px) {
            display: flex;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            display: flex;
            flex-direction: row;
        }
    }
    .text__nav-item {
        list-style: none;
        padding-bottom: 2.9rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.md}px) {
            padding-right: 4rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            display: flex;
            padding-right: 2rem;
        }
    }
    .text__nav-item a {
        font-size: ${(p) => p.theme.typography.fontSize}px;
        cursor: pointer;
        &:hover {
            color: ${(p) => p.theme.colors.orange};
        }
    }
    .text_address {
        display: flex;
        margin-bottom: 2.4rem;
    }
    .text_address-icon {
        margin-right: 2rem;
    }

    .text_address-sub {
        margin-block-start: 0;
        font-size: ${(p) => p.theme.typography.fontSize}px;
    }
    /* @media (min-width: 1680px) {
        padding: 0 135rem;
    } */
    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        padding: 0 8rem;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding: 0 2rem;
        margin-top: 2rem;
    }
`;
