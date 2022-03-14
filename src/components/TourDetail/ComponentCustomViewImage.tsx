import styled from "styled-components";
import Slider from "react-slick";

import { IconFlagMark } from "..";
import { sliceArray } from "@utils";

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
    const { listTourImages, listHotelImages, viewRoomImages } = props;
    const settings = {
        customPaging: function (i: number) {
            return (
                <div className="wrapDot">
                    {/* WHAT: render list tour images */}
                    {listTourImages && (
                        <a>
                            <img
                                className="image__dot"
                                src={`${listTourImages && listTourImages[i]}`}
                            />
                        </a>
                    )}
                    {/* WHAT: render list hotel images */}
                    {listHotelImages && (
                        <a>
                            <img
                                className="image__dot"
                                src={`${listHotelImages && listHotelImages[i]}`}
                            />
                        </a>
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
        infinite: true,
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
const StyledCustomViewImage = styled.div<IStyledCustomViewImage>`
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
        bottom: -13rem;
        li {
            width: 13.7rem;
            height: 9.7rem;
            margin: 0;
            margin-right: 2.9rem;
            .wrapDot {
                width: 100%;
                height: 100%;
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${(p) => p.theme.colors.darkBlack};
                    opacity: 0.5;
                }
            }

            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                width: 4.7rem;
                height: 3.7rem;
                margin-right: 0.9rem;
            }
        }
        .slick-active {
            .wrapDot {
                &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${(p) => p.theme.colors.darkBlack};
                    opacity: 0 !important;
                }
            }
        }
        li:nth-child(4) {
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
                color: ${(p) => p.theme.colors.pureWhite};
                @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                    left: 40%;
                    top: 20%;
                }
            }
        }
        .image__dot {
            width: 100%;
            height: 100%;
        }
        li:last-of-type {
            margin-right: 0;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            bottom: -5rem;
        }
    }
`;
