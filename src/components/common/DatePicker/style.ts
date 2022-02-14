import { BREAK_ONLY_MOBILE } from "@configs";
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
    width: ${(props) => props.width || "100%"};
    margin-top: ${(props) => props.marginTop || "0px"};
    background-color: white;
    padding: 1.5rem;
    display: flex;
    margin-bottom: 1.8rem;
    @media (max-width: ${BREAK_ONLY_MOBILE}) {
        padding: 1rem 1.2rem;
    }
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
