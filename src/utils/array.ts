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

// WHAT: convert number to string currency
export const convertCurrency = (value: number | undefined) => {
    return value && value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

// WHAT: filter form
// function filterArry1(array: Array<any>, filters: any) {
//     // get key in object as array
//     const filterKeys = Object.keys(filters);
//     return array.filter((item: any) => {
//         // return with condition filter
//         return filterKeys.every((key) => {
//             // ignore empty value
//             if (!filters[key].length) return true;
//             //if value is array
//             if (Array.isArray(filters[key]))
//                 return filters[key][0] <= item[key] && item[key] <= filters[key][1];
//             // same value
//             return filters[key] === item[key] ? true : false;
//         });
//     });
// }

export const filterArry = (array: Array<any>, filters: any) => {
    // get key in object as array
    const filterKeys = Object.keys(filters);
    return array.filter((item: any) => {
        // return with condition filter
        return filterKeys.every((key) => {
            // ignore empty value
            if (!filters[key].length) return true;
            //if value is array
            if (isNaN(filters[key][0])) return filters[key].includes(item[key]) ? true : false;
            else {
                return filters[key][0] <= item[key] && filters[key][1] >= item[key];
            }
        });
    });
};

// get Related record (in list response);
export const relatedList = (array: Array<any>, id: string) => {
    return array.filter((item) => item.id !== id);
};
