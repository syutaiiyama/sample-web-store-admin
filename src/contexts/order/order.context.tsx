import { TOrder } from "./order.type";
import { createContext, useContext } from "react";
import { orderOperations } from "./order.operations";

type ContextProps = {
  orders: Array<TOrder>;
  fetchOrders: () => void;
};

const OrderContext = createContext({} as ContextProps);

export const OrderProvider = ({ children }) => {
  const operations = orderOperations();

  return (
    <OrderContext.Provider value={operations}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
