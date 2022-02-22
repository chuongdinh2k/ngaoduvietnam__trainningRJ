import styled from "styled-components";

import { SliderCustom } from "@components";
import { ICard } from "@types";

interface IProps {
    AttractiveTourLists?: Array<ICard>;
}
export const HomeAttractiveTourComponent = (props: IProps) => {
    const { AttractiveTourLists } = props;
    return (
        <StyledWrapperTitleComponent>
            <div className="wrapper">
                <div className="top">
                    <h3>
                        Attractive tour and
                        <br /> interesting experiences
                    </h3>
                    <div className="btn">View All</div>
                </div>
                <div className="slide">
                    <SliderCustom data={AttractiveTourLists} numberSlides={3} typeCardIcon={true} />
                </div>
            </div>
        </StyledWrapperTitleComponent>
    );
};
export const StyledWrapperTitleComponent = styled.div`
    .wrapper {
        width: 100%;
        padding-bottom: 2rem;
    }
    .top {
        display: flex;
        justify-content: space-between;
        padding: 6rem 0;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding: 1rem 0;
        }
    }
    h3 {
        line-height: 1;
        font-size: 4rem;
        margin-block-start: 0;
        margin-block-end: 0;
        @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
            font-size: 3rem;
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 2rem;
        }
    }
    .btn {
        width: 9.2rem;
        height: 3.8rem;
        margin-top: 3rem;
        background-color: ${(p) => p.theme.colors.darkBlack};
        color: ${(p) => p.theme.colors.pureWhite};
        padding: 1rem 2rem;
        font-size: ${(p) => p.theme.typography.fontSize}px;
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
            color: ${(p) => p.theme.colors.orange};
        }
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            font-size: 10px;
            height: 2rem;
            margin-top: 2rem;
            padding: 0.3rem 2rem;
            width: 8rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
        .wrapper {
            padding-top: 2rem;
        }
    }
`;
