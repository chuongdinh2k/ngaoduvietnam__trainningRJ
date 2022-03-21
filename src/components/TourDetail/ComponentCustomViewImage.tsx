import styled from "styled-components";
import Slider from "react-slick";

import { IconFlagMark } from "..";
import { sliceArray } from "@utils";
import { IconCamera } from "..";
import { setPopUpLightBox } from "@redux";
import { useDispatch } from "react-redux";

interface IStyledCustomViewImage {
    numberTour?: number;
    numberHotel?: number;
}
interface IProps {
    listTourImages?: Array<string>;
    listHotelImages?: Array<string>;
    viewRoomImages?: Array<string>;
}
export const ComponentCustomViewImage = (props: IProps) => {
    // hooks
    const dispatch = useDispatch();
    const { listTourImages, listHotelImages, viewRoomImages } = props;
    const settings = {
        customPaging: function (i: number) {
            return (
                <div className="wrapDot">
                    {/* WHAT: render list tour images */}
                    {listTourImages && (
                        <div
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
        // infinite: true,
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
                <Slider {...settings}>
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
export const StyledCustomViewImage = styled.div<IStyledCustomViewImage>`
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
            // &__image {
            //     height:
            // }
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            width: 100%;
            margin-bottom: 0;
        }
    }
    .slick-slide {
        img {
            width: 100%;
        }
    }
    .slick-prev {
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            left: 0;
            background: ${(p) => p.theme.colors.pureWhite} !important;
            color: ${(p) => p.theme.colors.pureWhite} !important;
        }
    }
    .slick-next {
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            right: 0;
        }
    }
    .slick-dots {
        text-align: left;
        width: 100%;
        overflow: hidden;
        bottom: -13rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            bottom: -11rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            bottom: -6rem;
        }
        li {
            width: 13.7rem;
            height: 9.7rem;
            margin: 0;
            margin-right: 2.9rem;
            .wrapDot {
                width: 100%;
                height: 100%;
                position: relative;
                &__icon {
                    position: absolute;
                    z-index: 99;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                &__number {
                    font-size: 1.4rem;
                    font-weight: 700;
                }
                /* &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${(p) => p.theme.colors.pureWhite};
                    opacity: 0.5;
                } */
                &__layer {
                    height: 100%;
                    background-color: ${(p) => p.theme.colors.pureWhite};
                    opacity: 0.5;
                }
            }

            @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
                width: 13.9rem;
                margin-right: 1.5rem;
            }
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                width: 7.7rem;
                height: 4.7rem;
                margin-right: 0.9rem;
            }
        }
        .slick-active {
            .wrapDot {
                height: 100%;
                &__layer {
                    height: 100%;
                    background-color: transparent !important;
                    opacity: 1;
                    /* opacity: 0 !important; */
                }
                /* &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${(p) => p.theme.colors.darkBlack};
                    opacity: 0 !important;
                } */
            }
        }
        /* li:nth-child(4) {
            position: relative;
            &:after {
                content: "${(p) => (p.numberTour as number) || (p.numberHotel as number)}+";
                width: 100%;
                position: absolute;
                z-index: 999;
                top: 40%;
                left: 50%;
                font-size: 16px;
                font-weight: ${(p) => p.theme.typography.fontWeightBold};
                color: ${(p) => p.theme.colors.darkBlack};
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    left: 40%;
                    top: 20%;
                }
            }
        } */
        .image__dot {
            width: 100%;
            height: 100%;
        }
        li:last-of-type {
            margin-right: 0;
        }
    }
`;
