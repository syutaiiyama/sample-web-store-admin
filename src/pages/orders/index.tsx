import React, { useCallback, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import OrderTable from "../../components/Orders/OrderTable";
import { useOrder } from "../../contexts/order/order.context";
import { MuiModal } from "../../components/Modal/MuiModal";
import { OrderModal } from "../../components/Modal/OrderModal";
import { TOrder } from "../../contexts/order/order.type";

export default function OrderPage(): JSX.Element {
  const { orders, fetchOrders } = useOrder();
  const [isOrderDetailModalOpen, setIsOrderDetailModalOpen] = useState<boolean>(
    false
  );
  const [selectedOrder, setSelectedOrder] = useState<TOrder>();

  const handleDetailButtonClick = useCallback((order: TOrder) => {
    setSelectedOrder(order);
    setIsOrderDetailModalOpen(true);
  }, []);

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <Typography variant="h4">Order</Typography>
      <div style={{ height: "40px" }} />
      <OrderTable orders={orders} detailButtonClick={handleDetailButtonClick} />
      <MuiModal
        isModalOpen={isOrderDetailModalOpen}
        onClose={() => setIsOrderDetailModalOpen(false)}
      >
        <OrderModal order={selectedOrder} />
      </MuiModal>
    </div>
  );
}
