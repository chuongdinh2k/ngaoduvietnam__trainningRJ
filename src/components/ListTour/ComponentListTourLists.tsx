import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { ICard } from "@types";
import { Card } from "..";
import { useHistory } from "react-router-dom";

interface IProps {
    data?: Array<ICard>;
}
export const ComponentListTourLists = (props: IProps) => {
    // props
    const { data } = props;
    // component variable
    const history = useHistory();
    const handleViewDetail = (id: number) => {
        history.push(`/tours/${id}`);
    };
    return (
        <StyledComponentListTourLists>
            <div className="wrapper">
                <Grid container>
                    {data &&
                        data.map((item, index) => (
                            <Grid item key={index} xs={12} md={4}>
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
