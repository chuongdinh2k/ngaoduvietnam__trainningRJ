export const getFirstLetter = (str: string | undefined) => {
    return str && str.trim().charAt(0).toUpperCase();
};
// WHAT: show dot when text too long
export const addThreeDots = (text: string | undefined, limit: number) => {
    return text && text.length > limit ? `${text.substring(0, limit)}...` : text;
};
