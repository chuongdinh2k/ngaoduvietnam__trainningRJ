import styled from "styled-components";

import { IconDot, IconChecked } from "..";
import { ComponentDetailCollapse } from ".";

interface ITourItinerary {
    stopTime?: number;
    title?: string;
    text?: string;
    duration?: string;
    admission?: string;
}
interface IDiscription {
    overview: {
        name?: string;
        title?: string;
        list?: Array<string>;
    };
    included: {
        name?: string;
        list?: Array<string>;
    };
    departure: {
        name?: string;
        departure_point: {
            title?: string;
            list?: Array<string>;
        };
        departure_time: {
            title?: string;
            list?: Array<string>;
        };
    };
    tourItinerary: {
        name?: string;
        list: Array<ITourItinerary>;
    };
}
interface IProps {
    discription: IDiscription;
}
export const ComponentTabDetailDescription = (props: IProps) => {
    const { discription } = props;
    const { overview, included, tourItinerary, departure } = discription;
    return (
        <StyledComponentTab>
            <div className="wrapper">
                <div className="content overview">
                    <h3 className="content__title">{overview.name}</h3>
                    <p className="content__text">{overview.title}</p>

                    <ul className="content__wrapperlist">
                        {overview.list?.map((item, index) => (
                            <li key={index}>
                                <a>
                                    <span className="content__icon">
                                        <IconDot color="#4F4F4F" />
                                    </span>
                                    <span className="content__text">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content included">
                    <h3 className="content__title">{included.name}</h3>
                    <ul className="content__wrapperlist">
                        {included.list?.map((item) => (
                            <li key={item}>
                                <a>
                                    <span className="content__icon">
                                        <IconChecked />
                                    </span>
                                    <span className="content__text">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content departure">
                    <h3 className="content__title">{departure.name}</h3>
                    <p className="content__subtitle">{departure.departure_point.title}</p>
                    <ul className="content__wrapperlist">
                        {departure.departure_point.list?.map((item, index) => (
                            <li key={item}>
                                <a>
                                    <span className="content__text">
                                        {index + 1}: {item}{" "}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="content__subtitle">{departure.departure_time.title}</p>
                    <ul className="content__wrapperlist">
                        {departure.departure_time.list?.map((item) => (
                            <li key={item}>
                                <a>
                                    <span className="content__text">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content itinerary">
                    <h3 className="content__title">{tourItinerary?.name}</h3>
                    {tourItinerary &&
                        tourItinerary.list.map((item) => (
                            <div key={item.title}>
                                <ComponentDetailCollapse tourItinerary={item} />
                            </div>
                        ))}
                </div>
            </div>
        </StyledComponentTab>
    );
};
export const StyledComponentTab = styled.div`
    .wrapper {
        padding-bottom: 4rem;
    }
    .content {
        border-bottom: 1px solid #888888;
        padding-top: 2.6rem;
        padding-bottom: 4rem;
        &__title {
            font-size: 20px;
            padding-bottom: 1.8rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &__text {
            font-size: 16px;
            line-height: 30px;
        }
        &__wrapperlist {
            li {
                list-style: none;
            }
        }
        &__icon {
            padding-right: 1.8rem;
        }
        &__subtitle {
            font-size: 16px;
            line-height: 30px;
            font-weight: ${(p) => p.theme.typography.fontWeightMedium};
            color: ${(p) => p.theme.colors.darkBlack};
        }
    }
    .additionalInfo {
        border-bottom: none;
    }
`;
