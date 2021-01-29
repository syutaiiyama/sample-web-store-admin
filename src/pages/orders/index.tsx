import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import OrderTable from "../../components/Orders/OrderTable";
import { useOrder } from "../../contexts/order/order.context";

export default function OrderPage(): JSX.Element {
  const { orders, fetchOrders } = useOrder();

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <Typography variant="h4">Order</Typography>
      <div style={{ height: "40px" }} />
      <OrderTable orders={orders} />
    </div>
  );
}
