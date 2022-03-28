export const totalPageConvert = (arrLength: number, paginationNumber: number) => {
    return Math.ceil(Number(arrLength / paginationNumber));
};
