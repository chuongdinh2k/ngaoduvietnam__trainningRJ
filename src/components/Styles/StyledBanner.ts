import { PAGE_ABOUT, PAGE_CONTACT, PAGE_HOME, PAGE_HOTELS, PAGE_LISTTOUR } from "@configs";
import styled from "styled-components";

interface IStyledBanner {
    typeComponent?: string;
}
export const StyledBanner = styled.div<IStyledBanner>`
    padding-top: ${(p) => {
        if (p.typeComponent === PAGE_HOME || p.typeComponent === PAGE_HOTELS) {
            return "24rem";
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
        } else if (p.typeComponent === PAGE_ABOUT) {
            return "center";
        }
    }};
    .content {
        max-width: 1440px;
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

            @media (max-width: ${(p) => p.theme.breakpoints.values.md}px) {
                font-size: 4rem;
                width: 50%;
            }

            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                font-size: 3rem;
                width: 50%;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 3rem;
                width: 100%;
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
