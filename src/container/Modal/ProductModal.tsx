import React, { useCallback, useState } from "react";
import { TProduct } from "../../contexts/products/products.type";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import Image from "next/image";
import styles from "./ProductModal.module.css";
import { generateTestImageUrl } from "../../utils/generateTestImageUrl";

type ProductModalPropd = {
  product: TProduct;
  handleSubmit: (product: TProduct) => void;
};

export const ProductModal: React.FC<ProductModalPropd> = ({
  product,
  handleSubmit,
}) => {
  const [name, setName] = useState<string>(product.name);
  const [price, setPrice] = useState<number>(product.price);
  const [description, setDescription] = useState<string>(product.description);

  const handleSaveButtonClick = useCallback(() => {
    const updatedProduct: TProduct = {
      id: product.id,
      imageUrl: product.imageUrl,
      name: name,
      price: price,
      description: description,
    };
    handleSubmit(updatedProduct);
  }, [product, name, price, description]);

  return (
    <div className={styles.wrapper}>
      <Grid container direction={"column"} spacing={4}>
        <Grid container item direction={"column"} spacing={2}>
          <Grid item>商品画像</Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Image
              src={generateTestImageUrl(product)}
              width={300}
              height={300}
              layout={"intrinsic"}
            />
          </Grid>
        </Grid>
        <Grid container item direction={"column"} spacing={2}>
          <Grid item>
            <Typography>商品名</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={name}
              variant={"outlined"}
              style={{ width: "100%" }}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container item direction={"column"} spacing={2}>
          <Grid item>
            <Typography>金額</Typography>
          </Grid>
          <Grid item>
            <TextField
              type={"number"}
              value={price}
              variant={"outlined"}
              style={{ width: "100%" }}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </Grid>
        </Grid>
        <Grid container item direction={"column"} spacing={2}>
          <Grid item>
            <Typography>説明</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={description}
              variant={"outlined"}
              multiline
              rows={6}
              style={{ width: "100%" }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container item justify={"center"}>
          <Button
            color={"primary"}
            variant={"contained"}
            onClick={() => handleSaveButtonClick()}
          >
            保存
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
