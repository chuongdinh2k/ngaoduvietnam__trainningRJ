import styled from "styled-components";

interface ISWrapper {
    width?: any;
    marginTop?: any;
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
    /* margin-bottom: 1.8rem; */
    @media (min-width: 2000px) {
        height: 10rem;
        padding: 3.2rem 2rem 1.6rem 2rem;
        .MuiInputBase-input {
            font-size: 2.6rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
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
