import { StyledWrapBanner, StyledBanner } from "@components";
import { BACKGROUND_WRAPHEADER } from "@configs";

interface IProps {
    title?: string;
    subTitle?: string;
}

export const AboutBanner = (props: IProps) => {
    const { title } = props;
    return (
        <StyledWrapBanner background_banner={BACKGROUND_WRAPHEADER} typeComponent="about">
            <StyledBanner typeComponent="about">
                <div className="content">
                    <h3 className="content__title">{title}</h3>
                </div>
            </StyledBanner>
        </StyledWrapBanner>
    );
};
