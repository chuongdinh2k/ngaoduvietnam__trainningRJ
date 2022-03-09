// WHAT: receive url string and tranform it to array, then return
// map to object with name and value
export const concatUrl = (url: string) => {
    let array = [] as Array<any>;
    array = url.split("/");
    const array2 = array.map((item) => ({ name: item, value: item }));
    return array2;
};
