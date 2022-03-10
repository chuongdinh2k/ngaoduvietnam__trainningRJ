import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
    ComponentTourDetailContent,
    StyledWrapContent,
    Header,
    ComponentBreadscrumb,
} from "@components";
import { IHotel } from "@types";
import { hotelsApi } from "@api";
import { setLoading } from "@redux";

export const HotelDetail = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const [detailHotel, setDetailHotel] = React.useState<IHotel>();
    React.useEffect(() => {
        dispatch(setLoading(true));
        const fetchDetailTour = async () => {
            const response = await hotelsApi.viewListDetail(id);
            setDetailHotel(response.data);
        };
        dispatch(setLoading(false));
        fetchDetailTour();
    }, [id]);
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                <div className="wrapperContent">
                    <ComponentBreadscrumb id={detailHotel?.id} title={detailHotel?.title} />
                    <ComponentTourDetailContent dataHotel={detailHotel} />
                </div>
            </StyledWrapContent>
        </>
    );
};
