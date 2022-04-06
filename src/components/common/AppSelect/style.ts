import styled from "styled-components";

interface ISWrapper {
    width?: any;
    marginTop?: any;
    size?: string;
}

interface ISLabel {
    color?: string;
    fontSize?: any;
    marginBottom?: any;
    fontWeight?: any;
}

export const InputWrapper = styled.div<ISWrapper>`
    height: 5rem;
    width: ${(props) => props.width || "100%"};
    margin-top: ${(props) => props.marginTop || "0px"};
    background-color: white;
    padding: 1.2rem 2rem 1.6rem 2rem;
    display: flex;
    .MuiInputBase-input {
        padding: -2px 0 7px;
        @media (max-width: 320px) {
            font-size: 1.2rem;
        }
    }
    .MuiSelect-select {
        .MuiSvgIcon-root {
            width: 2em;
            height: 2rem;
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
        padding: 0.5rem 1.2rem;
        height: 4rem;
    }
`;

export const Placeholder = styled.div`
    color: #c6c6c7;
`;

export const Label = styled.p<ISLabel>`
    font-size: ${(props) => props.fontSize || "20px"};
    margin-bottom: ${(props) => props.marginBottom || "10px"};
    color: ${(props) => props.color || "#000"};
    font-weight: ${(props) => props.fontWeight || 500};
    @media (max-width: 425px) {
        font-size: 16px;
    }
`;

export const LabelWrapper = styled.div`
    display: flex;
    padding-top: 0.4rem;
`;
