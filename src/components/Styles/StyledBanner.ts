import styled from "styled-components";

import { BREAK_ONLY_MOBILE } from "@configs";

interface IStyledBanner {
    align?: string;
    width?: string;
    paddingTop?: string;
}
export const StyledBanner = styled.div<IStyledBanner>`
    padding-top: ${(p) => (p.paddingTop ? p.paddingTop : "18rem")};
    width: ${(p) => (p.width ? p.width : "100%")};
    text-align: ${(p) => (p.align ? p.align : "left")};
    .subTitle {
        color: ${(p) => p.theme.colors.lightPink};
        font-weight: ${(p) => p.theme.typography.fontWeightBold};
        font-size: 16px;
        font-family: ${(p) => p.theme.typography.fontFamily};
    }
    .title {
        margin-block-start: 0;
        font-size: 6rem;
        line-height: 100%;
        color: ${(p) => p.theme.colors.pureWhite};
        font-family: ${(p) => p.theme.typography.fontFamily};
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        @media (max-width: ${BREAK_ONLY_MOBILE}) {
            font-size: 3rem;
        }
    }
    @media (max-width: ${BREAK_ONLY_MOBILE}) {
        width: 100%;
        padding-top: 10rem;
    }
`;
