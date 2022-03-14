import moment from "moment";

export const fomatToShowDate = (date: string | undefined) => {
    return moment(date).format("LLLL");
};
