import { BACKGROUND_WRAPHEADER, PAGE_LISTTOUR } from "@configs";
import { StyledWrapBanner, StyledBanner, HomeTabsButtonComponent } from "@components";

interface fakeData {
    title?: string;
    subTitle?: string;
}

interface IProps {
    fakeData: fakeData;
}
export const ComponentListTourBanner = (props: IProps) => {
    const { fakeData } = props;
    return (
        <StyledWrapBanner background_banner={BACKGROUND_WRAPHEADER} typeComponent={PAGE_LISTTOUR}>
            <StyledBanner typeComponent={PAGE_LISTTOUR}>
                <div className="content">
                    <p className="content__subTitle">{fakeData?.subTitle}</p>
                    <h3 className="content__title">{fakeData?.title}</h3>
                </div>
            </StyledBanner>
            <div className="featured"></div>
            <div className="filter">
                <HomeTabsButtonComponent show={false} />
            </div>
        </StyledWrapBanner>
    );
};
