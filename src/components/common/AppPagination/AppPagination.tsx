import React from "react";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            "& > *": {
                marginTop: theme.spacing(2),
            },
        },
        ul: {
            "& .MuiPaginationItem-root": {
                color: `${theme.colors.darkBlack}`,
                backgroundColor: `${theme.colors.gray4}`,
                borderRadius: 0,
                border: "none",
            },
            "& .Mui-selected": {
                backgroundColor: `${theme.colors.darkBlack}`,
                color: `${theme.colors.pureWhite}`,
            },
        },
    })
);

interface IProps {
    totalPage?: number;
}

export const AppPagination = (props: IProps) => {
    const { totalPage } = props;
    const classes = useStyles();

    return (
        <StyledAppPagination>
            <Grid container>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={8}>
                    <div className="wrapper">
                        <p className="wrapper__text">
                            Showing{" "}
                            <span className="wrapper__number">
                                {1}/{totalPage}
                            </span>
                        </p>
                        <div className="paginationWrapper">
                            <div className={classes.root}>
                                <Pagination
                                    classes={{ ul: classes.ul }}
                                    count={totalPage}
                                    variant="outlined"
                                />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </StyledAppPagination>
    );
};
const StyledAppPagination = styled.div`
    .wrapper {
        display: flex;
        justify-content: space-between;
        &__text {
            font-size: ${(p) => p.theme.typography.fontSize}px;
            line-height: 5;
            color: ${(p) => p.theme.colors.textGray};
        }
        &__number {
            padding-left: 1rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            flex-direction: column;
        }
    }
    /* display: flex;
        justify-content: flex-end; */
`;
