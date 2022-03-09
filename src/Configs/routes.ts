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
} from "@containers";
import { appRoutesEnum, authRoutesEnum } from "@enums";
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

export const routes: Array<IRoute> = [
    { name: HOME, path: appRoutesEnum.HOME, exact: true, component: Home },
    { name: ABOUT, path: appRoutesEnum.ABOUT, exact: true, component: About },
    { name: TOURS, path: appRoutesEnum.TOURS_CHECKOUT, exact: true, component: CheckOut },
    { name: TOURS, path: appRoutesEnum.TOURS_DETAIL, exact: true, component: TourDetail },
    { name: TOURS, path: appRoutesEnum.TOURS, exact: true, component: ListTour },
    { name: HOTELS, path: appRoutesEnum.HOTEL_DETAIL, exact: true, component: HotelDetail },
    { name: HOTELS, path: appRoutesEnum.HOTELS, exact: true, component: Hotels },
    { name: CONTACT, path: appRoutesEnum.CONTACT, exact: true, component: Contact },
    {
        name: REGISTER,
        path: authRoutesEnum.REGISTER,
        exact: true,
        component: Register,
        layout: LayoutAuth,
    },
    { name: LOGIN, path: authRoutesEnum.LOGIN, exact: true, component: Login, layout: LayoutAuth },
    { name: "", path: appRoutesEnum.PRIVACY, exact: true, component: PrivacyPolicy },
    { path: appRoutesEnum.SUCCESS, exact: true, component: SuccessMessage, layout: FinalPopup },

    { name: ERROR, exact: true, component: Page404Error, layout: LayoutError },
];
