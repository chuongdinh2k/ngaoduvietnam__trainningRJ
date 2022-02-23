import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { getRelatedArray } from "@utils";
import { IRelated } from "@types";
import { Card } from "..";

interface IProps {
    related?: IRelated;
}
export const ComponentRelated = (props: IProps) => {
    const { related } = props;
    //component variable
    const history = useHistory();
    const handleViewDetail = (id: number | undefined) => {
        history.push(`/tours/${id}`);
    };

    return (
        <StyledComponentRelated>
            <h3 className="title">{related?.title}</h3>
            <Grid container spacing={4}>
                {getRelatedArray(related?.list, 3)?.map((item) => (
                    <Grid key={item.id} item xs={12} md={4}>
                        <Card typeCardIcon data={item} onClick={handleViewDetail} />
                    </Grid>
                ))}
            </Grid>
        </StyledComponentRelated>
    );
};
const StyledComponentRelated = styled.div`
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
