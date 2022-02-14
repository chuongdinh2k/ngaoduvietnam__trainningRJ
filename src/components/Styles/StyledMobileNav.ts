import styled from "styled-components";

export const StyledMobilNav = styled.nav`
    position: fixed;
    display: none;
    z-index: 20;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100vh;
    background-color: ${(p) => p.theme.colors.pureWhite};
    box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media (max-width: 768px) {
        display: flex;
    }
`;
