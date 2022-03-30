import moment from "moment";
import { getFirstLetter } from ".";

export const fomatToShowDate = (date: string | undefined) => {
    return moment(date).format("LLLL");
};
export const fomatObjDate = (date: Date | undefined) => {
    return moment(moment(date).toDate()).format("DD/MM/YYYY");
};
// WHAT: convert timestamp and format to "DD/MM/YYYY";
export const fomatTimestampToDate = (date: number | undefined) => {
    return date && moment(date).format("DD/MM/YYYY");
};
// WHAT GET END DATE WHEN KNOW STARTDATE
export const getEndDate = (startDate: Date | undefined, duration: string | undefined) => {
    const dateTemp: Date = new Date();
    const endDate =
        startDate &&
        duration &&
        dateTemp.setTime(
            startDate?.getTime() + Number(getFirstLetter(duration)) * 24 * 60 * 60 * 1000
        );
    return fomatTimestampToDate(Number(endDate));
};
