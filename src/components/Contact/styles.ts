import styled from "styled-components";

export const StyledComponentContactForm = styled.div`
    .wrapperContact {
        padding: 3.4rem 0;
    }
    .wrapperForm {
        .title {
            font-size: 3.2rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        .text {
            font-size: ${(p) => p.theme.typography.fontSize}px;
        }
    }
    .form {
        .error {
            color: ${(p) => p.theme.colors.red};
            font-size: ${(p) => p.theme.typography.fontSize}px;
        }
        .MuiFormControl-root {
            .MuiInputBase-root {
                background-color: #f5f5f5;
            }
            padding-left: 0;
        }
        .MuiOutlinedInput-inputMultiline {
            font-size: 1.4rem;
            padding-left: 0.5rem;
        }
        .MuiOutlinedInput-root {
            border-color: transparent;
        }
        .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
            border: none;
        }
        &__input {
            padding-top: 2.6rem;
        }
        &__wrappButton {
            display: flex;
            justify-content: flex-end;
            margin-top: 2.4rem;
            &-btn {
                padding: 1.3rem 4.3rem;
                font-size: ${(p) => p.theme.typography.fontSize}px;
                color: ${(p) => p.theme.colors.pureWhite};
                border: none;
                box-shadow: none;
                text-transform: capitalize;
                border-radius: 0;
            }
        }
    }
    .contact__right {
        position: relative;
        width: 100%;
        height: 100%;
        max-height: 62rem;
        &-img {
            height: 100%;
            width: 100%;
        }
        &-content {
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 2.5rem 4rem 3.5rem 4rem;
            background-color: ${(p) => p.theme.colors.darkBlack};
        }
    }
    .right__content {
        &-title {
            font-size: 3.2rem;
            font-weight: 700;
            font-family: DM Sans;
            padding-bottom: 1.3rem;
            color: ${(p) => p.theme.colors.pureWhite};
        }
    }
    .right__list {
        display: flex;
        padding-bottom: 1.6rem;
        &-icon {
            padding: 1.1rem;
            background-color: ${(p) => p.theme.colors.orange};
            border-radius: 100%;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                padding: 1.7rem 2rem;
            }
        }
        &-text {
            padding-left: 1rem;
            font-family: DM Sans;
            display: flex;
            flex-direction: column;
        }
        &-title {
            color: ${(p) => p.theme.colors.orange};
            font-size: 1.8rem;
            font-family: 700;
            line-height: 2.3rem;
        }
        &-subtext {
            font-weight: 500;
            font-size: 1.4rem;
            color: ${(p) => p.theme.colors.pureWhite};
        }
    }
`;
