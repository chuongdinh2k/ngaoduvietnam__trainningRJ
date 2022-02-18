import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { ICard } from "@types";
import { Card } from "..";

interface IProps {
    data?: Array<ICard>;
}
export const ComponentListTourLists = (props: IProps) => {
    const { data } = props;
    return (
        <StyledComponentListTourLists>
            <div className="wrapper">
                <Grid container>
                    {data &&
                        data.map((item, index) => (
                            <Grid item key={index} xs={12} md={4}>
                                <Card typeCardIcon data={item} />
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