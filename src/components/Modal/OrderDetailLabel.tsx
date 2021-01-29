import { Typography } from "@material-ui/core";
import React from "react";

type OrderDetailLabelProps = {
  label: string;
  value: string;
};

const OrderDetailLabel: React.FC<OrderDetailLabelProps> = ({
  label,
  value,
}) => (
  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
    <Typography>{label + ": \t" + value}</Typography>
  </div>
);

export default OrderDetailLabel;
