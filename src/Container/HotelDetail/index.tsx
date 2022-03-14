import React, { useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
    ComponentTourDetailContent,
    StyledWrapContent,
    Header,
    ComponentBreadscrumb,
} from "@components";
import { IHotel, IHotelComment } from "@types";
import { hotelsApi } from "@api";
import { setLoading } from "@redux";
import { PAGINATION_REVIEWS } from "@configs";

export const HotelDetail = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    //   component state
    const [detailHotel, setDetailHotel] = React.useState<IHotel>();
    const [params, setParams] = React.useState({ page: 1, limit: PAGINATION_REVIEWS });
    const [comments, setComments] = React.useState<IHotelComment[]>([]);

    React.useEffect(() => {
        dispatch(setLoading(true));
        const fetchDetailTour = async () => {
            const response = await hotelsApi.viewListDetail(id);
            setDetailHotel(response.data);
        };
        dispatch(setLoading(false));
        fetchDetailTour();
    }, [id]);

    // WHAT: call api review
    useEffect(() => {
        fetchDataReviews();
    }, [params]);

    const fetchDataReviews = async () => {
        const response = await hotelsApi.reviewHotels(id, { ...params });
        setComments(response.data);
    };

    const handleChangeReviewPage = (event: ChangeEvent<any>, value: string) => {
        setParams({
            page: Number(value),
            limit: PAGINATION_REVIEWS,
        });
    };
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                <div className="wrapperContent">
                    <ComponentBreadscrumb id={detailHotel?.id} title={detailHotel?.title} />
                    <ComponentTourDetailContent
                        dataHotel={detailHotel}
                        hotelComment={comments}
                        currentPage={params.page}
                        handleChangeReviewPage={handleChangeReviewPage}
                    />
                </div>
            </StyledWrapContent>
        </>
    );
};
