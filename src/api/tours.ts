export const MockApi = "https://60c0c446b8d3670017555cb3.mockapi.io/api/v1";
import { axiosClient } from ".";

export const toursApi = {
    getListTours: () => {
        const url = "https://60c0c446b8d3670017555cb3.mockapi.io/api/v1/tours";
        return axiosClient.get(url);
    },
    viewListDetail: (id: string) => {
        const url = `https://60c0c446b8d3670017555cb3.mockapi.io/api/v1/tours/${id}`;
        return axiosClient.get(url);
    },
    reviewTours: (id: string) => {
        const url = `https://60c0c446b8d3670017555cb3.mockapi.io/api/v1/tours/${id}/reviews`;
        return axiosClient.get(url);
    },
};
