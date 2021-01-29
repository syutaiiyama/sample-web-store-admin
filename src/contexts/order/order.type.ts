import { TUser } from "../user/user.type";

export type TOrder = {
  orderNo: string;
  user: TUser;
  date: string;
  products: Array<TOrderedProducts>;
  payment: TPayment;
};

export type TOrderedProducts = {
  name: string;
  price: number;
  quantity: number;
};

export type TPayment = {
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
};
