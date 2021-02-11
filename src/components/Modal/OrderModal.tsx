import { TOrder } from "../../contexts/order/order.type";
import React from "react";
import { Grid, TableCell, Typography } from "@material-ui/core";
import OrderDetailLabel from "./OrderDetailLabel";
import { convertDateFromString } from "../../utils/converDate";
import styles from "../../container/Modal/ProductModal.module.css";
import { OrderListTable } from "../Table/OrderListTable";
import * as faker from "faker";

type OrderModalProps = {
  order: TOrder;
};

export const OrderModal: React.FC<OrderModalProps> = ({ order }) => {
  return (
    <div className={styles.wrapper}>
      <Grid style={{ width: "100%" }}>
        <Grid
          container
          item
          direction={"column"}
          style={{
            border: "1px solid grey",
            borderRadius: "4px",
            width: "100%",
            padding: "10px",
          }}
        >
          <Typography variant={"h6"}>注文詳細</Typography>
          <OrderDetailLabel label={"注文番号"} value={order.orderNo} />
          <OrderDetailLabel
            label={"注文時刻"}
            value={convertDateFromString(order.date)}
          />
        </Grid>
        <div style={{ width: "100%", height: "20px" }} />
        <Grid
          container
          item
          direction={"column"}
          style={{
            border: "1px solid grey",
            borderRadius: "4px",
            width: "100%",
            padding: "10px",
          }}
        >
          <Typography variant={"h6"}>注文者情報</Typography>
          <OrderDetailLabel label={"名前"} value={"田中太郎"} />
          <OrderDetailLabel label={"メールアドレス"} value={"demo@demo.jp"} />
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Typography>
              {/*住所{": \t"}〒{order.user.address.postalCode}{" "}*/}
              {/*{order.user.address.prefecture} {order.user.address.city}{" "}*/}
              {/*{order.user.address.addressLine} {order.user.address.building}{" "}*/}
              {/*{order.user.address.tel}*/}
              住所: 〒111-111 でも県デモ市でも町1-111-111
            </Typography>
          </div>
        </Grid>
        <div style={{ width: "100%", height: "20px" }} />
        <Grid
          container
          item
          direction={"column"}
          style={{
            border: "1px solid grey",
            borderRadius: "4px",
            width: "100%",
            paddingTop: "10px",
          }}
        >
          <Typography variant={"h6"} style={{ marginLeft: "10px" }}>
            注文詳細
          </Typography>
          <div style={{ width: "100%", height: "20px" }} />
          <OrderListTable order={order} />
        </Grid>
      </Grid>
    </div>
  );
};
