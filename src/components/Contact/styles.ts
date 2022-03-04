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
`;
