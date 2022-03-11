export const MockTourUrl = "https://60c0c446b8d3670017555cb3.mockapi.io";
import { axiosClient } from ".";

interface IPagination {
    page?: number;
    limit?: number;
}
export const toursApi = {
    getListTours: (values: IPagination) => {
        const url = `${MockTourUrl}/api/v1/tours?page=${values?.page}&limit=${values?.limit}`;
        return axiosClient.get(url);
    },
    viewListDetail: (id: string) => {
        const url = `${MockTourUrl}/api/v1/tours/${id}`;
        return axiosClient.get(url);
    },
    reviewTours: (id: string) => {
        const url = `${MockTourUrl}/api/v1/tours/${id}/reviews`;
        return axiosClient.get(url);
    },
};
