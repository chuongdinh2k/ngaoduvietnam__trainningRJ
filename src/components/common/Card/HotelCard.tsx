import { LazyLoadImage } from "react-lazy-load-image-component";

import { IHotel } from "@types";
import { theme } from "@styles";
import { StyledCardWithIcon } from ".";
import { IconFlagMark, IconLocation } from "..";
import { ComponentsRenderStars } from "@components";
import { convertCurrency } from "@utils";

interface IProps {
    data?: IHotel;
    onClick?: (id: string | undefined) => void;
}

export const HotelCard = (props: IProps) => {
    const { data, onClick } = props;
    return (
        <>
            <StyledCardWithIcon>
                <div className="cardWrapper" onClick={() => onClick && onClick(data?._id)}>
                    <div className="imageWrapper">
                        <LazyLoadImage
                                    className="image"
                                    alt="list image "
                                    effect="blur"
                                    src={data?.image && data?.image}
                                />
                        <span className="iconFlag">
                            <IconFlagMark
                                color={data?.marked ? theme.colors.orange : theme.colors.pureWhite}
                            />
                        </span>
                        <div className="renderStars">
                            <ComponentsRenderStars number={data?.star} small />
                        </div>
                    </div>
                    <div className="location">
                        <span>
                            <IconLocation />
                        </span>
                        <p className="location__text">{data?.location}</p>
                    </div>
                    <h4>{data?.title}</h4>
                    <div className="bottom">
                        <div className="rating">
                            <span className="rating__point">Rating: {data?.rating}</span>
                            <span className="rating__text">{`(${data?.numberReviews} reviews)`}</span>
                        </div>
                        <div className="money">
                            from
                            <span className="money__value">{convertCurrency(data?.price)}</span>
                            /night
                        </div>
                    </div>
                </div>
            </StyledCardWithIcon>
        </>
    );
};
