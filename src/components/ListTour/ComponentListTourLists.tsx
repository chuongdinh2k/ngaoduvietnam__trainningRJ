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
    const handleViewDetail = (id: string | undefined) => {
        history.push(`/tours/${id}`);
    };
    return (
        <StyledComponentListTourLists>
            {data && data?.length > 0 ? (
                <div className="wrapper">
                    <Grid container spacing={4}>
                        {data.map((item: ICard, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card typeCardIcon data={item} onClick={handleViewDetail} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) : (
                <h5 className="notFound">Can not find matching data!</h5>
            )}
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
        .cardWrapper {
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                padding: 0;
            }
        }
        .imageWrapper {
            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                height: 26rem;
            }
        }
    }
    .notFound {
        text-align: center;
        font-size: 2.4rem;
        color: ${(p) => p.theme.colors.red};
    }
`;
