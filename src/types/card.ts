export type ICard = {
    _id?: string;
    id?: string;
    typeCardIcon?: boolean;
    subTitle?: string;
    title?: string;
    location?: string;
    price?: number;
    duration?: string;
    rating?: number | string;
    image?: string;
    typeOfTour?: string;
    listImage?: Array<string>;
};
