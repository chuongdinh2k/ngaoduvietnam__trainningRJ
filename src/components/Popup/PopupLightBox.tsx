import React from "react";
import { makeStyles, createStyles, Fade, Modal, Backdrop, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CancelIcon from "@material-ui/icons/Cancel";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { setPopUpLightBox, useAppSelector, selectApp, resetPopUpLightBox } from "@redux";
import clsx from "clsx";

const useStyles = makeStyles(() =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {},
    })
);

export interface ICustomButton {
    onClick?: () => void;
    className?: string;
}
export const PopupLightBox = () => {
    // hooks
    const dispatch = useDispatch();
    // redux state
    const app = useAppSelector(selectApp);
    const { show, listImages, activeIndex } = app.popUpLightBox;
    const classes = useStyles();
    // component state
    const handleClose = () => {
        dispatch(resetPopUpLightBox());
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={show}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={show}>
                    <div className={classes.paper}>
                        <StyledPopUpLightBox>
                            <div onClick={handleClose} className="xs__cancelButton">
                                <CancelIcon fontSize="large" />
                            </div>
                            <div className="wrapper">
                                <div className="wrapperImage">
                                    {listImages && listImages.length > 0 && (
                                        <LazyLoadImage
                                            alt="list image "
                                            effect="blur"
                                            className="image"
                                            src={listImages[activeIndex]}
                                        />
                                    )}
                                </div>
                                <div className="wrapperList">
                                    <div className="list">
                                        <Grid container spacing={2}>
                                            {listImages?.map((image, index) => (
                                                <Grid item xs={3} md={4} key={index}>
                                                    <div
                                                        className={clsx(
                                                            index === activeIndex ? "active" : "",
                                                            "list__image"
                                                        )}
                                                        onClick={() =>
                                                            dispatch(
                                                                setPopUpLightBox({
                                                                    listImages: listImages,
                                                                    activeIndex: index,
                                                                    show: true,
                                                                })
                                                            )
                                                        }
                                                    >
                                                        <LazyLoadImage
                                                            alt="list image "
                                                            effect="blur"
                                                            className="image"
                                                            src={image}
                                                        />
                                                    </div>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </StyledPopUpLightBox>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
const StyledPopUpLightBox = styled.div`
    position: relative;
    border: none;
    width: 90rem;
    height: 60vh;
    max-width: 90rem;
    background-color: white;
    padding: 2rem;
    @media (min-width: 2000px) {
        height: 20vh;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
        width: 100%;
    }
    .xs__cancelButton {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 9;
        .MuiSvgIcon-root {
            width: 2em;
            height: 2em;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            display: block;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            .MuiSvgIcon-root {
                width: 1em;
                height: 1em;
            }
        }
    }
    .wrapper {
        display: flex;
        height: 100%;
        background-color: white;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            flex-direction: column;
            padding-top: 1rem;
        }
    }
    .wrapperImage {
        width: 50%;
        height: 100%;
        overflow: hidden;

        &:hover {
            cursor: pointer;
        }
        &:hover .image {
            transform: scale(1.1);
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            width: 100%;
            height: 40rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            height: 30rem;
        }
        .image {
            transition: 0.3s ease-in-out;
            width: 100%;
            height: 100%;
        }
    }
    .wrapperList {
        padding-left: 2rem;
        width: 50%;
        overflow-y: auto;
        overflow-x: hidden;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            width: 100%;
            padding-left: 0;
            margin-top: 2rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            margin-top: 2rem;
        }
    }
    .list {
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        }

        &__image {
            height: 10rem;
            width: 100%;
            cursor: pointer;
            transition: 250ms;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                height: 5rem;
            }
            &:hover {
                transform: translateY(-5px);
            }
            .image {
                width: 100%;
                height: 100%;
            }
        }
        .active {
            border: 2px solid ${(p) => p.theme.colors.orange};
        }
    }
`;
