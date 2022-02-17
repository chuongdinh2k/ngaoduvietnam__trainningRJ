import { ComponentBreadscrumb, ComponentListTourBanner, StyledWrapContent } from "@components";

// WHAT: fake data
const fakeData = {
    subTitle: "Search hundreds of tours and more",
    title: "Attractive tour and interesting experiences",
};
export const ListTour = () => {
    return (
        <>
            <ComponentListTourBanner fakeData={fakeData} />
            <StyledWrapContent>
                <ComponentBreadscrumb />
            </StyledWrapContent>
        </>
    );
};
