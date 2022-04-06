import { SuccessMessage } from "@components";
import {
    Home,
    About,
    ListTour,
    TourDetail,
    HotelDetail,
    CheckOut,
    Hotels,
    Login,
    Register,
    Page404Error,
    Contact,
    PrivacyPolicy,
    ChangePassword,
    ForgotPassword,
} from "@containers";
import { appRoutesEnum, authRoutesEnum } from "@enums";
import { ScrollToTop } from "@hocs";
import { FinalPopup, LayoutAuth, LayoutError } from "@layouts";
import { IRoute } from "@types";

// WHAT: route name
export const HOME = "Home";
export const ABOUT = "About";
export const TOURS = "Tours";
export const HOTELS = "Hotels";
export const CONTACT = "Contact";
export const LOGIN = "Login";
export const REGISTER = "Register";
export const CHECKOUT = "Checkout";
export const ERROR = "Error";
export const CHANGE_PASSWORD_NAME = "Change Password";
export const FORGOT_PASSWORD_NAME = "Forgot Password";

export const routes: Array<IRoute> = [
    { name: HOME, path: appRoutesEnum.HOME, exact: true, component: ScrollToTop(Home, "app") },
    { name: ABOUT, path: appRoutesEnum.ABOUT, exact: true, component: ScrollToTop(About, "app") },
    {
        name: TOURS,
        path: appRoutesEnum.TOURS_CHECKOUT,
        exact: true,
        component: ScrollToTop(CheckOut, "app"),
    },
    {
        name: TOURS,
        path: appRoutesEnum.TOURS_DETAIL,
        exact: true,
        component: ScrollToTop(TourDetail, "detail"),
    },
    {
        name: TOURS,
        path: appRoutesEnum.TOURS,
        exact: true,
        component: ScrollToTop(ListTour, "app"),
    },
    {
        name: HOTELS,
        path: appRoutesEnum.HOTEL_DETAIL,
        exact: false,
        component: ScrollToTop(HotelDetail, "detail"),
    },
    {
        name: HOTELS,
        path: appRoutesEnum.HOTELS,
        exact: true,
        component: ScrollToTop(Hotels, "app"),
    },
    {
        name: CONTACT,
        path: appRoutesEnum.CONTACT,
        exact: true,
        component: ScrollToTop(Contact, "app"),
    },
    {
        name: REGISTER,
        path: authRoutesEnum.REGISTER,
        exact: true,
        component: Register,
        layout: LayoutAuth,
    },
    {
        name: FORGOT_PASSWORD_NAME,
        path: authRoutesEnum.FORGOT_PASSWORD,
        exact: true,
        component: ForgotPassword,
        layout: LayoutAuth,
    },
    { name: LOGIN, path: authRoutesEnum.LOGIN, exact: true, component: Login, layout: LayoutAuth },
    {
        name: FORGOT_PASSWORD_NAME,
        path: authRoutesEnum.CHANGE_PASSWORD,
        exact: true,
        component: ChangePassword,
        layout: LayoutAuth,
    },
    {
        name: "",
        path: appRoutesEnum.PRIVACY,
        exact: true,
        component: ScrollToTop(PrivacyPolicy, "app"),
    },
    { path: appRoutesEnum.SUCCESS, exact: true, component: SuccessMessage, layout: FinalPopup },

    { name: ERROR, exact: true, component: Page404Error, layout: LayoutError },
];
