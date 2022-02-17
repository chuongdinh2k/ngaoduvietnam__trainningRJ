import React from "react";

// WHAT: fake data
const fakeData = {
    title: "About",
};

import {
    AboutBanner,
    ComponentIntroduce,
    StyledWrapContent,
    ComponentAboutIntro,
} from "@components";

export const About = () => {
    return (
        <div>
            <AboutBanner fakeData={fakeData} />
            <StyledWrapContent>
                <ComponentIntroduce />
                <ComponentAboutIntro />
            </StyledWrapContent>
        </div>
    );
};
