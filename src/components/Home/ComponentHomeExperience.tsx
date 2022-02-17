import { SliderCustom } from "@components";
import { StyledHomeAttractiveTourComponent } from ".";

export const ComponentHomeExperience = () => {
    const fakeData = [
        {
            subTitle: "Lang Vong, Hanoi",
            title: "“ Com lang Vong “ - Traditional culinary features of the old Hanoi people",
            image: "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional1_culpgb.png",
            time: "3 days - 2 night",
            money: "$146.00",
            rating: 4.5,
        },
        {
            subTitle: "Hue City, Thuathienhue",
            title: "Heritage of Quan Ho Bac Ninh - Singing passionate hearts",
            image: "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional3_gxl9t7.png",
            time: "6 hours",
            money: "$200.00",
            rating: 5,
        },
        {
            subTitle: "Muine, Binhthuan",
            title: "“Com lang Vong “ - Traditional culinary features of the old Hanoi people",
            image: "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional2_ykxdqc.png",
            time: "3 days - 2 night",
            money: "$120.00",
            rating: 3,
        },
        {
            subTitle: "Hue City, Thuathienhue",
            title: "Heritage of Quan Ho Bac Ninh - Singing passionate hearts",
            image: "https://res.cloudinary.com/chuongdinh/image/upload/v1644980380/traditional3_gxl9t7.png",
            time: "6 hours",
            money: "$200.00",
            rating: 5,
        },
    ];
    return (
        <StyledHomeAttractiveTourComponent>
            <div className="top">
                <h3>
                    Experience the traditional <br /> cultural beauties of Vietnam
                </h3>
                <div className="btn">View All</div>
            </div>
            <div className="slide">
                <SliderCustom data={fakeData} numberSlides={3} typeCardIcon={true} />
            </div>
        </StyledHomeAttractiveTourComponent>
    );
};
