import styled from "styled-components";

export const StyledComponentCheckOutContent = styled.div`
    .wrapper {
        padding-top: 6.6rem;
        .MuiFormControl-root {
            padding-left: 0;
        }
    }
    h3 {
        font-size: 3.6rem;
        font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        padding-bottom: 1.4rem;
    }
    .inforForm {
        padding-top: 2rem;
        &__title {
            font-size: 2.4rem;
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
        }

        &__text {
            font-size: 1.6rem;
            color: #5e6d77;
        }
        &__subTitle {
            padding-top: 1.2rem;
            font-size: 2rem;
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            padding-bottom: 1rem;
        }
        &__wrapperInput {
            .label {
                font-size: 1.6rem;
                padding-bottom: 0.7rem;
            }
        }
        .MuiInputBase-inputMultiline {
            font-size: 1.6rem;
        }
    }
    .btn {
        margin-top: 3.8rem;
        width: 100%;
        font-size: 16px;
        font-weight: ${(p) => p.theme.typography.fontWeightBold};
        color: ${(p) => p.theme.colors.pureWhite};
        padding: 1.6rem 0;
        background-color: ${(p) => p.theme.colors.orange};
        border: none;
        cursor: pointer;
        &:hover {
            background-color: ${(p) => p.theme.colors.darkOrange};
        }
    }
    .activeLabel {
        color: ${(p) => p.theme.colors.red};
    }
    .divider {
        height: 1px;
        background: #e5e5e5;
        width: 100%;
        margin-top: 5rem;
        margin-bottom: 1.7rem;
    }
`;

export const StyledComponentCheckOutTotal = styled.div`
    .highlight {
        color: ${(p) => p.theme.colors.orange};
    }
    .wrapperTotal {
        width: 100%;
        background-color: ${(p) => p.theme.colors.backgroundGray};
    }
    .content,
    .bottom {
        padding-left: 3rem;
        padding-right: 3.7rem;
    }
    .content {
        padding-top: 4rem;
        padding-bottom: 1rem;
        &__title {
            font-size: 1.8rem;
            color: ${(p) => p.theme.colors.darkBlack};
        }
        &__location {
            display: flex;
            font-size: 1.4rem;
            &-title {
                padding-left: 1.4rem;
                color: ${(p) => p.theme.colors.gray1};
            }
        }
        &__type {
            display: flex;
            &-left {
                margin-right: 3rem;
            }
            &-left,
            &-right {
                flex: 50%;
            }
            &-text {
                font-size: 1.4rem;
                font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            }
            &-subText {
                font-size: 1.4rem;
                color: ${(p) => p.theme.colors.gray1};
            }
        }
    }
    .form__group {
        .dateRange,
        .dateInput {
            .MuiInputBase-root {
                padding-left: 0;
            }
        }
        &-input {
            margin-top: 2rem;
        }
        &-option {
            display: flex;
            justify-content: space-between;
            padding-top: 2rem;
            font-size: 1.6rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        .MuiInputBase-root {
            padding-left: 1.8rem;
        }
        &-promo {
            margin-top: 2rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            .muiInputbase-root {
                padding-left: 0;
            }
        }
        &-inputPromo {
            width: 80%;
        }
        &-btn {
            font-size: 1.4rem;
            margin-left: 1rem;
            padding: 1.2rem 3.2rem 1.6rem 3.2rem;
            color: ${(p) => p.theme.colors.orange};
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            border: 1px solid ${(p) => p.theme.colors.orange};
            cursor: pointer;
            &:hover {
                background-color: ${(p) => p.theme.colors.orange};
                color: ${(p) => p.theme.colors.pureWhite};
                transition: all 0.5s ease-in-out;
            }
        }
    }
    .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        color: ${(p) => p.theme.colors.pureWhite};
        background-color: ${(p) => p.theme.colors.darkBlack};
        padding-top: 3.4rem;
        padding-bottom: 3.4rem;
        font-size: 2rem;
        &__money {
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
    }
`;
