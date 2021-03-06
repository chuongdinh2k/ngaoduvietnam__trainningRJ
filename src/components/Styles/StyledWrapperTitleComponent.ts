import styled from "styled-components";

export const StyledWrapperTitleComponent = styled.div`
    .wrapper {
        width: 100%;
        padding-bottom: 2rem;
    }
    .top {
        display: flex;
        justify-content: space-between;
        padding: 6rem 0;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding: 2rem 0;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 2rem 0;
        }
        &__filter {
            display: flex;
            &-text {
                margin-top: 1rem;
                font-weight: ${(p) => p.theme.typography.fontWeightBold};
                font-size: 1.8rem;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    margin-top: 0;
                }
            }
            &-highlight {
                color: ${(p) => p.theme.colors.orange};
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    font-size: 1.6rem;
                }
            }
            &-icon {
                margin-top: 1.5rem;
                padding-left: 1.7rem;
                padding-right: 2.5rem;
                cursor: pointer;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    margin-top: 0.5rem;
                }
            }
        }
    }
    /*-- css for home discovery component */
    .home__discover {
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-top: 35rem;
            padding-bottom: 2rem;
        }
        @media (max-width: 320px) {
            padding-top: 41rem;
        }
    }
    /* -- */
    h3 {
        line-height: 1;
        font-size: 4rem;
        margin-block-start: 0;
        margin-block-end: 0;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            font-size: 3rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.6rem;
        }
    }
    .activeBtn {
        font-weight: 700;
        background-color: ${(p) => p.theme.colors.pureWhite} !important;
        color: ${(p) => p.theme.colors.darkBlack} !important;
    }
    .btn {
        /* width: 9.2rem; */
        height: 3.8rem;
        background-color: ${(p) => p.theme.colors.darkBlack};
        color: ${(p) => p.theme.colors.pureWhite};
        padding: 1rem 2rem;
        font-size: ${(p) => p.theme.typography.fontSize}px;
        text-transform: capitalize;
        font-weight: ${(p) => p.theme.typography.fontWeightBold};
        border: none;
        transition: 250ms;
        cursor: pointer;
        &:hover {
            color: ${(p) => p.theme.colors.orange};
            transform: translateX(-10px);
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 10px;
            /* margin-top: 2rem; */

            text-align: center;
            padding: 1.1rem 0.4rem;
            height: 3.5rem;
            width: 8rem;
        }
    }
    .btn-exper {
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 1.3rem 0.4rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        .wrapper {
            padding-top: 2rem;
        }
    }
`;
