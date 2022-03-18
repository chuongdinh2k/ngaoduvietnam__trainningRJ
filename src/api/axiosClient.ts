import axios from "axios";
const queryString = require("query-string");

import { secureStorageGetItem } from "@utils";
import { SecureStorageEnum } from "@enums";

import { useAppSelector, selectAuth } from "@redux";

const accessToken = secureStorageGetItem(SecureStorageEnum.ACCESS_TOKEN);

// const auth = useAppSelector(selectAuth);
export const axiosClient = axios.create({
    // baseURL: "https://ducky-ecommerce-server.herokuapp.com",
    headers: {
        "access-token": `${accessToken}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

// axiosClient.interceptors.request.use((config) => {
//     const lastestToken = auth.tokenInfoAuth;
//     if (config.headers) config.headers["access-token"] = lastestToken;
//     return config;
// });
