import { ICard } from "@types";
import { theme } from "@styles";
import { IconStar, IconFlagMark, Location, IconCalendar } from "..";
import { StyledCard, StyledCardWithIcon } from ".";

export const Card = (props: ICard) => {
    const { typeCardIcon, title, rating, subTitle, money, time, image } = props;
    return (
        <>
            {/* WHAT: render card with specific type */}
            {typeCardIcon === true ? (
                <StyledCardWithIcon>
                    <div className="imageWrapper">
                        <img className="image" src={image} />
                        <span className="iconFlag">
                            <IconFlagMark color={theme.colors.orange} />
                        </span>
                        <div className="starWrapper">
                            <IconStar color={theme.colors.pureWhite} />
                            <span className="starWrapper__title">{rating}</span>
                        </div>
                    </div>
                    <div className="location">
                        <span>
                            <Location />
                        </span>
                        <p className="location__text">{subTitle}</p>
                    </div>
                    <h4>{title}</h4>
                    <div className="bottom">
                        <div className="time">
                            <span>
                                <IconCalendar />
                            </span>
                            <p className="time__text">{time}</p>
                        </div>
                        <div className="money">
                            from
                            <span className="money__value">{money}</span>
                        </div>
                    </div>
                </StyledCardWithIcon>
            ) : (
                <StyledCard>
                    <div className="imageWrapper">
                        <img className="image" src={image} />
                    </div>
                    <h4>{title}</h4>
                    <div className="subTitle">{subTitle}</div>
                </StyledCard>
            )}
        </>
    );
};
