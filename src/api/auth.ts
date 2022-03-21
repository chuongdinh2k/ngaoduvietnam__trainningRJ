import { ILogin, IRegister } from "@types";
import { axiosClient } from ".";

export const authApi = {
    login: (params: ILogin) => {
        const url = `${process.env.REACT_APP_BACKEND}/auth/login`;
        return axiosClient.post(url, params);
    },
    register: (params: IRegister) => {
        const url = `${process.env.REACT_APP_API_LOGIN}/auth/register`;
        return axiosClient.post(url, params);
    },
};
