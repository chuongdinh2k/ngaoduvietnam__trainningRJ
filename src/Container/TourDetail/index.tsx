import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
    ComponentTourDetailContent,
    StyledWrapContent,
    Header,
    ComponentLoader,
    ComponentBreadscrumb,
} from "@components";
import { IDataTour } from "@types";
import { selectTour, useAppSelector } from "@redux";

export const TourDetail = () => {
    const { id } = useParams<{ id: string }>();
    // hook props
    const dataTour = useAppSelector(selectTour);
    // component state
    const [detailTour, setDetailTour] = React.useState<IDataTour>();
    const [loading, setLoading] = React.useState<boolean>(true);

    useEffect(() => {
        const tourDetail = dataTour.dataToursList.filter((tour) => tour.id === id);
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
            setDetailTour(tourDetail[0]);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [id]);
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                {loading ? (
                    <ComponentLoader />
                ) : (
                    <>
                        <ComponentBreadscrumb />
                        <ComponentTourDetailContent dataTour={detailTour} />
                    </>
                )}
            </StyledWrapContent>
        </>
    );
};
