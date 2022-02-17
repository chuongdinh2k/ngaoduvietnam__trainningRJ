import styled from "styled-components";

import { SliderCustom } from "@components";

export const HomeAttractiveTourComponent = () => {
    const fakeData = [
        {
            subTitle: "Sapa, Laocai",
            title: "Discover interesting things in the romantic coastal city of Vungtau",
            image: "https://res.cloudinary.com/chuongdinh/image/upload/v1644977800/attractive.3_wxkgsh.png",
            time: "3 days - 2 night",
            money: "$146.00",
            rating: 4.5,
        },
        {
            subTitle: "Sapa, Laocai",
            title: "Discover the most majestic Fansipan peak in Vietnam - the roof of Indochina",
            image: "https://res.cloudinary.com/chuongdinh/image/upload/v1644977800/attractive.1_z2op9b.png",
            time: "3 days - 2 night",
            money: "$200.00",
            rating: 5,
        },
        {
            subTitle: "Muine, Binhthuan",
            title: "Experience sea tourism on Phuquoc golden pearl",
            image: "https://res.cloudinary.com/chuongdinh/image/upload/v1644897848/discovery4_ajazk0.png",
            time: "3 days - 2 night",
            money: "$120.00",
            rating: 3,
        },
        {
            subTitle: "Muine, Binhthuan",
            title: "Experience sea tourism on Phuquoc golden pearl",
            image: "https://res.cloudinary.com/chuongdinh/image/upload/v1644977800/attractive.1_z2op9b.png",
            time: "3 days - 2 night",
            money: "$120.00",
            rating: 3,
        },
    ];
    return (
        <StyledHomeAttractiveTourComponent>
            <div className="top">
                <h3>
                    Attractive tour and
                    <br /> interesting experiences
                </h3>
                <div className="btn">View All</div>
            </div>
            <div className="slide">
                <SliderCustom data={fakeData} numberSlides={3} typeCardIcon={true} />
            </div>
        </StyledHomeAttractiveTourComponent>
    );
};
export const StyledHomeAttractiveTourComponent = styled.div`
    width: 100%;
    padding-bottom: 2rem;
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
        padding-top: 2rem;
    }
`;
