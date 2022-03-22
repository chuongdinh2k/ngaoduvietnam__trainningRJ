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
    useAppSelector,
    selectDetailHotel,
    viewDetailHotel,
    submitReviewHotel,
    changeReviewPagiantion,
    resetHotel,
} from "@redux";
// import { handlePagination } from "@utils";

export const HotelDetail = () => {
    const hotelDetail = useAppSelector(selectDetailHotel);
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(viewDetailHotel(id));
        return () => {
            dispatch(resetHotel());
        };
    }, [id]);
    const handleSubmitReviewHotel = (values: any) => {
        dispatch(
            submitReviewHotel({
                id,
                values,
            })
        );
    };
    const handleChangeReviewPage = (event: ChangeEvent<any>, value: any) => {
        dispatch(changeReviewPagiantion(value));
    };
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                {hotelDetail.loading ? (
                    <ComponentLoader type="full" />
                ) : (
                    <div className="wrapperContent">
                        <ComponentBreadscrumb
                            id={hotelDetail?.hotel?._id}
                            title={hotelDetail?.hotel?.title}
                        />
                        <PopupLightBox />
                        <ComponentDetailContent
                            dataHotel={hotelDetail.hotel}
                            handleChangeReviewPage={handleChangeReviewPage}
                            handleSubmitReviewHotel={handleSubmitReviewHotel}
                        />
                        <ComponentRelated relatedHotel={hotelDetail.relatedHotel} />
                    </div>
                )}
            </StyledWrapContent>
            <Footer />
        </>
    );
};
