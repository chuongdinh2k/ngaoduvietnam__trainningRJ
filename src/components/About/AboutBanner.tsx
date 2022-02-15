import { StyledWrapBanner, StyledBanner } from "@components";
import { BACKGROUND_WRAPHEADER } from "@configs";

export const AboutBanner = () => {
    return (
        <StyledWrapBanner background_banner={BACKGROUND_WRAPHEADER} typeComponent="about">
            <StyledBanner typeComponent="about">
                <div className="title">ABOUT US</div>
            </StyledBanner>
        </StyledWrapBanner>
    );
};
