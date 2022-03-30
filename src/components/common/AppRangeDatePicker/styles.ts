import styled from "styled-components";

interface ISWrapper {
    width?: string;
    marginTop?: string;
    hasBorder?: boolean;
    backgroundColor?: string;
    size?: string;
}
export const InputWrapperRangeDate = styled.div<ISWrapper>`
    background-color: ${(props) => props.backgroundColor || "white"};
    height: 5rem;
    border: ${(p) => {
        if (p.hasBorder) {
            return `1px solid #E5E5E5`;
        }
    }};
    width: ${(props) => props.width || "100%"};
    margin-top: ${(props) => props.marginTop || "0px"};
    padding: 1.2rem 2rem 1.6rem 2rem;
    display: flex;
    // mui overide css
    .MuiButtonBase-root {
        padding: 0;
    }
    .MuiOutlinedInput-adornedStart {
        padding-left: 0;
    }
    .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root {
        display: none;
    }
    .wrapperRangeContent {
        margin-left: 1.25rem;
        .MuiInputBase-input {
            font-size: 1.4rem;
            padding-left: 0;
            font-weight: 500;
            max-width: 8rem;
        }
    }
    @media (min-width: 2000px) {
        height: ${(p) => (p.size === "large" ? `7rem` : `5rem`)};
        padding: 1.2rem 2rem 1.2rem 2rem;
        .MuiInputBase-input {
            font-size: ${(p) => (p.size === "large" ? `2.6rem` : `1.4rem`)};
        }
    }
    @media (min-width: 3000px) {
        height: ${(p) => (p.size === "large" ? `10rem` : `5rem`)};
        padding: ${(p) =>
            p.size === "large" ? `3.2rem 2rem 1.6rem 2rem` : `1.2rem 2rem 1.6rem 2rem`};
        .MuiInputBase-input {
            font-size: ${(p) => (p.size === "large" ? `2.6rem` : `1.4rem`)};
        }
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        height: 4rem;
        padding: 1rem 1.2rem;
    }
`;
