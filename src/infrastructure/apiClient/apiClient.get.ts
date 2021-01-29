import { TProduct } from "../../contexts/products/products.type";
import { apiClientBase } from "./apiClient.base";
import { TOrder } from "../../contexts/order/order.type";
import { TUser } from "../../contexts/user/user.type";

export const apiClientGet = {
  users: async (
    idToken: string
  ): Promise<Array<TUser>> => //testUser,
    await apiClientBase.get<Array<TUser>>("/admin/user", idToken),
  products: async (): Promise<Array<TProduct>> => //testProducts,
    await apiClientBase.get<Array<TProduct>>("/product"),
  orders: async (
    idToken: string
  ): Promise<Array<TOrder>> => //getTestOrders(),
    await apiClientBase.get<Array<TOrder>>("/admin/orders", idToken),
};
