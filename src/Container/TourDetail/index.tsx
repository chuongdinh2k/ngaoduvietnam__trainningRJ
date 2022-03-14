import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
    ComponentTourDetailContent,
    StyledWrapContent,
    Header,
    ComponentBreadscrumb,
} from "@components";
import { IComment, IDataTour } from "@types";
import { selectAuth, setLoading, useAppSelector } from "@redux";
import { toursApi } from "@api";
import { PAGINATION_REVIEWS } from "@configs";

export const TourDetail = () => {
    const { id } = useParams<{ id: string }>();
    // redux
    const auth = useAppSelector(selectAuth);
    const dispatch = useDispatch();
    // component state
    const [detailTour, setDetailTour] = React.useState<IDataTour>();
    const [params, setParams] = React.useState({ page: 1, limit: PAGINATION_REVIEWS });
    const [comments, setComments] = React.useState<IComment[]>([]);
    useEffect(() => {
        dispatch(setLoading(true));
        fetchDetailTour();
        dispatch(setLoading(false));
    }, [id]);
    const fetchDetailTour = async () => {
        const response = await toursApi.viewListDetail(id);
        setDetailTour(response.data);
    };

    // WHAT: call api review
    useEffect(() => {
        fetchDataReviews();
    }, []);

    const fetchDataReviews = async () => {
        const response = await toursApi.reviewTours(id, { ...params });
        setComments(response.data);
    };

    // WHAT: handle submit reiview
    const handleSubmitReview = async (value: any) => {
        try {
            const res = await toursApi.commentTour(id, {
                username: auth?.userInfo?.name,
                userId: auth?.userInfo?.id,
                avatar: auth?.userInfo?.picture,
                rating: 8,
                title: "greate one!",
                comment: value.comment,
                status: "wonderful",
            });
            setComments([...comments, res.data]);
        } catch (err) {}
    };
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                <div className="wrapperContent">
                    <ComponentBreadscrumb id={detailTour?.id} title={detailTour?.title} />
                    <ComponentTourDetailContent
                        dataTour={detailTour}
                        tourComment={comments}
                        handleSubmitReviewTour={handleSubmitReview}
                    />
                </div>
            </StyledWrapContent>
        </>
    );
};
