import React, { useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
    ComponentTourDetailContent,
    StyledWrapContent,
    Header,
    ComponentBreadscrumb,
    Footer,
    ComponentLoader,
    // PopupLightBox,
} from "@components";
import { IComment, IDataTour } from "@types";
import { selectApp, selectAuth, setLoading, useAppSelector } from "@redux";
import { toursApi } from "@api";
import { FAIL, PAGINATION_REVIEWS, REVIEW_SUCCESS } from "@configs";

export const TourDetail = () => {
    const { id } = useParams<{ id: string }>();
    // redux
    const app = useAppSelector(selectApp);
    const auth = useAppSelector(selectAuth);
    const dispatch = useDispatch();
    // component state
    const [detailTour, setDetailTour] = React.useState<IDataTour>();
    const [params, setParams] = React.useState({ page: 1, limit: PAGINATION_REVIEWS });
    const [comments, setComments] = React.useState<IComment[]>([]);
    useEffect(() => {
        dispatch(setLoading(true));
        fetchDetailTour();
    }, [id]);
    const fetchDetailTour = async () => {
        const response = await toursApi.viewListDetail(id);
        setDetailTour(response.data);
        dispatch(setLoading(false));
    };

    // WHAT: call api review
    useEffect(() => {
        fetchDataReviews();
    }, [params]);

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
            toast.success(`${REVIEW_SUCCESS}`);
        } catch (err) {
            toast.error(`${FAIL}`);
        }
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
                {app.loading ? (
                    <ComponentLoader />
                ) : (
                    <div className="wrapperContent">
                        <ComponentBreadscrumb id={detailTour?.id} title={detailTour?.title} />
                        {/* <PopupLightBox /> */}
                        <ComponentTourDetailContent
                            dataTour={detailTour}
                            tourComment={comments}
                            handleSubmitReviewTour={handleSubmitReview}
                            handleChangeReviewPage={handleChangeReviewPage}
                            currentPage={params.page}
                        />
                    </div>
                )}
            </StyledWrapContent>
            <Footer />
        </>
    );
};
