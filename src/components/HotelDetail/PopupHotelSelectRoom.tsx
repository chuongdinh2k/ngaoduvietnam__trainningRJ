import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Grid } from "@material-ui/core";
import styled from "styled-components";

import { ComponentCustomViewImage, GroupPeople, IconBed, IconChecked, IconSquare } from "..";
import { ISelectRoom } from "@types";
import { convertCurrency } from "@utils";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    })
);

interface IProps {
    isOpen: boolean;
    handleClose: () => void;
    selectRoom?: ISelectRoom;
    handleSelectRoom?: () => void;
    isSelected: boolean;
}

export const PopupHotelSelectRoom = (props: IProps) => {
    // props
    const { isOpen, handleClose, isSelected, selectRoom, handleSelectRoom } = props;
    const classes = useStyles();
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpen}>
                    <StyledComponentPopup>
                        <div className="wrapperPopup">
                            <h3 className="title">Standard Room</h3>
                            <Grid container>
                                <Grid item xs={12} md={7}>
                                    <div className="left">
                                        <div className="left__top">
                                            <p className="left__top-text">
                                                <del>$600</del>
                                                <span className="highlight-primary">
                                                    ${convertCurrency(selectRoom?.price)}
                                                </span>
                                                /night
                                            </p>
                                            <div
                                                className="left__top-btn"
                                                onClick={handleSelectRoom}
                                            >
                                                {isSelected ? "Selected Room" : "Select Room"}
                                            </div>
                                        </div>
                                        <div className="left__content">
                                            <ComponentCustomViewImage
                                                viewRoomImages={selectRoom?.viewImages}
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <div className="right">
                                        <div className="right__top">
                                            <span className="right__top-text">
                                                <span className="right__top-icon">
                                                    <IconSquare />
                                                </span>
                                                <span>{selectRoom?.type?.dimension}</span>
                                            </span>
                                            <span className="right__top-text">
                                                <span className="right__top-icon">
                                                    <IconBed />
                                                </span>
                                                <span>{selectRoom?.type?.equipment}</span>
                                            </span>
                                            <span className="right__top-text">
                                                <span className="right__top-icon">
                                                    <GroupPeople color="#4f4f4f" />
                                                </span>
                                                <span>{selectRoom?.type?.group}</span>
                                            </span>
                                            {}
                                        </div>
                                        <div className="right__text">
                                            {selectRoom?.about?.map((paragraph, index) => (
                                                <p key={index} className="right__text-child">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                        <div className="right__list">
                                            <p className="right__list-title">Room Facilities:</p>
                                            <ul className="right__wrapperList">
                                                <Grid container>
                                                    {selectRoom?.advanced?.map((item) => (
                                                        <Grid key={item} item xs={6}>
                                                            <a>
                                                                {" "}
                                                                <span className="content__icon">
                                                                    <IconChecked />
                                                                </span>
                                                                <span className="right__list-text">
                                                                    {item}
                                                                </span>
                                                            </a>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </ul>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </StyledComponentPopup>
                </Fade>
            </Modal>
        </div>
    );
};
const StyledComponentPopup = styled.div`
    .wrapperPopup {
        max-width: 1170px;
        height: 60rem;
        overflow-y: auto;
        background-color: ${(p) => p.theme.colors.pureWhite};
        padding: 3rem 4rem;
        @media (min-width: 1441px) {
            height: 100rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            width: 55rem;
            height: 50rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 37rem;
            height: 60rem;
        }
    }
    .title {
        font-size: 3rem;
        font-weight: ${(p) => p.theme.typography.fontWeightBold};
    }
    .highlight-primary {
        font-size: 2.4rem;
        font-weight: ${(p) => p.theme.typography.fontWeightBold};
        color: ${(p) => p.theme.colors.red};
        padding-left: 0.5rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 1.6rem;
        }
    }
    .left {
        &__top {
            display: flex;
            justify-content: space-between;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                flex-direction: column;
            }
            &-text {
                font-size: 1.6rem;
                color: #5e6d77;
            }
            &-btn {
                color: ${(p) => p.theme.colors.pureWhite};
                padding: 1rem 3.2rem;
                font-size: 1.6rem;
                font-weight: ${(p) => p.theme.typography.fontWeightBold};
                text-align: center;
                cursor: pointer;
                background-color: ${(p) => p.theme.colors.orange};
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    font-size: 1.4rem;
                    padding: 1rem 1.6rem;
                    margin-top: 0.5rem;
                }
            }
        }
        &__content {
            padding-top: 2rem;
            height: 55rem;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}md) {
                height: 40rem;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                height: 30rem;
            }
            .wrapper__image {
                height: 42rem;
                @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                    height: 30rem;
                }
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    height: 19rem;
                }
            }
            .slick-dots {
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    bottom: -6rem;
                }
            }
            .slick-dots li {
                @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                    width: 9.7rem;
                    height: 7.7rem;
                    margin-right: 2rem;
                }
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    width: 6rem;
                    height: 5rem;
                    margin-right: 1.2rem;
                }
            }
        }
    }
    .right {
        padding-left: 3rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-left: 0;
        }
        &__top {
            display: flex;
            justify-content: space-between;
            padding: 2.2rem 0;
            border-bottom: 1px solid #e5e5e5;
            &-text {
                display: flex;
                font-size: 1.6rem;
                font-weight: ${(p) => p.theme.typography.fontWeightMedium};
                color: #0069e4;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    display: flex;
                    flex-direction: column;
                }
            }
            &-icon {
                padding-right: 1rem;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    text-align: center;
                }
            }
        }
        &__text {
            padding: 2rem 0;
            &-child {
                font-size: 1.6rem;
                line-height: 2.4rem;
            }
            &-child:nth-child(1) {
                padding-bottom: 3rem;
            }
        }

        &__wrapperList {
            display: flex;
            flex-direction: column;
            li {
                width: 50%;
                list-style: none;
            }
        }
        &__list {
            border-top: 1px solid #e5e5e5;
            padding-top: 2.4rem;
            &-title {
                font-size: 1.6rem;
                font-weight: ${(p) => p.theme.typography.fontWeightBold};
                padding-bottom: 1.4rem;
            }
            &-text {
                font-size: 1.6rem;
                padding-left: 1.2rem;
                line-height: 2;
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    font-size: 1.2rem;
                }
            }
        }
    }
`;
