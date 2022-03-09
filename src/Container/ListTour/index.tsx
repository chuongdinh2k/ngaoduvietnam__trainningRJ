import React from "react";
import { useDispatch } from "react-redux";

import {
    ComponentBreadscrumb,
    ComponentListTourBanner,
    ComponentListTourContent,
    Header,
    StyledWrapContent,
} from "@components";
import { banner } from "@demos";
import { getListTours, selectTour, useAppSelector } from "@redux";

export const ListTour = () => {
    const dispatch = useDispatch();
    const tours = useAppSelector(selectTour);
    React.useEffect(() => {
        dispatch(getListTours());
    }, []);
    return (
        <>
            <Header hasColor={false} />
            <ComponentListTourBanner banner={banner.listTour} />
            <StyledWrapContent>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                    <ComponentListTourContent dataListsTour={tours.dataToursList} />
                </div>
            </StyledWrapContent>
        </>
    );
};
