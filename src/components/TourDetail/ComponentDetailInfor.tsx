import styled from "styled-components";

import { IconLocation, IconStar } from "..";

export const ComponentDetailInfor = () => {
    return (
        <StyledComponentDetailInfor>
            <div className="wrapper">
                <h3>Discover interesting things in the romantic coastal city of Vungtau</h3>
                <div className="location">
                    <span className="location__icon">
                        <IconLocation width="16" height="18" />
                    </span>
                    <span className="location__text">Vungtau City, Baria-Vungtau</span>
                </div>
                <div className="wrapperStar">
                    <div className="star">
                        <span className="star__icon">
                            <IconStar />
                        </span>
                        <span className="star__text">4.5</span>
                    </div>
                    <span className="reviews__text">128 reviews</span>
                </div>
            </div>
        </StyledComponentDetailInfor>
    );
};
const StyledComponentDetailInfor = styled.div`
    .wrapper {
        padding: 5rem 0;
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
