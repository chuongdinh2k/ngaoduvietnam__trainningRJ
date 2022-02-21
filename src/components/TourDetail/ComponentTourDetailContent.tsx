import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { BookingForm } from "..";
import { ComponentDetailInfor, ComponentCustomViewImage } from ".";

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
                    <ComponentCustomViewImage />
                </Grid>
                <Grid item xs={12} md={4}>
                    <BookingForm />
                </Grid>
            </Grid>
        </StyledComponentTourDetailContent>
    );
};
const StyledComponentTourDetailContent = styled.div``;
