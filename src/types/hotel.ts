import { IUser } from "./user";

export interface IDescription {
    name?: string;
    overview?: {
        name?: string;
        content?: Array<string>;
    };
    hotelAmenities?: {
        name?: string;
        list?: Array<string>;
    };
    rules?: {
        name?: string;
        checkin?: string;
        checkout?: string;
        list?: Array<string>;
    };
}
// comment interface
export interface IHotelComment {
    user?: IUser;
    title?: string;
    time?: string;
    comment?: string;
    rating?: number;
    status?: string;
    updatedAt?: string;
    createdAt?: string;
}
// list reviews interface
export interface IHotelReviews {
    page?: number;
    totalPage?: number;
    listReviews?: Array<IHotelComment>;
}
export interface ISelectRoom {
    id?: string;
    image?: string;
    title?: string;
    type?: {
        dimension?: string;
        equipment?: string;
        group?: string;
    };
    advanced?: Array<string>;
    roomAvailable?: number;
    price?: number;
    about?: Array<string>;
    viewImages?: Array<string>;
}
export interface IRelatedHotel {
    title?: string;
    listRelated?: Array<IHotel>;
}
export interface IHotel {
    image?: string;
    createdAt?: string;
    _id?: string;
    title?: string;
    location?: string;
    rating?: number;
    marked?: boolean;
    numberReviews?: number;
    price?: number;
    listImages?: Array<string>;
    star?: number;
    description?: IDescription;
    selectRoom?: Array<ISelectRoom>;
    reviews?: IHotelComment[];
    relatedHotels?: IRelatedHotel;
}
