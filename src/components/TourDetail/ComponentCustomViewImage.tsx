import styled from "styled-components";
import Slider from "react-slick";

import { IconFlagMark } from "..";
import { sliceArray } from "@utils";

// const listImages = [
//     {
//         id:1,
//         url:[
//             "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional3_gxl9t7.png",
//             "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional3_gxl9t7.png",
//             "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional2_ykxdqc.png",
//             "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional3_gxl9t7.png",
//             "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional1_culpgb.png",

//         ]
//     }
// ];

interface IStyledCustomViewImage {
    number?: number;
}
interface IProps {
    listImages?: Array<string>;
}
export const ComponentCustomViewImage = (props: IProps) => {
    const { listImages } = props;
    const settings = {
        customPaging: function (i: number) {
            return (
                <div className="wrapDot">
                    <a>
                        <img className="image__dot" src={`${listImages && listImages[i]}`} />
                    </a>
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
        <StyledCustomViewImage number={listImages && listImages.length - 4}>
            <div className="wrapper">
                <Slider {...settings}>
                    {sliceArray(listImages, 0, 4)?.map((img, index) => (
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
            position: relative;
            .icon {
                position: absolute;
                right: 2.5rem;
                top: 0;
                z-index: 99;
            }
            .image {
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
        img {
            width: 100%;
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
                content: "${(p) => p.number}+";
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
