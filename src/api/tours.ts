import { axiosClient } from ".";

interface IFilterCondition {
    location?: string;
    typeOfTour?: string;
}
interface IPagination {
    page?: number;
    limit?: number;
}
export interface IFilterListTour {
    duration?: Array<string>;
    price?: Array<number>;
    typeOfTour?: Array<string>;
}
export interface ICommentValue {
    rating?: number;
    title?: string;
    comment?: string;
}
export const toursApi = {
    getListTours: (pagination?: IPagination) => {
        const url = `${process.env.REACT_APP_BACKEND}/tours/list?page=${pagination?.page}&limit=${pagination?.limit}`;
        return axiosClient.get(url);
    },
    getListFilterTours: (pagination?: IPagination, filter?: IFilterCondition) => {
        const url = `${process.env.REACT_APP_BACKEND}/tours/search?location=${filter?.location}&typeOfTour=${filter?.typeOfTour}&page=${pagination?.page}&limit=${pagination?.limit}`;
        return axiosClient.get(url);
    },
    viewListDetail: (id: string) => {
        const url = `${process.env.REACT_APP_BACKEND}/tours/${id}`;
        return axiosClient.get(url);
    },
    reviewTours: (id: string, values: IPagination) => {
        const url = `${process.env.REACT_APP_BACKEND}/${id}/reviews?page=${values?.page}&limit=${values?.limit}`;
        return axiosClient.get(url);
    },
    commentTour: (id: string, values: ICommentValue) => {
        const url = `${process.env.REACT_APP_BACKEND}/tours/${id}/reviews`;
        return axiosClient.post(url, values);
    },
    filterTours: (values: IFilterListTour) => {
        const url = `${process.env.REACT_APP_BACKEND}/tours/filter`;
        return axiosClient.post(url, values);
    },
};
