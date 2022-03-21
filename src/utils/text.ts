export const getFirstLetter = (str: string | undefined) => {
    return str && str.trim().charAt(0).toUpperCase();
};
