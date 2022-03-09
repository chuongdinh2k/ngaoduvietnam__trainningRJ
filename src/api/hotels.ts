export const MockHotelApi = "https://62286a999fd6174ca8230be0.mockapi.io/api/v1";
import { axiosClient } from ".";

export const hotelsApi = {
    getListHotels: () => {
        const url = `${MockHotelApi}/hotels`;
        return axiosClient.get(url);
    },
    // viewListDetail: (id: string) => {
    //     const url = `${MockApi}/${id}`;
    //     return axiosClient.get(url);
    // },
    // reviewTours: (id: string) => {
    //     const url = `${MockApi}/${id}/reviews`;
    //     return axiosClient.get(url);
    // },
};
