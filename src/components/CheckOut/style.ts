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
