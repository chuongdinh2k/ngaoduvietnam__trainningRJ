import {
    ComponentBreadscrumb,
    ComponentListTourBanner,
    ComponentListTourContent,
    Header,
    StyledWrapContent,
} from "@components";
import { dataListsTour } from "@demos";

// WHAT: fake data
const fakeData = {
    subTitle: "Search hundreds of tours and more",
    title: "Attractive tour and interesting experiences",
};

export const ListTour = () => {
    return (
        <>
            <Header hasColor={false} />
            <ComponentListTourBanner fakeData={fakeData} />
            <StyledWrapContent>
                <ComponentBreadscrumb />
                <ComponentListTourContent dataListsTour={dataListsTour} />
            </StyledWrapContent>
        </>
    );
};
