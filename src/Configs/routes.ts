import { Home, About, ListTour, TourDetail } from "@containers";
import { appRoutesEnum } from "@enums";
import { IRoute } from "@types";

// WHAT: route name
export const HOME = "Home";
export const ABOUT = "About";
export const TOURS = "Tours";
export const HOTELS = "Hotels";
export const CONTACT = "Contact";
export const LOGIN = "Login";

export const routes: Array<IRoute> = [
    { name: HOME, path: appRoutesEnum.HOME, exact: true, component: Home },
    { name: ABOUT, path: appRoutesEnum.ABOUT, exact: true, component: About },
    { name: TOURS, path: appRoutesEnum.TOURS, exact: true, component: ListTour },
    { name: TOURS, path: appRoutesEnum.TOURS_DETAIL, exact: true, component: TourDetail },
    // { name: HOTELS, path: appRoutesEnum.HOTELS, exact: true, component: About },
    // { name: CONTACT, path: appRoutesEnum.CONTACT, exact: true, component: About },
    // { name: LOGIN, path: authRoutesEnum.LOGIN, exact: true, component: About },
];
