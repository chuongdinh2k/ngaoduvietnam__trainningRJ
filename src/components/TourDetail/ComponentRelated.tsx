import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { getRelatedArray } from "@utils";
import { IHotel, IDataTour } from "@types";
import { Card, HotelCard } from "..";

interface IProps {
    relatedTour?: Array<IDataTour>;
    relatedHotel?: Array<IHotel>;
}
export const ComponentRelated = (props: IProps) => {
    // redux state
    const { relatedTour, relatedHotel } = props;
    //component variable
    const history = useHistory();
    const handleViewTourDetail = (id: string | undefined) => {
        history.push(`/tours/${id}`);
    };
    const handleViewHotelDetail = (id: string | undefined) => {
        history.push(`/hotels/${id}`);
    };
    return (
        <StyledComponentRelated>
            <div className="wrapperRelated">
                <h3 className="title">
                    {relatedTour && `Recommend For You`} {relatedHotel && `Recommend For You`}
                </h3>
                <Grid container spacing={4}>
                    {/*WHAT: show related tour */}
                    {getRelatedArray(relatedTour, 3)?.map((item: IDataTour) => (
                        <Grid key={item._id} item xs={12} sm={6} md={4}>
                            <Card typeCardIcon data={item} onClick={handleViewTourDetail} />
                        </Grid>
                    ))}
                    {/* WHAT: show related hotel */}
                    {getRelatedArray(relatedHotel, 3)?.map((item: IHotel) => (
                        <Grid key={item._id} item xs={12} sm={6} md={4}>
                            <HotelCard data={item} onClick={handleViewHotelDetail} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </StyledComponentRelated>
    );
};
const StyledComponentRelated = styled.div`
    .wrapperRelated {
        padding-top: 4rem;
        padding-bottom: 8rem;
        .cardWrapper {
            padding: 0;
        }
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
            padding-bottom: 4rem;
        }
    }
`;
