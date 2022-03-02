import React from "react";

import {
    ComponentBreadscrumb,
    ComponentHotelsBanner,
    ComponentHotelsContent,
    Header,
    StyledWrapContent,
} from "@components";
import { banner } from "@demos";

export const Hotels = () => {
    return (
        <>
            <Header hasColor={false} />
            <ComponentHotelsBanner banner={banner.hotels} />
            <StyledWrapContent>
                <ComponentBreadscrumb />
                <ComponentHotelsContent />
            </StyledWrapContent>
        </>
    );
};
