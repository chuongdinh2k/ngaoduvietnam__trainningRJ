import { SecureStorageEnum } from "@enums";

export const secureStorageSetItem = (name: SecureStorageEnum, value: string) => {
    return localStorage.setItem(name, value);
};

export const secureStorageGetItem = (name: SecureStorageEnum) => {
    return localStorage.getItem(name);
};
export const secureStorageRemoveItem = (name: SecureStorageEnum) => {
    return localStorage.removeItem(name);
};
export const secureStorageClearLocalStorage = () => {
    return localStorage.clear();
};
