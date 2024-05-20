export interface IWebItem {
    id: string;
    title: string;
    description?: string;
    price: number;
    image: string;
}

export interface IAppState {
    catalog: IWebItem[];
    basket: IWebItem[];
    order: IOrder | null;
    loading: boolean;
}

export interface IOrderForm {
    email: string;
    phone: string;
}

export interface IOrder extends IOrderForm {
    items: string[]
}

export type FormErrors = Partial<Record<keyof IOrder, string>>;

export interface IBid {
    price: number
}

export interface IOrderResult {
    id: string;
}