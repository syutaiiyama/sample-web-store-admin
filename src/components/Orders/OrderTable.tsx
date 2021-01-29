import { TOrder } from "../../contexts/order/order.type";
import React from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { convertDateFromString } from "../../utils/converDate";

type OrderTableProps = {
  orders: Array<TOrder>;
};

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>注文番号</TableCell>
            <TableCell align="left">注文者</TableCell>
            <TableCell align="left">注文時刻</TableCell>
            <TableCell align="left">配達先</TableCell>
            <TableCell align="left">お支払</TableCell>
            <TableCell align="left" />
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell align="left">{order.orderNo}</TableCell>
              <TableCell align="left">{order.user.name}</TableCell>
              <TableCell align="left">
                {convertDateFromString(order.date)}
              </TableCell>
              <TableCell align="left">
                〒{order.user.address.postalCode}{" "}
                {order.user.address.prefecture} {order.user.address.city}{" "}
                {order.user.address.addressLine} {order.user.address.building}{" "}
                {order.user.address.tel}
              </TableCell>
              <TableCell align="left">{order.payment.total}円</TableCell>
              <TableCell align="right">
                <Button color={"primary"} variant={"contained"}>
                  詳細
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
