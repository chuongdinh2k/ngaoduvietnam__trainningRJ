import { ILogin, IRegister } from "@types";
import { axiosClient } from ".";

export const authApi = {
    login: (params: ILogin) => {
        const url = "/api/auth/login";
        return axiosClient.post(url, params);
    },
};
