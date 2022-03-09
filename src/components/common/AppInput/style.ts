import styled from "styled-components";

interface ISWrapper {
    width?: string;
    marginTop?: string;
    hasBorder?: boolean;
    backgroundColor?: string;
}

interface ISLabel {
    color?: string;
    fontSize?: string;
    marginBottom?: string;
    fontWeight?: string;
}
export const CustomInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const InputWrapper = styled.div<ISWrapper>`
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
    @media (min-width: 2000px) {
        height: 10rem;
        padding: 3.2rem 2rem 1.6rem 2rem;
        .MuiInputBase-input {
            font-size: 2.6rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding: 1rem 1.2rem;
    }
`;

export const Placeholder = styled.div`
    color: #808285;
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
export const Error = styled.span`
    font-size: 14px;
    color: ${(p) => p.theme.colors.red};
`;
export const LabelWrapper = styled.div`
    display: flex;
    padding-top: 0.4rem;
`;
