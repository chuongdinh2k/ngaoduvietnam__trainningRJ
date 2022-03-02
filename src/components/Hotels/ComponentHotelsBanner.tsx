import { BACKGROUND_WRAPHEADER_HOTELS, PAGE_HOTELS } from "@configs";
import { StyledBanner, StyledWrapBanner, HomeTabsButtonComponent } from "..";

interface banner {
    title?: string;
    subTitle?: string;
    formTitle?: string;
}
interface IProps {
    banner: banner;
}
export const ComponentHotelsBanner = (props: IProps) => {
    const { banner } = props;
    return (
        <StyledWrapBanner background_banner={BACKGROUND_WRAPHEADER_HOTELS}>
            <div className="wrapContainer">
                <StyledBanner typeComponent={PAGE_HOTELS}>
                    <div className="content">
                        <p className="content__subTitle">{banner.subTitle}</p>
                        <h3 className="content__title">{banner.title}</h3>
                    </div>
                </StyledBanner>
                <div className="featured"></div>
                <div className="filter">
                    <HomeTabsButtonComponent
                        show={false}
                        formTitle={banner.formTitle}
                        inputTypeOfTour={false}
                    />
                </div>
            </div>
        </StyledWrapBanner>
    );
};
