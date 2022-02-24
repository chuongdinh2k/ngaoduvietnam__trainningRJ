import styled from "styled-components";

import { IconLocation, IconStar } from "..";

interface IInfor {
    id?: string;
    title?: string;
    location?: string;
    rating?: number;
    duration?: string;
    typeOfTour?: string;
}
interface IProps {
    inforTour?: IInfor;
}
export const ComponentDetailInfor = (props: IProps) => {
    const { inforTour } = props;
    return (
        <StyledComponentDetailInfor>
            <div className="wrapper">
                <h3>{inforTour?.title}</h3>
                <div className="location">
                    <span className="location__icon">
                        <IconLocation width="16" height="18" />
                    </span>
                    <span className="location__text">{inforTour?.location}</span>
                </div>
                <div className="wrapperStar">
                    <div className="star">
                        <span className="star__icon">
                            <IconStar />
                        </span>
                        <span className="star__text">{inforTour?.rating}</span>
                    </div>
                    <span className="reviews__text">128 reviews</span>
                </div>
            </div>
        </StyledComponentDetailInfor>
    );
};
const StyledComponentDetailInfor = styled.div`
    .wrapper {
        padding: 2rem 0;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 2.5rem 0;
        }
    }
    h3 {
        color: ${(p) => p.theme.colors.darkBlack};
        font-size: 3.6rem;
        line-height: 1;
        padding-bottom: 2.3rem;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 2rem;
        }
    }
    .location {
        &__text {
            color: ${(p) => p.theme.colors.gray1};
            font-size: 16px;
            padding-left: 1.4rem;
        }
    }
    .wrapperStar {
        display: flex;
    }
    .star {
        margin-top: 1.6rem;
        padding: 0.7rem 0.4rem;
        width: 6.5rem;
        background-color: ${(p) => p.theme.colors.orange};
        &__text {
            color: ${(p) => p.theme.colors.pureWhite};
            font-size: 1.4rem;
            padding-left: 0.6rem;
        }
    }
    .reviews__text {
        color: ${(p) => p.theme.colors.pureWhite};
        font-size: 1.4rem;
    }
`;
