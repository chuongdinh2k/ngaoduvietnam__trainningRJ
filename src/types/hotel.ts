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
    userId?: string;
    avatar?: string;
    username?: string;
    title?: string;
    time?: string;
    comment?: string;
    rating?: number;
    status?: string;
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
    createdAt?: string;
    id: string;
    title?: string;
    location?: string;
    rating?: number;
    marked?: boolean;
    reviewNumber?: number;
    price?: number;
    listImage?: Array<string>;
    star?: number;
    description?: IDescription;
    selectRooms?: Array<ISelectRoom>;
    reviews?: IHotelReviews;
    relatedHotels?: IRelatedHotel;
}
