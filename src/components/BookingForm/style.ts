import styled from "styled-components";

export const StyledBookingForm = styled.div`
    .wrapper {
        background-color: ${(p) => p.theme.colors.backgroundGray};
        padding: 2rem 2.5rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding: 0 3rem;
            margin: 0 12rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            margin: 0;
        }
    }
    .showMoney {
        padding: 2rem 0;
        border-bottom: 1px solid ${(p) => p.theme.colors.gray2};
        font-size: ${(p) => p.theme.typography.fontSize}px;
        &__title {
            font-size: 2rem;
            color: ${(p) => p.theme.colors.gray};
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            padding-left: 0.8rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 1rem 0;
        }
    }
    .content {
        padding-top: 2.3rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding-top: 0;
            padding-bottom: 0;
        }
        &__title {
            display: flex;
            flex-direction: row;
            padding-bottom: 0.5rem;
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
            padding-top: 2rem;
            padding-bottom: 2rem;
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
                color: #ff7b42 !important;
            }
            .MuiIconButton-label {
                color: ${(p) => p.theme.colors.darkBlack};
                background: #e4e4e4;
                padding: 0.5rem;
                border-radius: 100%;
            }
            .MuiCheckbox-colorSecondary.Mui-checked {
                color: red !important;
            }
            .MuiCheckbox-root {
                padding-left: 0;
                .MuiSvgIcon-root {
                    font-size: 2rem;
                }
                .MuiIconButton-label {
                    background: transparent !important;
                    padding: 0;
                }
            }
            &-title {
                flex: 5%;
                font-weight: 700;
                width: 45%;
                padding-top: 0.5rem;
            }
            &-price {
                color: #04316a;
                font-weight: 700;
                text-align: right;
                width: 25%;
                padding-top: 0.5rem;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 1.4rem;
            }
        }
    }
    .total {
        padding: 0 0 1.6rem 0;
        display: flex;
        justify-content: space-between;
        font-size: 2rem;
        font-weight: 700;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-bottom: 0;
        }
    }
    .wrapperBtn {
        padding: 1.2rem 0 1.6rem 0;
        .btn {
            width: 100%;
            padding: 2.1rem;
            font-weight: 700;
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
        padding: 1.2rem 0 1.6rem 0;
        &-select {
            .MuiInputBase-input {
                padding: 11px 0 7px;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    padding: 8px 0 7px;
                }
            }
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 0;
        }
        &-input {
            margin-bottom: 2rem;
        }
    }
`;
