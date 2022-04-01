import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { Card, IconNextPagination, IconPrevPagination } from "@components";
import { ICard } from "@types";
import clsx from "clsx";

interface IStyledSlider {
    showPrev?: boolean;
}
interface ISlider {
    data?: Array<ICard>;
    numberSlides?: number;
    typeCardIcon?: boolean;
}
export const SliderCustom = (props: ISlider) => {
    const { typeCardIcon, data, numberSlides } = props;
    const [current, setCurrent] = useState<boolean>(false);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: numberSlides ? numberSlides : 3,
        slidesToScroll: numberSlides ? numberSlides : 3,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomLeftArrow current={current} />,
        afterChange: function (index: number) {
            if (index >= 3) {
                setCurrent(true);
            } else {
                setCurrent(false);
            }
        },
        responsive: [
            {
                breakpoint: 4000,
                settings: {
                    slidesToShow: numberSlides ? numberSlides : 3,
                    slidesToScroll: numberSlides ? numberSlides : 3,
                    infinite: false,
                    dots: true,
                    afterChange: function (index: number) {
                        if (index >= 3) {
                            setCurrent(true);
                        } else {
                            setCurrent(false);
                        }
                    },
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true,
                    afterChange: function (index: number) {
                        if (index >= 3) {
                            setCurrent(true);
                        } else {
                            setCurrent(false);
                        }
                    },
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    afterChange: function (index: number) {
                        if (index >= 2) {
                            setCurrent(true);
                        } else {
                            setCurrent(false);
                        }
                    },
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <StyledSlider>
            <Slider {...settings}>
                {/* WHAT: Check data's undefined or not then map data */}
                {data
                    ? data.map((item: ICard, index: number) => (
                          <div key={index} className="wrapperCard">
                              <Card
                                  //  WHAT: check render normal card, not card with icon
                                  typeCardIcon={typeCardIcon}
                                  data={item}
                              />
                          </div>
                      ))
                    : ""}
            </Slider>
        </StyledSlider>
    );
};
interface ICustomeArrow {
    className?: string;
    current?: boolean;
    onClick?: () => void;
}
// WHAT: custome icon arrow function next
function CustomNextArrow(props: ICustomeArrow) {
    const { className, onClick } = props;
    return (
        <div className={className} style={{ display: "block" }} onClick={onClick}>
            <IconNextPagination />
        </div>
    );
}
// WHAT: custome icon arrow function next
function CustomLeftArrow(props: ICustomeArrow) {
    const { className, current, onClick } = props;
    return (
        <div className={clsx(current ? "show" : "hide", className)} onClick={onClick}>
            <IconPrevPagination />
        </div>
    );
}
export const StyledSlider = styled.div<IStyledSlider>`
    .wrapperCard {
        @media (min-width: 2000px) {
        }
    }
    .slick-slider {
        /* @media (min-width: 2000px) {
            overflow: hidden;
        } */
    }
    .hide {
        display: none !important;
    }
    .show {
        display: block !important;
        top: 11rem;
        left: -40px;
    }
    .slick-disabled {
        display: none !important;
    }
    .slick-slide {
        width: 25.5rem;
        padding-right: 3rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-right: 0;
        }
        .slick-next {
            top: 11rem;
            right: -4.5rem;
            @media (min-width: 2000) {
                right: -6.5rem !important;
            }
            @media (max-width: 768px) {
                right: 0;
            }
        }
    }
    .slick-list {
        margin-right: -2.5rem;
        @media (min-width: 2000px) {
            margin-right: -3.5rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            margin-right: 0rem;
            padding: 0px;
            padding-left: 0 !important;
        }
    }
    .slick-next {
        top: 11rem;
        right: -4.5rem !important;
        @media (min-width: 2000px) {
            right: -7rem;
        }
        @media (max-width: 768px) {
            right: -5rem;
        }
    }
    .slick-arrow {
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            display: none !important;
        }
    }
    .slick-dots {
        display: none !important;
    }
`;
