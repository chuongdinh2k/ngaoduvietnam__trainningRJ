import { StyledWrapBanner } from "@components";
import { BACKGROUND_WRAPHEADER } from "@configs";
import { StyledBanner } from "../Styles";

export const AboutBanner = () => {
    return (
        <StyledWrapBanner background_banner={BACKGROUND_WRAPHEADER} height="40rem">
            <StyledBanner align="center" width="100%" paddingTop="20rem">
                <div className="title">ABOUT US</div>
            </StyledBanner>
        </StyledWrapBanner>
    );
};
