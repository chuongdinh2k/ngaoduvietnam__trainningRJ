import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { ICard } from "@types";
import { Card } from "..";
import { useHistory } from "react-router-dom";
import { selectTour, useAppSelector } from "@redux";

interface IProps {
    data?: Array<ICard>;
}
export const ComponentListTourLists = (props: IProps) => {
    // redux states
    const tourData = useAppSelector(selectTour);
    const filterTour = tourData.filterData;
    // component variable
    const history = useHistory();
    const handleViewDetail = (id: number | undefined) => {
        history.push(`/tours/${id}`);
    };
    return (
        <StyledComponentListTourLists>
            <div className="wrapper">
                <Grid container spacing={4}>
                    {!filterTour.length
                        ? tourData &&
                          tourData.dataToursList.map((item: ICard, index) => (
                              <Grid item key={index} xs={12} sm={4}>
                                  <Card typeCardIcon data={item} onClick={handleViewDetail} />
                              </Grid>
                          ))
                        : filterTour.map((item: ICard, index) => (
                              <Grid item key={index} xs={12} sm={4}>
                                  <Card typeCardIcon data={item} onClick={handleViewDetail} />
                              </Grid>
                          ))}
                </Grid>
            </div>
        </StyledComponentListTourLists>
    );
};
const StyledComponentListTourLists = styled.div`
    .wrapper {
        /* padding-top: 6rem; */
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding-top: 2rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-top: 2rem;
        }
    }
`;
