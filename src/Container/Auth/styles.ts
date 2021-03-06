import styled from "styled-components";

export const StyledContentAuth = styled.div`
    .withOutBG {
        color: ${(p) => p.theme.colors.orange} !important;
        background-color: ${(p) => p.theme.colors.pureWhite};
        border: 1px solid ${(p) => p.theme.colors.orange};
        transition: 250ms;
        text-transform: none;
        &:hover {
            background-color: ${(p) => p.theme.colors.orange};
            color: ${(p) => p.theme.colors.pureWhite} !important;
        }
    }

    .facebook {
        background-color: ${(p) => p.theme.colors.blue};
    }
    .success {
        color: #019267;
        font-size: 16px;
        padding-bottom: 1rem;
    }
    .wrapperAuth {
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: ${(p) => p.theme.colors.pureWhite};
    }
    .content {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 50%;
        min-width: 35rem;
        transform: translate(-50%, -50%);
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 100%;
            padding: 2rem;
        }
        &__title {
            font-size: 4.8rem;
            font-weight: 500;
            @media (min-width: 2000px) {
                font-size: 6.8rem;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 3.6rem;
            }
        }
        &__subTitle {
            font-size: 1.8rem;
            color: ${(p) => p.theme.colors.gray};
            @media (min-width: 2000px) {
                font-size: 5rem;
            }
        }
        &__form {
            padding-top: 6.5rem;
            padding-bottom: 2rem;
            width: 100%;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                padding-top: 2rem;
            }
            .MuiInputBase-input,
            .MuiInputLabel-formControl {
                @media (min-width: 2000px) {
                    font-size: 3.5rem;
                }
            }
            .MuiSvgIcon-root {
                @media (min-width: 2000px) {
                    font-size: 4rem;
                }
            }
            &-alert {
                font-size: 1.2rem;
                display: flex;
                margin-bottom: 1rem;
            }
            &-input {
                margin-bottom: 2.8rem;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    margin-bottom: 1.5rem;
                }
            }
            &-btn {
                color: ${(p) => p.theme.colors.pureWhite};
                width: 100%;
                padding: 1.7rem 0;
                font-size: 1.4rem;
                font-weight: ${(p) => p.theme.typography.fontWeightBold};
                text-transform: capitalize;
                border-radius: 0;
                box-shadow: none;
                margin-top: 3.2rem;
                @media (min-width: 2000px) {
                    padding: 2.7rem 0;
                    font-size: 2.5rem;
                }
            }
            .pl-1 {
                padding-left: 1rem;
            }
            &-forgot {
                display: flex;
                font-size: 1.4rem;
                justify-content: flex-end;
                margin-bottom: 3rem;
                @media (min-width: 2000px) {
                    font-size: 4rem;
                }
                @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                    margin-bottom: 1.5rem;
                }
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    margin-bottom: 0rem;
                }
                a {
                    text-decoration: none;
                    color: ${(p) => p.theme.colors.gray};
                }
            }
        }
        &__bottom {
            font-size: 1.6rem;
            @media (min-width: 2000px) {
                font-size: 4rem;
            }
            a {
                color: ${(p) => p.theme.colors.orange};
                font-weight: ${(p) => p.theme.typography.fontWeightBold};
                text-decoration: none;
            }
        }
    }
`;
