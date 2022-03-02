import {
    ComponentBreadscrumb,
    ComponentListTourBanner,
    ComponentListTourContent,
    Header,
    StyledWrapContent,
} from "@components";
import { dataListsTour, banner } from "@demos";

export const ListTour = () => {
    return (
        <>
            <Header hasColor={false} />
            <ComponentListTourBanner banner={banner.listTour} />
            <StyledWrapContent>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                    <ComponentListTourContent dataListsTour={dataListsTour} />
                </div>
            </StyledWrapContent>
        </>
    );
};
