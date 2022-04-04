import { BACKGROUND_WRAPHEADER_HOTELS } from "@configs";
import { StyledWrapBanner, StyledBanner, HomeTabsButtonComponent } from "..";

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
                <StyledBanner>
                    <div className="content">
                        <div className="content__left">
                            <div className="content__left-top">
                                <p className="content__subTitle">{banner.subTitle}</p>
                                <h3 className="content__title">{banner.title}</h3>
                            </div>
                            <div className="content__left-bottom">
                                <div className="featured"></div>
                            </div>
                        </div>
                        <div className="content__right">
                            <div className="filter__hotel">
                                <HomeTabsButtonComponent
                                    show={false}
                                    formTitle={banner.formTitle}
                                    inputTypeOfTour={false}
                                />
                            </div>
                        </div>
                    </div>
                </StyledBanner>
            </div>
        </StyledWrapBanner>
    );
};
