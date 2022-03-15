import {
    ComponentBreadscrumb,
    ComponentPrivacyContent,
    Footer,
    Header,
    StyledWrapContent,
} from "@components";
import { privacy } from "@demos";

export const PrivacyPolicy = () => {
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                    <ComponentPrivacyContent privacyData={privacy} />
                </div>
            </StyledWrapContent>
            <Footer />
        </>
    );
};
