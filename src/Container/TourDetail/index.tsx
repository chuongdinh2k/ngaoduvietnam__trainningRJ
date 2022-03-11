import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
    ComponentTourDetailContent,
    StyledWrapContent,
    Header,
    ComponentBreadscrumb,
} from "@components";
import { IDataTour } from "@types";
import { setLoading } from "@redux";
import { toursApi } from "@api";

export const TourDetail = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    // component state
    const [detailTour, setDetailTour] = React.useState<IDataTour>();
    useEffect(() => {
        dispatch(setLoading(true));
        const fetchDetailTour = async () => {
            const response = await toursApi.viewListDetail(id);
            setDetailTour(response.data);
        };
        dispatch(setLoading(false));
        fetchDetailTour();
    }, [id, setLoading]);
    return (
        <>
            <Header hasColor />
            <StyledWrapContent withOutBanner>
                <div className="wrapperContent">
                    <ComponentBreadscrumb id={detailTour?.id} title={detailTour?.title} />
                    <ComponentTourDetailContent dataTour={detailTour} />
                </div>
            </StyledWrapContent>
        </>
    );
};
