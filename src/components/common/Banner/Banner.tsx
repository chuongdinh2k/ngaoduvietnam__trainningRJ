import React from "react";

import background_banner from "../../../assets/banner.png";
import styled from "styled-components";

interface IBanner {
    background_banner?: string;
}
function Banner() {
    return <StyledBanner background_banner={background_banner}></StyledBanner>;
}
const StyledBanner = styled.div<IBanner>`
    height: 40rem;
    width: 100%;
    background-image: url(${(p) => p.background_banner});
`;
export default Banner;
