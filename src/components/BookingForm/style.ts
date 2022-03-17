import styled from "styled-components";

export const StyledBookingForm = styled.div`
    .wrapper {
        background-color: ${(p) => p.theme.colors.backgroundGray};
    }
    .showMoney {
        padding: 3rem;
        border-bottom: 1px solid ${(p) => p.theme.colors.gray2};
        font-size: ${(p) => p.theme.typography.fontSize}px;
        &__title {
            font-size: 2rem;
            color: ${(p) => p.theme.colors.gray};
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            padding-left: 0.8rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 1rem 3rem;
        }
    }
    .content {
        padding: 2.3rem 3rem 0 3rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            &__left,
            &__right {
                display: flex;
            }
        }
        &__title {
            display: flex;
            flex-direction: row;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                justify-content: space-between;
                padding-bottom: 1rem;
            }
        }
        &__left {
            padding-right: 6.4rem;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                padding-right: 0;
            }
        }
        &__text {
            color: ${(p) => p.theme.colors.gray1};
            font-weight: 400;
            font-size: ${(p) => p.theme.typography.fontSize}px;
        }
        &__sub {
            font-size: ${(p) => p.theme.typography.fontSize}px;
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        }
        &__addOn {
            padding-top: 1rem;
            padding-bottom: 1rem;
            font-weight: 700;
            font-size: 1.6rem;
            color: ${(p) => p.theme.colors.darkBlack};
        }
        &__option {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 1.8rem;
            font-size: 1.6rem;
            color: ${(p) => p.theme.colors.darkBlack};
            .MuiIconButton-root {
                padding: 0 1rem;
            }
            .MuiIconButton-label {
                color: ${(p) => p.theme.colors.darkBlack};
                background: #e4e4e4;
                padding: 0.5rem;
                border-radius: 100%;
            }
            &-title {
                flex: 5%;
                font-weight: 700;
            }
            &-price {
                color: #04316a;
                font-weight: 700;
                text-align: right;
                /* font-size: 1.6rem; */
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 1.2rem;
            }
        }
    }
    .total {
        padding: 0 3rem;
        display: flex;
        justify-content: space-between;
        font-size: 2rem;
        font-weight: 400;
    }
    .wrapperBtn {
        padding: 2rem 3rem 3rem 3rem;
        .btn {
            width: 100%;
            padding: 2.1rem;
            background-color: ${(p) => p.theme.colors.orange};
            color: ${(p) => p.theme.colors.pureWhite};
            border-color: transparent;
            cursor: pointer;
            &:hover {
                background-color: ${(p) => p.theme.colors.darkOrange};
            }
        }
    }
    .form__group {
        padding: 1.7rem 3rem 0 3rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 0 3rem;
        }
        &-input {
            margin-bottom: 2rem;
        }
    }
`;
