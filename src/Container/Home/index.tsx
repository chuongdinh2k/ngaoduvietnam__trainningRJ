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
    Footer,
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
                <div className="wrapperContent">
                    <ComponentIntroduce />
                    <HomeDiscoverFas HomeDiscoverFasListsData={HomeDiscoverFasListsData} />
                    <HomeAttractiveTourComponent AttractiveTourLists={AttractiveTourLists} />
                    <ComponentHomeExperience HomeExperienceListsData={HomeExperienceListsData} />
                    <ComponentHomeContact />
                </div>
            </StyledWrapContent>
            <Footer />
        </>
    );
};
