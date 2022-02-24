import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { BookingForm, ComponentBreadscrumb } from "..";
import {
    ComponentDetailInfor,
    ComponentCustomViewImage,
    ComponentDetailTab,
    ComponentRelated,
} from ".";
import { IDataTour } from "@types";

interface IProps {
    dataTour?: IDataTour;
}
export const ComponentTourDetailContent = (props: IProps) => {
    const { dataTour } = props;
    // componet variable
    const inforTour = {
        id: dataTour?.id,
        title: dataTour?.title,
        location: dataTour?.location,
        rating: dataTour?.rating,
        duration: dataTour?.duration,
        typeOfTour: dataTour?.typeOfTour,
    };
    return (
        <StyledComponentTourDetailContent>
            <Grid container spacing={8}>
                <Grid item xs={12} md={8}>
                    <ComponentDetailInfor inforTour={inforTour} />
                </Grid>
                <Grid item xs={12} md={4}></Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <div className="wrapper__left">
                        <ComponentCustomViewImage listImages={dataTour?.listImage} />
                        <ComponentDetailTab />
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <BookingForm />
                </Grid>
            </Grid>
            <ComponentRelated related={dataTour?.related} />
        </StyledComponentTourDetailContent>
    );
};
const StyledComponentTourDetailContent = styled.div`
    .MuiGrid-spacing-xs-8 {
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        }
    }
    .wrapper__left {
        width: 63.5rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 100%;
        }
    }
`;
