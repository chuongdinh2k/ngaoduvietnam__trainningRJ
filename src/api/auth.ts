import { ILogin, IRegister } from "@types";
import { axiosClient } from ".";

export const authApi = {
    login: (params: ILogin) => {
        const url = "https://ducky-ecommerce-server.herokuapp.com/api/auth/login";
        return axiosClient.post(url, params);
    },
    register: (params: IRegister) => {
        const url = "https://ducky-ecommerce-server.herokuapp.com/api/auth/register";
        return axiosClient.post(url, params);
    },
};
