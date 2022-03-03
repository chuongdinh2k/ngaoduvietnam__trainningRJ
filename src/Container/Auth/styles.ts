import styled from "styled-components";

export const StyledContentAuth = styled.div`
    .wrapperAuth {
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: ${(p) => p.theme.colors.pureWhite};
    }
    .content {
        position: absolute;
        left: 50%;
        top: 40%;
        width: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 100%;
            padding: 2rem;
        }
        &__title {
            font-size: 5.8rem;
            font-weight: 500;
        }
        &__subTitle {
            font-size: 1.8rem;
            color: ${(p) => p.theme.colors.gray};
        }
        &__form {
            padding-top: 6.5rem;
            padding-bottom: 2rem;
            width: 100%;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                padding-top: 2rem;
            }
            &-input {
                margin-bottom: 2.8rem;
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
            }
            &-forgot {
                display: flex;
                font-size: 1.4rem;
                justify-content: flex-end;
                margin-bottom: 3rem;
                a {
                    text-decoration: none;
                    color: ${(p) => p.theme.colors.gray};
                }
            }
        }
        &__bottom {
            font-size: 1.6rem;
            a {
                color: ${(p) => p.theme.colors.orange};
                font-weight: ${(p) => p.theme.typography.fontWeightBold};
                text-decoration: none;
            }
        }
    }
`;
