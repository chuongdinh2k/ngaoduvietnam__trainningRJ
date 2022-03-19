import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { IHotel } from "@types";
import { HotelCard } from "..";
import { useHistory } from "react-router-dom";

interface IProps {
    data?: Array<IHotel>;
}
export const ComponentListHotels = (props: IProps) => {
    // props
    const { data } = props;
    // component variable
    const history = useHistory();
    const handleViewDetail = (id: string | number | undefined) => {
        history.push(`/hotels/${id}`);
    };
    return (
        <StyledComponentListHotels>
            {data &&  data?.length>0?<div className="wrapper">
                <Grid container spacing={4}>
                    {
                        data.map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <HotelCard data={item} onClick={handleViewDetail} />
                            </Grid>
                        ))}
                </Grid>
            </div>:<h5 className="notFound">Can not find matching data!</h5>}
        </StyledComponentListHotels>
    );
};
const StyledComponentListHotels = styled.div`
    .wrapper {
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding-top: 2rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-top: 2rem;
        }
    }
    .notFound{
        text-align: center;
        font-size: 2.4rem;
        color: ${(p) => p.theme.colors.red};
    }
`;
