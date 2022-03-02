import React from "react";

import {
    HomeAttractiveTourComponent,
    HomeBanner,
    HomeDiscoverFas,
    StyledWrapContent,
    ComponentHomeExperience,
    ComponentHomeContact,
    ComponentIntroduce,
    Header,
} from "@components";
import {
    AttractiveTourLists,
    HomeDiscoverFasListsData,
    HomeExperienceListsData,
    banner,
} from "@demos";

// WHAT: fake data

export const Home = () => {
    return (
        <>
            <Header hasColor={false} />
            <HomeBanner banner={banner.home} />
            <StyledWrapContent>
                <ComponentIntroduce />
                <HomeDiscoverFas HomeDiscoverFasListsData={HomeDiscoverFasListsData} />
                <HomeAttractiveTourComponent AttractiveTourLists={AttractiveTourLists} />
                <ComponentHomeExperience HomeExperienceListsData={HomeExperienceListsData} />
                <ComponentHomeContact />
            </StyledWrapContent>
        </>
    );
};
