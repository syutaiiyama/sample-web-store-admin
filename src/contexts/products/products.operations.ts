import { useState } from "react";
import { TProduct } from "./products.type";
import { apiClient } from "../../infrastructure/apiClient/apiClient";
import { useLoadingModal } from "../loading/loading.context";

export const productOperations = () => {
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();
  const [products, setProducts] = useState<Array<TProduct>>([]);
  const [books, setBooks] = useState<Array<TProduct>>([]);
  const [clothes, setClothes] = useState<Array<TProduct>>([]);
  const [foods, setFoods] = useState<Array<TProduct>>([]);

  const fetchProducts = async () => {
    openLoadingModal("商品情報を読み込んでいます...");
    try {
      const productsData = await apiClient.get.products();
      const bookData = productsData.filter(
        (product) => product.category === "book"
      );
      const clotheData = productsData.filter(
        (product) => product.category === "clothe"
      );
      const foodData = productsData.filter(
        (product) => product.category === "food"
      );
      setProducts(productsData);
      setBooks(bookData);
      setClothes(clotheData);
      setFoods(foodData);
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  const updateProduct = async (product: TProduct) => {
    openLoadingModal("商品情報を更新しています...");
    try {
      const idToken = await apiClient.auth.getIdToken();
      await apiClient.patch.products(product, idToken);
      await fetchProducts();
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  return {
    fetchProducts,
    updateProduct,
    products,
    books,
    clothes,
    foods,
  };
};
