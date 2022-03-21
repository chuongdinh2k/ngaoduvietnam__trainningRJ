import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { getRelatedArray } from "@utils";
import { IHotel, IRelated } from "@types";
import { Card, HotelCard } from "..";

interface IProps {
    relatedTour?: IRelated;
    relatedHotel?: Array<IHotel>;
}
export const ComponentRelated = (props: IProps) => {
    // redux state
    const { relatedTour, relatedHotel } = props;
    //component variable
    const history = useHistory();
    const handleViewTourDetail = (id: number | undefined) => {
        history.push(`/tours/${id}`);
    };
    const handleViewHotelDetail = (id: string | undefined) => {
        history.push(`/hotels/${id}`);
    };
    return (
        <StyledComponentRelated>
            <h3 className="title">
                {relatedTour?.title} {relatedHotel && `Recommend For You`}
            </h3>
            <Grid container spacing={4}>
                {/*WHAT: show related tour */}
                {getRelatedArray(relatedTour?.list, 3)?.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={4}>
                        <Card typeCardIcon data={item} onClick={handleViewTourDetail} />
                    </Grid>
                ))}
                {/* WHAT: show related hotel */}
                {getRelatedArray(relatedHotel, 3)?.map((item) => (
                    <Grid key={item._id} item xs={12} sm={6} md={4}>
                        <HotelCard data={item} onClick={handleViewHotelDetail} />
                    </Grid>
                ))}
            </Grid>
        </StyledComponentRelated>
    );
};
const StyledComponentRelated = styled.div`
    padding-bottom: 2rem;
    .title {
        font-size: 2.8rem;
        font-weight: 600;
        padding-bottom: 6rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-bottom: 2rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        padding-top: 2rem;
    }
`;
