import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Slider from "react-slick";
import { dataTourDetail } from "@demos";
import { IconFlagMark } from "../common";

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

export const PopupLightBox = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <button type="button" onClick={handleOpen}>
                View light box
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Slider {...settings}>
                            {dataTourDetail?.listImage &&
                                dataTourDetail?.listImage?.map((img, index) => (
                                    <div key={index} className="wrapper__image">
                                        <span className="icon">
                                            <IconFlagMark width="46" height="29" />
                                        </span>
                                        <img className="image" src={img} />
                                    </div>
                                ))}
                        </Slider>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
