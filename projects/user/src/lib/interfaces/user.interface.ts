import { USER_TYPE } from "../enums/user.enum";

export interface IUser {
    id: number| null;
    name: string;
    email: string;
    mNumber: number | null;
    type : USER_TYPE
    address: IAddress
}

export interface IAddress {
    line1?: string;
    line2?: string;
    pinCode: number| null;
    country: string;
    state: string;
}