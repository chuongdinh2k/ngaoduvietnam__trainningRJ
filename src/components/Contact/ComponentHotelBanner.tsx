import backgroundContact from "@assets/bannerContact.png";
import { StyledWrapBanner, StyledBanner } from "@components";
import { PAGE_CONTACT } from "@configs";

export const ComponentHotelBanner = () => {
    return (
        <StyledWrapBanner background_banner={backgroundContact} typeComponent={PAGE_CONTACT}>
            <div className="wrapContainer">
                <StyledBanner typeComponent={PAGE_CONTACT}>
                    <div className="content">
                        <h3 className="content__title">Contact Us</h3>
                    </div>
                </StyledBanner>
            </div>
        </StyledWrapBanner>
    );
};
