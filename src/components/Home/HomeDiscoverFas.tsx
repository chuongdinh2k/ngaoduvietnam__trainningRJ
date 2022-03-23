import { useHistory } from "react-router-dom";

import { SliderCustom } from "@components";
import { ICard } from "@types";
import { appRoutesEnum } from "@enums";
import { StyledWrapperTitleComponent } from "..";

interface IProps {
    HomeDiscoverFasListsData?: Array<ICard>;
}
export const HomeDiscoverFas = (props: IProps) => {
    const history = useHistory();
    const { HomeDiscoverFasListsData } = props;
    return (
        <StyledWrapperTitleComponent>
            <div className="top home__discover">
                <h3>
                    Discover fascinating <br className="xl-hidden" /> destinations
                </h3>
                <div className="btn" onClick={() => history.push(appRoutesEnum.TOURS)}>
                    View All
                </div>
            </div>
            <div className="slide">
                <SliderCustom data={HomeDiscoverFasListsData} numberSlides={4} />
            </div>
        </StyledWrapperTitleComponent>
    );
};
// const StyledHomeDiscoverFas = styled.div`
//     width: 100%;
//     padding-bottom: 2rem;

//     .top {
//         display: flex;
//         justify-content: space-between;
//         padding: 6rem 0;
//         @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
//             padding-top: 15rem;
//             padding-bottom: 2rem;
//         }
//     }
//     h3 {
//         line-height: 1;
//         font-size: 4rem;
//         margin-block-start: 0;
//         margin-block-end: 0;
//         @media (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
//             font-size: 3rem;
//         }
//         @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
//             font-size: 2rem;
//         }
//     }
//     .btn {
//         height: 3.8rem;
//         margin-top: 1rem;
//         background-color: ${(p) => p.theme.colors.darkBlack};
//         color: ${(p) => p.theme.colors.pureWhite};
//         padding: 1rem 2rem;
//         font-size: ${(p) => p.theme.typography.fontSize}px;
//         text-transform: capitalize;
//         font-weight: ${(p) => p.theme.typography.fontWeightBold};
//         transition: 250ms;
//         cursor: pointer;
//         &:hover {
//             color: ${(p) => p.theme.colors.orange};
//             transform: translateX(-10px);
//         }
//         @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
//             font-size: 10px;
//             padding: 1.3rem 2rem;
//             width: 8rem;
//         }
//     }
//     @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
//         padding-top: 22rem;
//     }
// `;
