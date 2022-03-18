import styled from "styled-components";

import { IIcon } from "@types";

export const StyledIcon = styled.div<IIcon>`
    svg {
        @media (min-width: 2000px) {
            width: ${(p) => (p.size === "large" ? "2.6rem" : p.width)};
            height: ${(p) => (p.size === "large" ? "3.4rem" : p.height)};
        }
    }
`;
