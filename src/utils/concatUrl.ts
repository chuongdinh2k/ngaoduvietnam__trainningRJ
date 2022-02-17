export const concatUrl = (url: string) => {
    let array = [] as Array<string>;
    array = url.split("/");
    return array;
};
