import { StyledWrapBanner, StyledBanner } from "@components";
import { BACKGROUND_WRAPHEADER, PAGE_ABOUT } from "@configs";

interface fakeData {
    title?: string;
    subTitle?: string;
}

interface IProps {
    fakeData?: fakeData;
}

export const AboutBanner = (props: IProps) => {
    const { fakeData } = props;
    return (
        <StyledWrapBanner background_banner={BACKGROUND_WRAPHEADER} typeComponent={PAGE_ABOUT}>
            <div className="wrapContainer">
                <StyledBanner typeComponent={PAGE_ABOUT}>
                    <div className="content">
                        <h3 className="content__title">{fakeData?.title}</h3>
                    </div>
                </StyledBanner>
            </div>
        </StyledWrapBanner>
    );
};
