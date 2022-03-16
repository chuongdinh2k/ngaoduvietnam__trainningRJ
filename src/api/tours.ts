export const MockTourUrl = "https://60c0c446b8d3670017555cb3.mockapi.io";
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
        const url = `${MockTourUrl}/api/v1/tours?page=${pagination?.page}&limit=${pagination?.limit}`;
        return axiosClient.get(url);
    },
    getListFilterTours: (pagination?: IPagination, filter?: IFilterCondition) => {
        const url = `${MockTourUrl}/api/v1/tours?location=${filter?.location}&typeOfTour=${filter?.typeOfTour}&page=${pagination?.page}&limit=${pagination?.limit}`;
        return axiosClient.get(url);
    },
    viewListDetail: (id: string) => {
        const url = `${MockTourUrl}/api/v1/tours/${id}`;
        return axiosClient.get(url);
    },
    reviewTours: (id: string, values: IPagination) => {
        const url = `${MockTourUrl}/api/v1/tours/${id}/reviews?page=${values?.page}&limit=${values?.limit}`;
        return axiosClient.get(url);
    },
    commentTour: (id: string, value: IComment) => {
        const url = `${MockTourUrl}/api/v1/tours/${id}/reviews?sortBy=time`;
        return axiosClient.post(url, value);
    },
};
