import styled from "styled-components";

export const StyledCard = styled.div`
    /* width: 25.5rem; */
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        width: 100%;
    }
    .imageWrapper {
        width: 100%;
        height: 29.1em;
    }
    .image {
        width: 100%;
        height: 100%;
    }
    h4 {
        color: ${(p) => p.theme.colors.darkBlack};
        font-size: 2rem;
        font-family: ${(p) => p.theme.typography.fontFamily};
        margin-block-end: 0;
    }
    .subTitle {
        font-size: ${(p) => p.theme.typography.fontSize}px;
        font-family: ${(p) => p.theme.typography.fontFamily};
        font-weight: 400;
    }
`;
export const StyledCardWithIcon = styled.div`
    .imageWrapper {
        width: 100%;
        height: 24.9rem;
        position: relative;
    }
    .iconFlag {
        position: absolute;
        top: 0;
        right: 3rem;
    }
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
    }
    h4 {
        font-size: 1.8rem;
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        margin-block-start: 0.9rem;
        margin-block-end: 1rem;
    }
    .bottom {
        justify-content: space-between;
    }
    .money {
        font-size: ${(p) => p.theme.typography.fontSize}px;
        line-height: 2;
    }
    .money__value {
        font-size: 2rem;
        padding-left: 0.8rem;
        font-family: ${(p) => p.theme.typography.fontFamily};
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        color: ${(p) => p.theme.colors.darkBlack};
    }
`;
