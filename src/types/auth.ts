export interface IAuth {
    accessToken: string;
    userPermission: Array<string> | null;
}
export interface ILogin {
    email: string;
    password: string;
}
export interface IRegister {
    lastName?: string;
    firstName?: string;
    username: string;
    email: string;
    password: string;
}
