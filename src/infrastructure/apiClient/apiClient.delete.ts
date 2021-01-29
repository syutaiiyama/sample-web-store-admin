import { TProduct } from "../../contexts/products/products.type";
import { apiClientBase } from "./apiClient.base";

export const apiClientDelete = {
  products: async (product: TProduct, idToken: string): Promise<void> => {
    await apiClientBase.delete(`/product/${product.id}`, idToken);
  },
};
