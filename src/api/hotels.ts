import { axiosClient } from ".";

interface IPagination {
    page?: number;
    limit?: number;
}
export const hotelsApi = {
    getListHotels: (values: IPagination) => {
        const url = `${process.env.REACT_APP_BACKEND}/hotels/list?page=${values?.page}&limit=${values?.limit}`;
        return axiosClient.get(url);
    },
    viewListDetail: (id: string) => {
        const url = `${process.env.REACT_APP_BACKEND}/hotels/${id}`;
        return axiosClient.get(url);
    },
    commentHotel: (id: string, values: any) => {
        const url = `${process.env.REACT_APP_BACKEND}/hotels/${id}/reviews?`;
        return axiosClient.post(url, values);
    },
};
