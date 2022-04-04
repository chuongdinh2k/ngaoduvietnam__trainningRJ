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
export const getRelatedArray = (array?: Array<any>, id?: number) => {
    const newArray = array?.filter((item) => item.id !== id);
    return newArray;
};

// WHAT: conver rating
export const convertRating = (value: number | undefined) => {
    return value && value.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
// WHAT: convert number to string currency
export const convertCurrency = (value: number | undefined) => {
    return value && value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
// WHAT: get letter in string
const getCharAt = (str: string, index: number) => {
    return str.charAt(index);
};
// WHAT: filter form
export const filterArry = (array: Array<any>, filters: any) => {
    // get key in object as array
    const filterKeys = Object.keys(filters);
    return array.filter((item: any) => {
        // return with condition filter
        return filterKeys.every((key) => {
            // ignore empty value
            if (!filters[key].length) return true;
            if (key === "price")
                return filters[key][0] <= item[key] && filters[key][1] >= item[key];
            if (key === "star" || key === "typeOfTour")
                return filters[key].includes(item[key].toString()) ? true : false;
            if (key === "duration") {
                let flag = false;
                for (let i = 0; i < filters[key].length; i++) {
                    if (
                        Number(filters[key][i]) >= Number(getCharAt(item[key], 0)) &&
                        Number(filters[key][i]) - 2 <= Number(getCharAt(item[key], 0))
                    )
                        flag = true;
                    else flag = false;
                }

                return flag;
            }
            if (key === "rating") {
                let flag = false;
                for (let i = 0; i < filters[key].length; i++) {
                    if (Number(filters[key][i]) <= item[key]) flag = true;
                    else flag = false;
                }
                return flag;
            }
        });
    });
};

// get Related record (in list response);
export const relatedList = (array: Array<any>, id: string) => {
    return array.filter((item) => item.id !== id);
};
// WHAT: sort by condition
export const sortItem = (array: Array<any>, condition: any) => {
    return array.slice().sort((a, b) => a[condition] - b[condition]);
};
// WHAT : handle pagiantion
export const handlePagination = (
    arr: Array<any> | undefined,
    index: number,
    numberPerPage: number
) => {
    const trimStart = (index - 1) * numberPerPage;
    const trimEnd = trimStart + numberPerPage;
    return arr && arr.slice(trimStart, trimEnd);
};
