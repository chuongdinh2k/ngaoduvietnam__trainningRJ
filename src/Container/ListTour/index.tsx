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
                <ComponentBreadscrumb />
                <ComponentListTourContent dataListsTour={dataListsTour} />
            </StyledWrapContent>
        </>
    );
};
