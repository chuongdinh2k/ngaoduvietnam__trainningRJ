import React from "react";
import { makeStyles, Theme, createStyles, Fade, Modal, Backdrop } from "@material-ui/core";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { useAppSelector, selectApp, resetPopUpLightBox } from "@redux";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            border: "none",
            width: "76rem",
            maxWidth: "76rem",
            backgroundColor: "transparent",
            [theme.breakpoints.down("xs")]: {
                width: "100%",
            },
        },
    })
);

export const PopupLightBox = () => {
    // hooks
    const dispatch = useDispatch();
    // redux state
    const app = useAppSelector(selectApp);
    const { show, listImages } = app.popUpLightBox;
    const classes = useStyles();
    const handleClose = () => {
        dispatch(resetPopUpLightBox());
    };
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                        <StyledSliderPopup>
                            <Slider {...settings}>
                                {listImages &&
                                    listImages?.map((img, index) => (
                                        <div key={index} className="wrapper__image">
                                            <img className="image" src={img} />
                                        </div>
                                    ))}
                            </Slider>
                        </StyledSliderPopup>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
const StyledSliderPopup = styled.div`
    /* width: 90vh; */
    /* height: 80vh; */
    max-height: 58rem;
    padding: 4rem;
    .wrapper {
        width: 100%;
        position: relative;
        &__image {
            width: 100%;
            height: 54rem;
            position: relative;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                height: 25rem;
            }
            .icon {
                position: absolute;
                right: 2.5rem;
                top: 0;
                z-index: 99;
            }
            .image {
                height: 100%;
                width: 100%;
            }
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            width: 100%;
            margin-bottom: 10rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 100%;
            margin-bottom: 0;
        }
    }
    .slick-slide {
        width: 100%;
        img {
            width: 100%;
        }
    }
    /* .slick-dots {
        display: none !important;
    } */
`;