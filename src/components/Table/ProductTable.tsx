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
import { TProduct } from "../../contexts/products/products.type";
import Image from "next/image";
import { generateTestImageUrl } from "../../utils/generateTestImageUrl";

type ProductTableProps = {
  products: Array<TProduct>;
  deleteButtonClick: (product: TProduct) => void;
  editButtonClick: (product: TProduct) => void;
};

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  deleteButtonClick,
  editButtonClick,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ minWidth: "100px" }}>商品画像</TableCell>
            <TableCell align="left" style={{ minWidth: "300px" }}>
              商品名
            </TableCell>
            <TableCell align={"left"} style={{ minWidth: "150px" }}>
              金額
            </TableCell>
            <TableCell align="left">説明</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                <Image
                  src={generateTestImageUrl(product.category)}
                  width={300}
                  height={300}
                  layout={"intrinsic"}
                />
              </TableCell>
              <TableCell align="center">{product.name}</TableCell>
              <TableCell align="left">{product.price}円</TableCell>
              <TableCell align="left">{product.description}</TableCell>
              <TableCell align="right">
                <Button
                  color={"primary"}
                  variant={"contained"}
                  onClick={() => editButtonClick(product)}
                >
                  編集
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button onClick={() => deleteButtonClick(product)}>削除</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
