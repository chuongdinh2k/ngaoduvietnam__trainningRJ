import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { Card, IconArrowNext } from "@components";
import { theme } from "@styles";
import { ICard } from "@types";

interface ISlider {
    data?: Array<ICard>;
    numberSlides?: number;
    typeCardIcon?: boolean;
}
export const SliderCustom = (props: ISlider) => {
    const { typeCardIcon } = props;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: props.numberSlides ? props.numberSlides : 3,
        slidesToScroll: props.numberSlides ? props.numberSlides : 3,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: theme.breakpoints.values.md,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: theme.breakpoints.values.sm,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
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
                {props.data
                    ? props?.data.map((item: ICard, index: number) => (
                          <Card
                              key={index}
                              //  WHAT: check render normal card, not card with icon
                              typeCardIcon={typeCardIcon}
                              title={item.title}
                              subTitle={item.subTitle}
                              image={item.image}
                              money={item.money}
                              time={item.time}
                              rating={item.rating}
                          />
                      ))
                    : ""}
            </Slider>
        </StyledSlider>
    );
};
// WHAT: custome icon arrow function next
function CustomNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
            <IconArrowNext />
        </div>
    );
}
const StyledSlider = styled.div`
    .slick-slide {
        width: 25.5rem;
        padding-right: 3rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-right: 0;
        }
    }
    .slick-list {
        margin-right: -2.5rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            margin-right: 0rem;
        }
    }
    .slick-next {
        top: 11rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            display: none !important;
        }
    }
    .slick-dots {
        display: none !important;
    }
`;
