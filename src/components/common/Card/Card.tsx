import { LazyLoadImage } from "react-lazy-load-image-component";

import { ICard } from "@types";
import { theme } from "@styles";
import { IconStar, IconFlagMark, IconLocation, IconCalendar } from "..";
import { StyledCard, StyledCardWithIcon } from ".";
import { addThreeDots, convertCurrency } from "@utils";
import { MAX_LENGTH_TEXT } from "@configs";

interface IProps {
    data?: ICard;
    typeCardIcon?: boolean;
    onClick?: (id: string | undefined) => void;
}
export const Card = (props: IProps) => {
    const { data, typeCardIcon, onClick } = props;
    return (
        <>
            {/* WHAT: render card with specific type */}
            {typeCardIcon === true ? (
                <StyledCardWithIcon>
                    <div className="cardWrapper" onClick={() => onClick && onClick(data?._id)}>
                        <div className="imageWrapper">
                            {/* {data?.image && <img className="image" src={data?.image} />} */}
                            {data?.image && (
                                <LazyLoadImage
                                    className="image"
                                    alt="list image "
                                    effect="blur"
                                    src={data?.image}
                                />
                            )}
                            <span className="iconFlag">
                                <IconFlagMark color={theme.colors.orange} />
                            </span>
                            <div className="starWrapper">
                                <IconStar color={theme.colors.pureWhite} />
                                <span className="starWrapper__title">{data?.rating}</span>
                            </div>
                        </div>
                        <div className="location">
                            <span>
                                <IconLocation />
                            </span>
                            <p className="location__text">{data?.location}</p>
                        </div>
                        <h4>{addThreeDots(data?.title, MAX_LENGTH_TEXT)}</h4>
                        <div className="bottom">
                            <div className="time">
                                <span>
                                    <IconCalendar />
                                </span>
                                <p className="time__text">{data?.duration}</p>
                            </div>
                            <div className="money">
                                from
                                <span className="money__value">
                                    ${convertCurrency(data?.price)}
                                </span>
                            </div>
                        </div>
                    </div>
                </StyledCardWithIcon>
            ) : (
                <StyledCard>
                    <div className="imageWrapper" onClick={() => onClick && onClick(data?.id)}>
                        <img className="image" src={data?.image} />
                    </div>
                    <h4>{data?.title}</h4>
                    <div className="subTitle">{data?.subTitle}</div>
                </StyledCard>
            )}
        </>
    );
};
