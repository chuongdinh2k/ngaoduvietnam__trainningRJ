import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${(p) => p.theme.colors.pureWhite};

    &.boxed {
        overflow: hidden;
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: 992px) {
        &.boxed {
            max-width: 95%;
        }
    }
    .workspace {
        width: 100%;
        position: relative;
        /* overflow: hidden; */
        max-width: 100%;
    }
`;
