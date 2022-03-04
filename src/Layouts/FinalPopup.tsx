import styled from "styled-components";

import { ILayout } from "@types";
import img from "@assets/banner1.png";

export const FinalPopup = (props: ILayout) => {
    return (
        <StyledFinalPopUp>
            <div className="wrapperFinal">{props.children}</div>
        </StyledFinalPopUp>
    );
};
const StyledFinalPopUp = styled.div`
    .wrapperFinal {
        position: relative;
        height: 100vh;
        width: 100%;
        background-image: url(${img});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
