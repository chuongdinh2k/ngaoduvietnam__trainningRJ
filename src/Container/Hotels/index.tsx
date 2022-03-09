import React from "react";
import { useDispatch } from "react-redux";

import {
    ComponentBreadscrumb,
    ComponentHotelsBanner,
    ComponentHotelsContent,
    Header,
    StyledWrapContent,
} from "@components";
import { banner } from "@demos";
import { getListHotels, selectHotel, useAppSelector } from "@redux";

export const Hotels = () => {
    const dispatch = useDispatch();
    const hotels = useAppSelector(selectHotel);
    console.log(hotels);
    React.useEffect(() => {
        dispatch(getListHotels());
    }, []);
    return (
        <>
            <Header hasColor={false} />
            <ComponentHotelsBanner banner={banner.hotels} />
            <StyledWrapContent>
                <div className="wrapperContent">
                    <ComponentBreadscrumb />
                    <ComponentHotelsContent />
                </div>
            </StyledWrapContent>
        </>
    );
};
