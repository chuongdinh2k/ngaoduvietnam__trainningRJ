import styled from "styled-components";

export const StyledCard = styled.div`
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        width: 100%;
        padding: 0.5rem;
    }
    .imageWrapper {
        width: 100%;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            height: 19rem;
        }
        @media (max-width: 320px) {
            height: 15rem;
        }
    }
    .imageWrapper .image {
        &:hover {
            transform: scale(1);
        }
    }
    .image {
        width: 100%;
        height: 100%;
        transition: 250ms;
    }
    h4 {
        padding-top: 1rem;
        color: ${(p) => p.theme.colors.darkBlack};
        font-size: 2rem;
        font-family: ${(p) => p.theme.typography.fontFamily};
        margin-block-end: 0;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            font-size: 1.4rem;
        }
    }
    .subTitle {
        font-size: ${(p) => p.theme.typography.fontSize}px;
        font-family: ${(p) => p.theme.typography.fontFamily};
        font-weight: 400;
    }
`;
export const StyledCardWithIcon = styled.div`
    .cardWrapper {
        width: 100%;
        margin-right: 3rem;
        transition: 250ms;
        &:hover {
            cursor: pointer;
            transform: translateY(-10px);
        }
        @media (min-width: 2000px) {
            padding: 0 1rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding: 0;
            margin-right: 0;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 0 2rem;
            margin-right: 0;
        }
    }
    .cardWrapper:nth-child(1) {
        @media (min-width: 2000px) {
            padding-left: 0;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-left: 0;
        }
    }
    .imageWrapper {
        width: 100%;
        height: 24.9rem;
        overflow: hidden;
        position: relative;
        @media (min-width: 2000px) {
            height: 31rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            height: 19rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            height: 21rem;
        }
        @media (max-width: 320px) {
            height: 15rem;
        }
    }
    .image {
        transition: 250ms;
    }
    .iconFlag {
        position: absolute;
        top: 0;
        right: 3rem;
    }
    /* style for hotel card */
    .renderStars {
        position: absolute;
        bottom: 1.9rem;
        left: 1.8rem;
        .MuiRating-icon {
            margin-right: 0.5rem;
        }
    }
    .rating {
        margin-top: 1rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            margin-top: 0.5rem;
        }
        &__point {
            padding: 0.4rem 0.8rem;
            margin-right: 0.5rem;
            font-size: 1.2rem;
            background-color: ${(p) => p.theme.colors.orange};
            color: ${(p) => p.theme.colors.pureWhite};
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &__text {
            font-size: 1.4rem;
        }
    }
    /*  */
    .starWrapper {
        position: absolute;
        bottom: 1.9rem;
        padding: 0.7rem 1.1rem;
        background-color: ${(p) => p.theme.colors.orange};
    }
    .starWrapper__title {
        font-family: ${(p) => p.theme.typography.fontFamily};
        color: ${(p) => p.theme.colors.pureWhite};
        font-size: ${(p) => p.theme.typography.fontSize}px;
        padding-left: 0.3rem;
    }
    .image {
        width: 100%;
        height: 100%;
    }
    .location,
    .time,
    .bottom {
        display: flex;
    }
    .time {
        padding-top: 0.5rem;
    }
    .location {
        padding-top: 1.9rem;
    }
    .location__text,
    .time__text {
        padding-left: 1.4rem;
        line-height: 1.5;
        color: ${(p) => p.theme.colors.gray1};
        font-size: ${(p) => p.theme.typography.fontSize}px;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.2rem;
        }
    }
    h4 {
        font-size: 1.8rem;
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        margin-block-start: 0.9rem;
        margin-block-end: 1rem;
        height: 5rem;
        max-height: 5rem;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        @media (min-width: 2000px) {
            height: 5rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.6rem;
            height: 4rem;
            width: 100%;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.4rem;
            height: 2rem;
            width: 100%;
        }
        @media (max-width: 320px) {
            height: 2rem;
        }
    }
    .bottom {
        justify-content: space-between;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            flex-direction: column;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            flex-direction: row;
        }
        @media (max-width: 320px) {
            flex-direction: column;
        }
    }
    .money {
        font-size: ${(p) => p.theme.typography.fontSize}px;
        line-height: 2;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding-top: 1rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-top: 0;
        }
    }
    .money__value {
        font-size: 2rem;
        padding-left: 0.8rem;
        font-family: ${(p) => p.theme.typography.fontFamily};
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        color: ${(p) => p.theme.colors.darkBlack};
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.4rem;
        }
    }
`;
