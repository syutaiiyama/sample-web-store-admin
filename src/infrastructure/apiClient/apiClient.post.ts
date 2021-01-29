import { TCreateProductRequest } from "../../contexts/products/products.type";
import { apiClientBase } from "./apiClient.base";

export const apiClientPost = {
  products: async (
    product: TCreateProductRequest,
    idToken: string
  ): Promise<void> => {
    const body = JSON.stringify(product);
    await apiClientBase.post("/product", body, idToken);
  },
};
