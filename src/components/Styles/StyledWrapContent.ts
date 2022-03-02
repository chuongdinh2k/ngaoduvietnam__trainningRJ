import styled from "styled-components";

import { HEADER_HEIGHT } from "@configs";

interface IStyledWrapContent {
    withOutBanner?: boolean;
}
export const StyledWrapContent = styled.div<IStyledWrapContent>`
    display: flex;
    justify-content: center;
    padding: 0 16.5rem;
    padding-top: ${(p) => (p.withOutBanner ? "17rem" : "0rem")};
    .wrapperContent {
        max-width: 1440px;
        width: 100%;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        padding: 0 8rem;
        padding-top: ${(p) => (p.withOutBanner ? HEADER_HEIGHT : "0rem")};
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding: 0 2rem;
        padding-top: ${(p) => (p.withOutBanner ? HEADER_HEIGHT : "0rem")};
    }
`;
