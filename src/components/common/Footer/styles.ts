import { BREAK_ONLY_MOBILE } from "@configs";
import styled from "styled-components";

export const StyledFooter = styled.div`
    display: flex;
    /* height: 41.8rem; */
    /* padding: 0 16.5rem; */
    padding: 5rem 16.5rem 6rem 16.5rem;
    padding-top: 5rem;
    color: ${(p) => p.theme.colors.pureWhite};
    background-color: ${(p) => p.theme.colors.darkBlack};
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
        @media (max-width: ${BREAK_ONLY_MOBILE}) {
            flex-direction: row;
        }
    }
    .text__nav-item {
        list-style: none;
        padding-bottom: 2.9rem;
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
    @media (max-width: ${BREAK_ONLY_MOBILE}) {
        padding: 0 2rem;
    }
`;
