export const MockHotelUrl = "https://62286a999fd6174ca8230be0.mockapi.io";
import { axiosClient } from ".";

interface IPagination {
    page?: number;
    limit?: number;
}
export const hotelsApi = {
    getListHotels: (values: IPagination) => {
        const url = `${process.env.REACT_APP_API_HOTEL}?page=${values?.page}&limit=${values?.limit}`;
        return axiosClient.get(url);
    },
    viewListDetail: (id: string) => {
        const url = `${process.env.REACT_APP_API_HOTEL}/${id}`;
        return axiosClient.get(url);
    },
    reviewHotels: (id: string, values: IPagination) => {
        const url = `${process.env.REACT_APP_API_HOTEL}/${id}/comment?page=${values?.page}&limit=${values?.limit}`;
        return axiosClient.get(url);
    },
    // reviewTours: (id: string) => {
    //     const url = `${MockApi}/${id}/reviews`;
    //     return axiosClient.get(url);
    // },
};
