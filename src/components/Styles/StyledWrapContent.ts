import styled from "styled-components";
export const StyledWrapContent = styled.div`
    padding: 0 16.5rem;
    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        padding: 0 8rem;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding: 0 2rem;
    }
`;
