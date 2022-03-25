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
        const url = `https://ngaoduvietnam2.herokuapp.com/api/tours/list?page=${pagination?.page}&limit=${pagination?.limit}`;
        return axiosClient.get(url);
    },
    getListFilterTours: (pagination?: IPagination, filter?: IFilterCondition) => {
        const url = `${process.env.REACT_API_HEROKU}/tours/search?location=${filter?.location}&typeOfTour=${filter?.typeOfTour}&page=${pagination?.page}&limit=${pagination?.limit}`;
        return axiosClient.get(url);
    },
    viewListDetail: (id: string) => {
        const url = `${process.env.REACT_API_HEROKU}/tours/${id}`;
        return axiosClient.get(url);
    },
    reviewTours: (id: string, values: IPagination) => {
        const url = `${process.env.REACT_API_HEROKU}/${id}/reviews?page=${values?.page}&limit=${values?.limit}`;
        return axiosClient.get(url);
    },
    commentTour: (id: string, values: any) => {
        const url = `${process.env.REACT_API_HEROKU}/tours/${id}/reviews`;
        return axiosClient.post(url, values);
    },
    // filterTourLocation: (pagination?: IPagination, filter?:string)=>{

    // }
};
