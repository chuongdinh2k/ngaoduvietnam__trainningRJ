import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

interface IProps {
    number?: number;
    small?: boolean;
    large?: boolean;
    medium?: boolean;
}
export const ComponentsRenderStars = (props: IProps) => {
    // props
    const { number } = props;
    // component state
    return (
        <StyledComponentsRenderStars small>
            <Box component="fieldset" borderColor="transparent">
                <Rating name="read-only" value={number} readOnly />
            </Box>
        </StyledComponentsRenderStars>
    );
};
const StyledComponentsRenderStars = styled.div<IProps>`
    .MuiRating-icon {
        font-size: ${(p) => (p.small ? "1.8rem" : "2.8rem")};
    }
`;
