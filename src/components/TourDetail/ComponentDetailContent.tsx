import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { BookingForm } from "..";
import { ComponentDetailInfor, ComponentCustomViewImage, ComponentDetailTab } from ".";
import { IDataTour, IHotel } from "@types";
import { TourTabs, HotelTabs } from "@demos";
import { selectDetailHotel, useAppSelector, selectDetailTour } from "@redux";
import { ICommentValue } from "@api";

interface IProps {
    dataTour?: IDataTour;
    dataHotel?: IHotel;
    currentPage?: number;
    handleSubmitReviewTour?: (values: ICommentValue) => void;
    handleChangeReviewPage?: (event: ChangeEvent<any>, value: number) => void;
    handleSubmitReviewHotel?: (values: ICommentValue) => void;
}
export const ComponentDetailContent = (props: IProps) => {
    const hotelDetail = useAppSelector(selectDetailHotel);
    const tourDetail = useAppSelector(selectDetailTour);
    // props
    const {
        dataTour,
        dataHotel,
        currentPage,
        handleSubmitReviewTour,
        handleChangeReviewPage,
        handleSubmitReviewHotel,
    } = props;
    // componet variable
    const tabs = dataTour ? TourTabs : HotelTabs;
    return (
        <StyledComponentTourDetailContent>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <ComponentDetailInfor inforTour={dataTour} inforHotel={dataHotel} />
                </Grid>
                <Grid item xs={12} md={4}></Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <div className="wrapper__left">
                        {dataTour && (
                            <>
                                <ComponentCustomViewImage listTourImages={dataTour?.listImages} />
                                <ComponentDetailTab
                                    tabs={tabs}
                                    tourComment={tourDetail?.tour?.reviews}
                                    dataTour={tourDetail?.tour}
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
