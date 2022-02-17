import styled from "styled-components";

interface IStyledBanner {
    typeComponent?: string;
}
export const StyledBanner = styled.div<IStyledBanner>`
    padding-top: ${(p) => {
        if (p.typeComponent === "home") {
            return "24rem";
        } else if (p.typeComponent === "about") {
            return "20rem";
        } else if (p.typeComponent === "listTour") {
            return "20rem";
        }
    }};
    width: ${(p) => {
        if (p.typeComponent === "home" || p.typeComponent === "listTour") {
            return "40%";
        } else if (p.typeComponent === "about") {
            return "100%";
        }
    }};
    text-align: ${(p) => {
        if (p.typeComponent === "home") {
            return "left";
        } else if (p.typeComponent === "about") {
            return "center";
        }
    }};
    .content {
        &__subTitle {
            color: ${(p) => p.theme.colors.lightPink};
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
            font-size: 16px;
            font-family: ${(p) => p.theme.typography.fontFamily};
        }
        &__title {
            margin-block-start: 0;
            font-size: 6rem;
            line-height: 100%;
            color: ${(p) => p.theme.colors.pureWhite};
            font-family: ${(p) => p.theme.typography.fontFamily};
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                font-size: 4rem;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 3rem;
            }
        }
    }

    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        width: 100%;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding-top: 10rem;
    }
`;
