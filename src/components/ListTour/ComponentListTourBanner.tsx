import { BACKGROUND_WRAPHEADER, PAGE_LISTTOUR } from "@configs";
import { StyledWrapBanner, StyledBanner, HomeTabsButtonComponent } from "@components";

interface banner {
    title?: string;
    subTitle?: string;
    formTitle?: string;
}

interface IProps {
    banner: banner;
    onChangeDebounce?: (e: any) => void;
    dataInputBounce?: any;
    loadingDebounce?: boolean;
}
export const ComponentListTourBanner = (props: IProps) => {
    const { banner, loadingDebounce, dataInputBounce, onChangeDebounce } = props;
    return (
        <StyledWrapBanner background_banner={BACKGROUND_WRAPHEADER} typeComponent={PAGE_LISTTOUR}>
            <div className="wrapContainer">
                <StyledBanner typeComponent={PAGE_LISTTOUR}>
                    <div className="content">
                        <p className="content__subTitle">{banner?.subTitle}</p>
                        <h3 className="content__title">{banner?.title}</h3>
                    </div>
                </StyledBanner>
                <div className="featured"></div>
                <div className="filter">
                    <HomeTabsButtonComponent
                        dataInputBounce={dataInputBounce}
                        onChangeDebounce={onChangeDebounce}
                        loadingDebounce={loadingDebounce}
                        show={false}
                        formTitle={banner.formTitle}
                        inputTypeOfTour
                    />
                </div>
            </div>
        </StyledWrapBanner>
    );
};
