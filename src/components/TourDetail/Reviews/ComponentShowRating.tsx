import styled from "styled-components";
import { LinearProgress } from "@material-ui/core";

import { IconStar } from "@components";
import { ComponentsRenderStars } from ".";
import { IListStar } from "@types";

interface IProps {
    number?: number;
    average?: number;
    listStars?: Array<IListStar>;
}
export const ComponentShowRating = (props: IProps) => {
    const { number, average, listStars } = props;
    return (
        <StyledComponentTabReview>
            <div className="wrapperRating">
                <div className="total">
                    <p className="total__title">{average}/5</p>
                    <ComponentsRenderStars number={average} />
                    <p className="total__text">
                        Based on <span className="total__text-highlight">{number} reviews</span>
                    </p>
                </div>
                <div className="progress">
                    {listStars?.map((item) => (
                        <div key={item.value} className="progress__list">
                            <span className="progress__list-number">{item.value}</span>
                            <span className="progress__list-icon">
                                <IconStar color="#C4C4C4" />
                            </span>
                            <span className="progress__list-progress">
                                <LinearProgress variant="determinate" value={42} />
                            </span>
                            <span className="progress__list-reviews">
                                {item.reviewsTime} reviews
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </StyledComponentTabReview>
    );
};

const StyledComponentTabReview = styled.div`
    .wrapperRating {
        display: flex;
        width: 100%;
        padding: 3rem 4rem;
        border-radius: 0.8rem;
        margin-bottom: 3.5rem;
        background-color: ${(p) => p.theme.colors.backgroundGray};
        text-align: center;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            flex-direction: column;
            padding: 3rem 0;
        }
    }
    .total {
        padding-right: 2.9rem;
        border-right: 1px solid ${(p) => p.theme.colors.gray3};
        &__title {
            font-size: 4.8rem;
            font-weight: 600;
        }
        &__text {
            font-size: 1.6rem;
            &-highlight {
                font-weight: 600;
            }
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-right: 0;
        }
    }
    .progress__list {
        flex: 70%;
        display: flex;
        flex-direction: row;
        padding-top: 1rem;
        padding-left: 3.6rem;
        text-align: left;
        &-number {
            font-size: 1.8rem;
            font-weight: ${(p) => p.theme.typography.fontWeightBold};
        }
        &-icon {
            padding: 0.5rem;
            padding-bottom: 0.5rem;
        }
        &-icon:last-child {
            padding-left: 1rem;
        }
        &-progress {
            width: 19.7rem;
            padding-top: 0.8rem;
            .MuiLinearProgress-colorPrimary {
                background-color: #e5e5e5;
            }
            .MuiLinearProgress-root {
                width: 100%;
                height: 8px;
                border-radius: 1.6rem;
            }
            .MuiLinearProgress-barColorPrimary {
                background-color: ${(p) => p.theme.colors.yellow};
            }
        }
        &-reviews {
            font-size: 1.4rem;
            font-weight: 600;
            padding-left: 0.5rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-left: 0;
            padding: 1rem;
        }
    }
`;
