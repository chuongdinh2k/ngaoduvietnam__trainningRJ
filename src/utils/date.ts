import moment from "moment";

export const fomatToShowDate = (date: string | undefined) => {
    return moment(date).format("LLLL");
};
export const fomatObjDate = (date: string) => {
    return moment(moment(date).toDate()).format("DD/MM/YYYY");
};
