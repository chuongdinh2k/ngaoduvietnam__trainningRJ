import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { ERROR_404_DATA } from "@configs";

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
import { ICommentValue } from "@api";

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
    const handleSubmitReviewHotel = (values: ICommentValue) => {
        dispatch(
            submitReviewHotel({
                id,
                values,
            })
        );
    };
    const handleChangeReviewPage = (event: ChangeEvent<any>, value: number) => {
        dispatch(changeReviewPagiantion(value));
    };
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                {hotelDetail.loading ? (
                    <ComponentLoader type="full" />
                ) : hotelDetail.hotel ? (
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
                ) : (
                    <h5 className="errorText">{ERROR_404_DATA}</h5>
                )}
            </StyledWrapContent>
            <Footer />
        </>
    );
};
