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
    Header,
} from "@components";

export const About = () => {
    return (
        <div>
            <Header hasColor={false} />
            <AboutBanner fakeData={fakeData} />
            <StyledWrapContent>
                <ComponentIntroduce />
                <ComponentAboutIntro />
            </StyledWrapContent>
        </div>
    );
};
