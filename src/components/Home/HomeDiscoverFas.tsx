import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { SliderCustom } from "@components";
import { ICard } from "@types";
import { appRoutesEnum } from "@enums";

interface IProps {
    HomeDiscoverFasListsData?: Array<ICard>;
}
export const HomeDiscoverFas = (props: IProps) => {
    const history = useHistory();
    const { HomeDiscoverFasListsData } = props;
    return (
        <StyledHomeDiscoverFas>
            <div className="top">
                <h3>
                    Discover fascinating <br /> destinations
                </h3>
                <div className="btn" onClick={() => history.push(appRoutesEnum.TOURS)}>
                    View All
                </div>
            </div>
            <div className="slide">
                <SliderCustom data={HomeDiscoverFasListsData} numberSlides={4} />
            </div>
        </StyledHomeDiscoverFas>
    );
};
const StyledHomeDiscoverFas = styled.div`
    width: 100%;
    padding-bottom: 2rem;
    .top {
        display: flex;
        justify-content: space-between;
        padding: 6rem 0;
        @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
            padding-top: 15rem;
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
        margin-top: 1rem;
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
        padding-top: 22rem;
    }
`;
