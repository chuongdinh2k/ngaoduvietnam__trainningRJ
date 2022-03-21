import axios from "axios";
const queryString = require("query-string");

// WHAT: get token in localStorage
const localStorageGetItem = localStorage.getItem("persist:root") as any;
const token = JSON.parse(JSON.parse(localStorageGetItem).auth).tokenInfoAuth;
// console.log(auth);
export const axiosClient = axios.create({
    // baseURL: "https://ducky-ecommerce-server.herokuapp.com",
    headers: {
        Authorization: `Bearer ${token}`,
        // "access-token": `${accessToken}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

// axiosClient.interceptors.request.use((config) => {
//     // const lastestToken = store.getState().auth.info.;
//     if (config.headers) config.headers["access-token"] = lastestToken;
//     return config;
// });
