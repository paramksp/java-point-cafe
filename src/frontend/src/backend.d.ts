import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    id: bigint;
    name: string;
    description: string;
    category: string;
    price: bigint;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
}
export interface BusinessInfo {
    hours: string;
    name: string;
    address: string;
    aboutText: string;
    phone: string;
}
export interface backendInterface {
    addMenuItem(name: string, description: string, category: string, price: bigint): Promise<bigint>;
    deleteMenuItem(id: bigint): Promise<void>;
    getBusinessInfo(): Promise<BusinessInfo>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getMenu(): Promise<Array<MenuItem>>;
    submitContactForm(name: string, email: string, message: string): Promise<bigint>;
    updateBusinessInfo(name: string, address: string, phone: string, hours: string, aboutText: string): Promise<void>;
    updateMenuItem(id: bigint, name: string, description: string, category: string, price: bigint): Promise<void>;
}
