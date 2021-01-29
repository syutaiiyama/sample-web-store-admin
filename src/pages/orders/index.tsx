import React from "react";
import { Typography } from "@material-ui/core";
import OrderTable from "../../components/Orders/OrderTable";

export default function OrderPage(): JSX.Element {
  return (
    <div>
      <Typography variant="h4">Order</Typography>
      <div style={{ height: "40px" }} />
      <OrderTable orders={[]} />
    </div>
  );
}
