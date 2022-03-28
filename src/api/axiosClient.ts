import axios from "axios";

const queryString = require("query-string");

// WHAT: get token in localStorage
const localStorageGetItem = localStorage.getItem("persist:root") as string;

const token = localStorageGetItem
    ? JSON.parse(JSON.parse(localStorageGetItem).auth).tokenInfoAuth
    : "";
export const axiosClient = axios.create({
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});
