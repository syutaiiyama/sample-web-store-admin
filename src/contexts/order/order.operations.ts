import { TOrder } from "./order.type";
import { useState } from "react";
import { useLoadingModal } from "../loading/loading.context";
import { apiClient } from "../../infrastructure/apiClient/apiClient";

export const orderOperations = () => {
  const [orders, setOrders] = useState<Array<TOrder>>([]);
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();

  const fetchOrders = async () => {
    openLoadingModal("オーダーを取得しています");
    try {
      const idToken = await apiClient.auth.getIdToken();
      const response = await apiClient.get.orders(idToken);
      setOrders(response);
    } catch (e) {
      console.log(e);
    } finally {
      closeLoadingModal();
    }
  };

  return {
    orders,
    fetchOrders,
  };
};
