import axios from "axios";
const queryString = require("query-string");

import { secureStorageGetItem } from "@utils";
import { SecureStorageEnum } from "@enums";

const accessToken = secureStorageGetItem(SecureStorageEnum.ACCESS_TOKEN);
export const axiosClient = axios.create({
    // baseURL: "https://ducky-ecommerce-server.herokuapp.com",
    headers: {
        "access-token": `${accessToken}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});
