import React, { ChangeEvent } from "react";
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
    PopupLightBox,
    ComponentRelated,
} from "@components";
import { IHotel, IHotelComment } from "@types";
import { hotelsApi } from "@api";
import { selectApp, setLoading, useAppSelector } from "@redux";
import { PAGINATION_REVIEWS, REVIEW_SUCCESS, FAIL } from "@configs";
import { handlePagination } from "@utils";

export const HotelDetail = () => {
    const app = useAppSelector(selectApp);
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    //   component state
    const [detailHotel, setDetailHotel] = React.useState<IHotel>();
    const [relatedHotel, setRelatedHotel] = React.useState<Array<IHotel>>();
    const [params, setParams] = React.useState({ page: 1, limit: PAGINATION_REVIEWS });
    const [comments, setComments] = React.useState<IHotelComment[]>([]);
    // component variable
    React.useEffect(() => {
        dispatch(setLoading(true));
        fetchDetailTour();
    }, [id]);
    const fetchDetailTour = async () => {
        const response = await hotelsApi.viewListDetail(id);
        setDetailHotel(response.data.hotel);
        setRelatedHotel(response.data.relatedHotel);
        setComments(response.data.hotel.reviews);
        dispatch(setLoading(false));
    };
    // WHAT: call api review
    // useEffect(() => {
    //     fetchDataReviews();
    // }, [params]);
    // const fetchDataReviews = async () => {
    //     const response = await hotelsApi.reviewHotels(id, { ...params });
    //     setComments(response.data);
    // };
    // const handleSubmitHotelReview = async (value:any) => {

    // }
    const handleSubmitReviewHotel = async (values: any) => {
        try {
            const res = await hotelsApi.commentHotel(id, {
                rating: 8,
                title: "good",
                comment: values.comment,
            });
            setComments([res.data.review, ...comments, res.data]);
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
                    <ComponentLoader type="full" />
                ) : (
                    <div className="wrapperContent">
                        <ComponentBreadscrumb id={detailHotel?._id} title={detailHotel?.title} />
                        <PopupLightBox />
                        <ComponentTourDetailContent
                            dataHotel={detailHotel}
                            hotelComment={handlePagination(comments, params.page, params.limit)}
                            currentPage={params.page}
                            handleChangeReviewPage={handleChangeReviewPage}
                            handleSubmitReviewHotel={handleSubmitReviewHotel}
                        />
                        <ComponentRelated relatedHotel={relatedHotel} />
                    </div>
                )}
            </StyledWrapContent>
            <Footer />
        </>
    );
};
