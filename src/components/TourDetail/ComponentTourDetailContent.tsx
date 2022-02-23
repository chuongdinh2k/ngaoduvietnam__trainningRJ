import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { BookingForm } from "..";
import {
    ComponentDetailInfor,
    ComponentCustomViewImage,
    ComponentDetailTab,
    ComponentRelated,
} from ".";
import { dataTourDetail, listImagesTour } from "@demos";

export const ComponentTourDetailContent = () => {
    return (
        <StyledComponentTourDetailContent>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <ComponentDetailInfor />
                </Grid>
                <Grid item xs={12} md={4}></Grid>
            </Grid>
            <Grid container spacing={8}>
                <Grid item xs={12} md={8}>
                    <div className="wrapper__left">
                        <ComponentCustomViewImage listImages={listImagesTour} />
                        <ComponentDetailTab />
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <BookingForm />
                </Grid>
            </Grid>
            <ComponentRelated related={dataTourDetail.related} />
        </StyledComponentTourDetailContent>
    );
};
const StyledComponentTourDetailContent = styled.div`
    .wrapper__left {
        width: 63.5rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 100%;
        }
    }
`;
