import { ICard, IUser } from ".";

export interface ILocation {
    duration?: string;
    admission?: string;
    title?: string;
    text?: string;
}
export interface ITourItinerary {
    stopTime?: number;
    title?: string;
    day?: number;
    locations?: Array<ILocation>;
}
export interface IDiscription {
    overview: {
        name?: string;
        title?: string;
        list?: Array<string>;
    };
    included: {
        name?: string;
        list?: Array<string>;
    };
    departure: {
        name?: string;
        departure_point: {
            title?: string;
            list?: Array<string>;
        };
        departure_time: {
            title?: string;
            list?: Array<string>;
        };
    };
    tourItinerary: {
        name?: string;
        list: Array<ITourItinerary>;
    };
}
// WHAT: tab additonal
export interface IQuestion {
    question?: string;
    answer?: string;
}
export interface IAdditionalInfo {
    name?: string;
    list?: Array<string>;
    faqs: {
        name?: string;
        list: Array<IQuestion>;
    };
}

// WHAT: reviews tab inteface
export interface IListStar {
    value?: number;
    reviewsTime?: number;
}

export interface IComment {
    user?: IUser;
    title?: string;
    time?: string;
    comment?: string;
    rating?: number;
    status?: string;
    updatedAt?: string;
    createdAt?: string;
}
export interface IReviews {
    number?: number;
    average?: number;
    listStars?: Array<IListStar>;
    // listComments?: Array<IComment>;
}

// related
export interface IRelated {
    title?: string;
    list?: Array<ICard>;
}

export interface IDataTour {
    createdAt?: string;
    _id?: string;
    title?: string;
    location?: string;
    rating?: number;
    duration?: string;
    typeOfTour?: string;
    price?: number;
    listImages?: Array<string>;
    discription?: IDiscription;
    additionalInfo?: IAdditionalInfo;
    // reviews?: IReviews;
    reviews?: Array<IComment>;
    relateTours?: IRelated;
    image?: string;
    numberReviews?: number;
    average?: number;
    listStars?: IListStar[];
}
