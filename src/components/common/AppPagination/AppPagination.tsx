import React, { ChangeEvent } from "react";
import { makeStyles, createStyles, Grid, Button } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";
import { PaginationItem } from "@material-ui/lab";

import { IconPrevPagination, IconNextPagination } from "..";

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
                padding: "0 17px",
                "&:hover": {
                    color: `${theme.colors.darkBlack}`,
                    backgroundColor: `${theme.colors.gray4}`,
                },
            },
            "& .Mui-selected": {
                backgroundColor: `${theme.colors.darkBlack}`,
                color: `${theme.colors.pureWhite}`,
            },
        },
        btnPrev: {
            color: `${theme.colors.darkBlack}`,
            backgroundColor: `${theme.colors.gray4}`,
            borderRadius: 0,
            border: "none",
            boxShadow: "none",
            height: "32px",
            margin: "0 3px",
            padding: "0 6px",
            fontSize: "0.875rem",
            minWidth: "32px",
            paddingLeft: "1.5rem",
            "&:hover": {
                cursor: "pointer",
            },
            "& .MuiButtonBase-root.Mui-disabled": {
                cursor: "no-drop !important",
            },
            // padding: 0,
        },
        selected: {
            backgroundColor: `${theme.colors.darkBlack}`,
            color: `${theme.colors.pureWhite}`,
        },
    })
);

interface IProps {
    totalPage?: number;
    showPerpage?: boolean;
    currentPage?: number;
    handleChange?: (event: ChangeEvent<any>, value: number) => void;
}
export const AppPagination = (props: IProps) => {
    const { totalPage, showPerpage, currentPage, handleChange } = props;
    const classes = useStyles();
    const itemRender = ({ ...props }) => {
        const { onClick, type, disabled } = props;
        if (type === "previous") {
            return (
                <Button
                    variant="contained"
                    size="medium"
                    onClick={onClick}
                    className={classes.btnPrev}
                    disableElevation
                    disabled={disabled}
                    startIcon={<IconPrevPagination />}
                />
            );
        }
        if (type === "next") {
            return (
                <Button
                    variant="contained"
                    size="medium"
                    onClick={onClick}
                    disableElevation
                    disabled={disabled}
                    className={classes.btnPrev}
                    startIcon={<IconNextPagination />}
                />
            );
        }
        return <PaginationItem {...props} />;
    };
    return (
        <StyledAppPagination>
            {Number(totalPage) > 0 && (
                <Grid container>
                    {showPerpage && <Grid item xs={12} md={4}></Grid>}
                    <Grid item xs={12} md={8}>
                        <div className="wrapper">
                            {showPerpage && (
                                <p className="wrapper__text">
                                    Showing{" "}
                                    <span className="wrapper__number">
                                        {currentPage}/{totalPage}
                                    </span>
                                </p>
                            )}
                            <div className="paginationWrapper">
                                <div className={classes.root}>
                                    <Pagination
                                        classes={{ ul: classes.ul }}
                                        count={totalPage}
                                        page={currentPage}
                                        onChange={handleChange}
                                        variant="outlined"
                                        renderItem={itemRender}
                                        siblingCount={2}
                                        boundaryCount={4}
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            )}
        </StyledAppPagination>
    );
};
const StyledAppPagination = styled.div`
    .wrapper {
        display: flex;
        justify-content: space-between;
        padding-bottom: 3rem;
        &__text {
            font-size: ${(p) => p.theme.typography.fontSize}px;
            line-height: 5;
            color: ${(p) => p.theme.colors.textGray};
        }
        &__number {
            padding-left: 1rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            padding-bottom: 1rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            flex-direction: column;
            padding-bottom: 1rem;
        }
        .MuiPaginationItem-root {
            font-weight: 500;
            font-size: 1.4rem;
        }
    }
`;
