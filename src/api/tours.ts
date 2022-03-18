import { IComment } from "@types";
import { axiosClient } from ".";

interface IFilterCondition {
    location?: string;
    typeOfTour?: string;
}
interface IPagination {
    page?: number;
    limit?: number;
}

export const toursApi = {
    getListTours: (pagination?: IPagination) => {
        const url = `${process.env.REACT_APP_API_TOUR}?page=${pagination?.page}&limit=${pagination?.limit}`;
        return axiosClient.get(url);
    },
    getListFilterTours: (pagination?: IPagination, filter?: IFilterCondition) => {
        const url = `${process.env.REACT_APP_API_TOUR}?location=${filter?.location}&typeOfTour=${filter?.typeOfTour}&page=${pagination?.page}&limit=${pagination?.limit}`;
        return axiosClient.get(url);
    },
    viewListDetail: (id: string) => {
        const url = `${process.env.REACT_APP_API_TOUR}/${id}`;
        return axiosClient.get(url);
    },
    reviewTours: (id: string, values: IPagination) => {
        const url = `${process.env.REACT_APP_API_TOUR}/${id}/reviews?page=${values?.page}&limit=${values?.limit}`;
        return axiosClient.get(url);
    },
    commentTour: (id: string, value: IComment) => {
        const url = `${process.env.REACT_APP_API_TOUR}/${id}/reviews?sortBy=time`;
        return axiosClient.post(url, value);
    },
};
