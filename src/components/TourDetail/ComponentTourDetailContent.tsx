import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { BookingForm } from "..";
import {
    ComponentDetailInfor,
    ComponentCustomViewImage,
    ComponentDetailTab,
    ComponentRelated,
} from ".";
import { IComment, IDataTour, IHotel, IHotelComment } from "@types";
import { TourTabs, HotelTabs, dataTourDetail } from "@demos";
import { selectDetailHotel, useAppSelector } from "@redux";

interface IProps {
    dataTour?: IDataTour;
    dataHotel?: IHotel;
    tourComment?: IComment[];
    hotelComment?: IHotelComment[];
    currentPage?: number;
    handleSubmitReviewTour?: (value: any) => Promise<void>;
    handleChangeReviewPage?: (event: ChangeEvent<any>, value: string) => void;
    handleSubmitReviewHotel?: (value: any) => Promise<void>;
}
export const ComponentTourDetailContent = (props: IProps) => {
    const hotelDetail = useAppSelector(selectDetailHotel);
    // props
    const {
        dataTour,
        dataHotel,
        tourComment,
        hotelComment,
        currentPage,
        handleSubmitReviewTour,
        handleChangeReviewPage,
        handleSubmitReviewHotel,
    } = props;
    // componet variable
    const tabs = dataTour ? TourTabs : HotelTabs;
    const inforTour = {
        id: dataTour?.id,
        title: dataTour?.title,
        location: dataTour?.location,
        rating: dataTour?.rating,
        duration: dataTour?.duration,
        typeOfTour: dataTour?.typeOfTour,
    };
    const inforHotel = {
        _id: dataHotel?._id,
        title: dataHotel?.title,
        location: dataHotel?.location,
        rating: dataHotel?.rating,
        reviewNumber: dataHotel?.numberReviews,
        star: dataHotel?.star,
    };
    return (
        <StyledComponentTourDetailContent>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <ComponentDetailInfor inforTour={inforTour} inforHotel={inforHotel} />
                </Grid>
                <Grid item xs={12} md={4}></Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <div className="wrapper__left">
                        {dataTour && (
                            <>
                                <ComponentCustomViewImage
                                    listTourImages={dataTourDetail?.listImage}
                                />
                                <ComponentDetailTab
                                    tabs={tabs}
                                    tourComment={tourComment}
                                    dataTour={dataTour}
                                    handleSubmitReviewTour={handleSubmitReviewTour}
                                    handleChangeReviewPage={handleChangeReviewPage}
                                    currentPage={currentPage}
                                />
                            </>
                        )}
                        {dataHotel && (
                            <>
                                <ComponentCustomViewImage listHotelImages={dataHotel?.listImages} />
                                <ComponentDetailTab
                                    tabs={tabs}
                                    dataHotel={dataHotel}
                                    hotelComment={hotelDetail?.hotel?.reviews}
                                    handleChangeReviewPage={handleChangeReviewPage}
                                    handleSubmitReviewHotel={handleSubmitReviewHotel}
                                    currentPage={currentPage}
                                />
                            </>
                        )}
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <BookingForm dataHotel={dataHotel} dataTour={dataTour} />
                </Grid>
            </Grid>
            {dataTour && <ComponentRelated relatedTour={dataTour?.related} />}
            {/* {dataHotel && <ComponentRelated relatedHotel={dataHotel?.relatedHotels} />} */}
        </StyledComponentTourDetailContent>
    );
};
const StyledComponentTourDetailContent = styled.div`
    .wrapper__left {
        width: 63.5rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            width: 100%;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 100%;
        }
    }
`;
