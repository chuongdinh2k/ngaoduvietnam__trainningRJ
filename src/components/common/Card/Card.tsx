import { ICard } from "@types";
import { theme } from "@styles";
import { IconStar, IconFlagMark, IconLocation, IconCalendar } from "..";
import { StyledCard, StyledCardWithIcon } from ".";

interface IProps {
    data?: ICard;
    typeCardIcon?: boolean;
    onClick?: (id: number | undefined) => void;
}
export const Card = (props: IProps) => {
    const { data, typeCardIcon, onClick } = props;
    return (
        <>
            {/* WHAT: render card with specific type */}
            {typeCardIcon === true ? (
                <StyledCardWithIcon>
                    <div className="cardWrapper">
                        <div className="imageWrapper">
                            <img className="image" src={data?.image} />
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
                            <p className="location__text">{data?.subTitle}</p>
                        </div>
                        <h4 onClick={() => onClick && onClick(data?.id)}>{data?.title}</h4>
                        <div className="bottom">
                            <div className="time">
                                <span>
                                    <IconCalendar />
                                </span>
                                <p className="time__text">{data?.duration}</p>
                            </div>
                            <div className="money">
                                from
                                <span className="money__value">{data?.money}</span>
                            </div>
                        </div>
                    </div>
                </StyledCardWithIcon>
            ) : (
                <StyledCard>
                    <div className="imageWrapper">
                        <img className="image" src={data?.image} />
                    </div>
                    <h4 onClick={() => onClick && onClick(data?.id)}>{data?.title}</h4>
                    <div className="subTitle">{data?.subTitle}</div>
                </StyledCard>
            )}
        </>
    );
};
