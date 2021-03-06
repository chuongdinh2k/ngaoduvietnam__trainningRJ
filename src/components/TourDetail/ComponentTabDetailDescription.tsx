import styled from "styled-components";

import { IconDot, IconChecked, ComponentCollapse, ComponentMapEmbed } from "..";
import { ComponentExpendTourItinerary } from ".";
import { IDiscription } from "@types";

interface IProps {
    description?: IDiscription;
}
export const ComponentTabDetailDescription = (props: IProps) => {
    const { description } = props;
    // const { overview, included, tourItinerary, departure } = description;
    return (
        <StyledComponentTab>
            <div className="wrapper">
                <div className="content overview">
                    <h3 className="content__title">{description?.overview?.name}</h3>
                    <p className="content__text">{description?.overview.title}</p>

                    <ul className="content__wrapperlist">
                        {description?.overview?.list?.map((item, index) => (
                            <li key={index}>
                                <span className="content__icon">
                                    <IconDot color="#4F4F4F" />
                                </span>
                                <span className="content__text">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content included">
                    <h3 className="content__title">{description?.included?.name}</h3>
                    <ul className="content__wrapperlist">
                        {description?.included?.list?.map((item) => (
                            <li key={item}>
                                <span className="content__icon">
                                    <IconChecked />
                                </span>
                                <span className="content__text">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content departure">
                    <h3 className="content__title">{description?.departure.name}</h3>
                    <p className="content__subtitle">
                        {description?.departure.departure_point.title}
                    </p>
                    <ul className="content__wrapperlist">
                        {description?.departure.departure_point.list?.map((item, index) => (
                            <li key={item}>
                                <a>
                                    <span className="content__text">
                                        {index + 1}: {item}{" "}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="content__subtitle">
                        {description?.departure.departure_time.title}
                    </p>
                    <ul className="content__wrapperlist">
                        {description?.departure.departure_time.list?.map((item) => (
                            <li key={item}>
                                <a>
                                    <span className="content__text">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content itinerary">
                    <h3 className="content__title">{description?.tourItinerary?.name}</h3>
                    {description?.tourItinerary &&
                        description?.tourItinerary.list.map((item) => (
                            <div key={item.title}>
                                <ComponentCollapse title={item?.title}>
                                    <ComponentExpendTourItinerary tourItinerary={item} />
                                </ComponentCollapse>
                            </div>
                        ))}
                </div>
                <div className="content">
                    <h3 className="content__title">Maps</h3>
                    <ComponentMapEmbed />
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
            font-size: 2rem;
            padding-bottom: 1.8rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 1.6rem;
            }
        }
        &__text {
            font-size: 1.6rem;
            line-height: 30px;
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                font-size: 1.4rem;
            }
        }
        &__wrapperlist {
            li {
                list-style: none;
                display: flex;
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
