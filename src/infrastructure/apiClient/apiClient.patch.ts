import { TProduct } from "../../contexts/products/products.type";
import { apiClientBase } from "./apiClient.base";

export const apiClientPatch = {
  products: async (product: TProduct, idToken: string): Promise<void> => {
    const body = JSON.stringify(product);
    await apiClientBase.patch(`/product/${product.id}`, body, idToken);
  },
};
