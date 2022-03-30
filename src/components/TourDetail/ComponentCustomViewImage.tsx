import React, { useRef, RefObject } from "react";
import Slider from "react-slick";

import { sliceArray } from "@utils";
import { setPopUpLightBox } from "@redux";
import { useDispatch } from "react-redux";
import { IconArrowRight, IconFlagMark, IconArrowLeft, StyledCustomViewImage, IconCamera } from "..";
import { ICustomButton } from "@components";

interface IProps {
    listTourImages?: Array<string>;
    listHotelImages?: Array<string>;
    viewRoomImages?: Array<string>;
}
export const ComponentCustomViewImage = (props: IProps) => {
    // hooks
    const dispatch = useDispatch();
    const { listTourImages, listHotelImages, viewRoomImages } = props;
    const sliderRef = useRef<Slider | null>(null);
    const settings = {
        customPaging: function (i: number) {
            return (
                <div className="wrapDot">
                    {/* WHAT: render list tour images */}
                    {listTourImages && (
                        <div
                            onMouseOver={() => handleGotoSlider(sliderRef, i)}
                            className="wrapDot__layer"
                            onClick={() => dispatch(setPopUpLightBox(listTourImages))}
                        >
                            {i === 3 ? (
                                <span className="wrapDot__icon">
                                    <IconCamera />
                                    <span className="wrapDot__number">
                                        {listTourImages.length - 4}+
                                    </span>
                                </span>
                            ) : (
                                ""
                            )}
                            <img
                                className="image__dot"
                                src={`${listTourImages && listTourImages[i]}`}
                            />
                        </div>
                    )}
                    {/* WHAT: render list hotel images */}
                    {listHotelImages && (
                        <div
                            onMouseOver={() => handleGotoSlider(sliderRef, i)}
                            className="wrapDot__layer"
                            onClick={() => dispatch(setPopUpLightBox(listHotelImages))}
                        >
                            {i === 3 ? (
                                <span className="wrapDot__icon">
                                    <IconCamera />
                                    <span className="wrapDot__number">
                                        {listHotelImages.length - 4}+
                                    </span>
                                </span>
                            ) : (
                                ""
                            )}
                            <img
                                className="image__dot"
                                src={`${listHotelImages && listHotelImages[i]}`}
                            />
                        </div>
                    )}
                    {/* WHAT: render list room images */}
                    {viewRoomImages && (
                        <a>
                            <img
                                className="image__dot"
                                src={`${viewRoomImages && viewRoomImages[i]}`}
                            />
                        </a>
                    )}
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <StyledCustomViewImage
            numberTour={listTourImages && listTourImages.length - 4}
            numberHotel={listHotelImages && listHotelImages.length - 4}
        >
            <div className="wrapper">
                <Slider {...settings} ref={sliderRef}>
                    {listTourImages &&
                        sliceArray(listTourImages, 0, 4)?.map((img, index) => (
                            <div key={index} className="wrapper__image">
                                <span className="icon">
                                    <IconFlagMark width="46" height="29" />
                                </span>
                                <img className="image" src={img} />
                            </div>
                        ))}
                    {/* WHAT: render data hotel */}
                    {listHotelImages &&
                        sliceArray(listHotelImages, 0, 4)?.map((img, index) => (
                            <div key={index} className="wrapper__image">
                                <span className="icon">
                                    <IconFlagMark width="46" height="29" />
                                </span>
                                <img className="image" src={img} />
                            </div>
                        ))}
                    {/* WHAT: render data room */}
                    {viewRoomImages &&
                        sliceArray(viewRoomImages, 0, 4)?.map((img, index) => (
                            <div key={index} className="wrapper__image">
                                <span className="icon">
                                    <IconFlagMark width="46" height="29" />
                                </span>
                                <img className="image" src={img} />
                            </div>
                        ))}
                </Slider>
            </div>
        </StyledCustomViewImage>
    );
};
// WHAT: custome icon arrow function next
function CustomNextArrow(props: ICustomButton) {
    const { className, onClick } = props;
    return (
        <div className={className} style={{ display: "block" }} onClick={onClick}>
            <IconArrowRight />
        </div>
    );
}
// WHAT: hover to move Slide
function handleGotoSlider(sliderRef: RefObject<Slider>, i: number) {
    sliderRef && sliderRef.current && sliderRef.current.slickGoTo(i);
}
// WHAT: custome icon arrow function next
function CustomPrevArrow(props: ICustomButton) {
    const { className, onClick } = props;
    return (
        <div className={className} style={{ display: "block" }} onClick={onClick}>
            <IconArrowLeft />
        </div>
    );
}
