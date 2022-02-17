import React from "react";

import {
    HomeAttractiveTourComponent,
    HomeBanner,
    HomeDiscoverFas,
    StyledWrapContent,
    ComponentHomeExperience,
    ComponentHomeContact,
    ComponentIntroduce,
} from "@components";
import { AttractiveTourLists, HomeDiscoverFasListsData, HomeExperienceListsData } from "@demos";

// WHAT: fake data
const fakeData = {
    title: "Perfect place for your stories",
    subTitle: "Welcome to NgaoduVietnam",
};

export const Home = () => {
    return (
        <>
            <HomeBanner fakeData={fakeData} />
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
