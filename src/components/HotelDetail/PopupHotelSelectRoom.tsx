import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Grid } from "@material-ui/core";
import styled from "styled-components";

import { ComponentCustomViewImage, IconChecked } from "..";

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
}

const hotelListRoom = [
    "https://res.cloudinary.com/chuongdinh/image/upload/v1645063929/about4_kwrzro.png",
    "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional3_gxl9t7.png",
    "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional2_ykxdqc.png",
    "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional3_gxl9t7.png",
    "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional1_culpgb.png",
];
export const PopupHotelSelectRoom = (props: IProps) => {
    // props
    const { isOpen, handleClose } = props;
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
                                                <span className="highlight-primary">$40.00</span>
                                                /night
                                            </p>
                                            <div className="left__top-btn">Select Room</div>
                                        </div>
                                        <div className="left__content">
                                            <ComponentCustomViewImage
                                                listHotelImages={hotelListRoom}
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <div className="right">
                                        <div className="right__top">
                                            <span className="right__top-text">90 m2</span>
                                            <span className="right__top-text">90 m2</span>
                                            <span className="right__top-text">90 m2</span>
                                        </div>
                                        <div className="right__text">
                                            <p className="right__text-child">
                                                This air-conditioned room features large windows and
                                                a balcony with views of the city and sea. It
                                                contains a sitting area, flat-screen TV, a fridge
                                                and tea-and-coffee-making facilities. The bathroom
                                                has a shower and toilet.
                                            </p>

                                            <p className="right__text-child">
                                                Maximum occupancy is 2 adults and 1 child under the
                                                age of 2 years old in a crib. Please note that extra
                                                beds cannot be accommodated in this room type.
                                            </p>
                                        </div>
                                        <div className="right__list">
                                            <p className="right__list-title">Room Facilities:</p>
                                            <ul className="right__wrapperList">
                                                <li>
                                                    <a>
                                                        {" "}
                                                        <span className="content__icon">
                                                            <IconChecked />
                                                        </span>
                                                        <span className="right__list-text">
                                                            Air Conditioning
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        {" "}
                                                        <span className="content__icon">
                                                            <IconChecked />
                                                        </span>
                                                        <span className="right__list-text">
                                                            Air Conditioning
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        {" "}
                                                        <span className="content__icon">
                                                            <IconChecked />
                                                        </span>
                                                        <span className="right__list-text">
                                                            Air Conditioning
                                                        </span>
                                                    </a>
                                                </li>
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
        /* width: 1170px; */
        max-width: 1170px;
        height: 60rem;
        overflow-y: auto;
        background-color: ${(p) => p.theme.colors.pureWhite};
        padding: 3rem 4rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 33rem;
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
                background-color: ${(p) => p.theme.colors.orange};
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    font-size: 1.2rem;
                    padding: 0.5rem 1.6rem;
                    margin-top: 0.5rem;
                }
            }
        }
        &__content {
            padding-top: 2rem;
            height: 55rem;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                height: 30rem;
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
                font-size: 1.6rem;
                font-weight: ${(p) => p.theme.typography.fontWeightMedium};
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
            li {
                list-style: none;
            }
        }
    }
`;
