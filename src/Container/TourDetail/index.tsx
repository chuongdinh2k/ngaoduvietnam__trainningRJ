import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
    ComponentDetailContent,
    StyledWrapContent,
    Header,
    ComponentBreadscrumb,
    Footer,
    ComponentLoader,
    PopupLightBox,
    ComponentRelated,
} from "@components";
import {
    changeReviewPagiantionTour,
    resetHotel,
    useAppSelector,
    viewDetailTour,
    selectDetailTour,
    submitReviewTour,
} from "@redux";
// import { toursApi } from "@api";
import { PAGINATION_REVIEWS } from "@configs";

export const TourDetail = () => {
    const { id } = useParams<{ id: string }>();
    // redux
    const tourDetail = useAppSelector(selectDetailTour);
    const dispatch = useDispatch();
    // component state
    const [params, setParams] = React.useState({ page: 1, limit: PAGINATION_REVIEWS });
    React.useEffect(() => {
        dispatch(viewDetailTour(id));
        return () => {
            dispatch(resetHotel());
        };
    }, [id]);
    const handleSubmitReviewTour = (values: any) => {
        dispatch(
            submitReviewTour({
                id,
                values,
            })
        );
    };

    const handleChangeReviewPage = (event: ChangeEvent<any>, value: any) => {
        dispatch(changeReviewPagiantionTour(value));
    };
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                {tourDetail.loading ? (
                    <ComponentLoader type="full" />
                ) : (
                    <div className="wrapperContent">
                        <ComponentBreadscrumb
                            id={tourDetail.tour?._id}
                            title={tourDetail.tour?.title}
                        />
                        <PopupLightBox />
                        <ComponentDetailContent
                            dataTour={tourDetail.tour}
                            handleSubmitReviewTour={handleSubmitReviewTour}
                            handleChangeReviewPage={handleChangeReviewPage}
                            currentPage={params.page}
                        />
                        <ComponentRelated relatedTour={tourDetail.relatedTour} />
                    </div>
                )}
            </StyledWrapContent>
            <Footer />
        </>
    );
};
