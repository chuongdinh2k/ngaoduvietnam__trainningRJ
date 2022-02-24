import { ICard } from "@types";

export const getValueRange = (value: number[]) => {
    return value[1] - value[0];
};
// WHAT: slice array to get 4 first items for slider
export const sliceArray = (array: string[] | undefined, start: number, end: number) => {
    const newArray = array && array.slice(start, end);
    return newArray;
};
export const splitUrl = (url: string | undefined, value: string) => {
    const arr: Array<string> = url?.split("/") as Array<string>;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr.slice(0, i + 1);
        }
    }
};
export const getRelatedArray = (array?: Array<ICard>, id?: number) => {
    const newArray = array?.filter((item) => item.id !== id);
    return newArray;
};
