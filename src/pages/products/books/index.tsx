import React, { useCallback, useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import ProductTable from "../../../components/Table/ProductTable";
import { useProducts } from "../../../contexts/products/products.context";
import ConfirmDialog from "../../../components/ConfirmDialog/ConfirmDialog";
import {
  TCreateProductRequest,
  TProduct,
} from "../../../contexts/products/products.type";
import { MuiModal } from "../../../components/Modal/MuiModal";
import { ProductModal } from "../../../container/Modal/ProductModal";

export default function BookPage(): JSX.Element {
  const {
    books,
    fetchProducts,
    postProduct,
    updateProduct,
    deleteProduct,
  } = useProducts();
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState<boolean>(
    false
  );
  const [selectedProduct, setSelectedProduct] = useState<TProduct>();
  const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);

  const handleDeleteButtonClick = useCallback((product: TProduct) => {
    setSelectedProduct(product);
    setIsConfirmDialogOpen(true);
  }, []);

  const handleEditButtonClick = useCallback((product: TProduct) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(async () => {
    await deleteProduct(selectedProduct);
    setIsConfirmDialogOpen(false);
    await fetchProducts();
  }, [selectedProduct]);

  const handleCreateNewProduct = useCallback(
    async (product: TCreateProductRequest) => {
      await postProduct(product);
      setIsProductModalOpen(false);
      await fetchProducts();
    },
    []
  );

  const handleUpdate = useCallback(async (product: TProduct) => {
    await updateProduct(product);
    setIsProductModalOpen(false);
  }, []);

  const handleAddButton = useCallback(() => {
    setSelectedProduct(null);
    setIsProductModalOpen(true);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Book</Typography>
        <Button
          color={"primary"}
          variant={"contained"}
          onClick={() => handleAddButton()}
        >
          新規追加
        </Button>
      </div>
      <div style={{ height: "40px" }} />
      <ProductTable
        products={books}
        deleteButtonClick={handleDeleteButtonClick}
        editButtonClick={handleEditButtonClick}
      />
      <ConfirmDialog
        open={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        title="本当に削除しますか？"
        contentText="この操作は、元には戻せません"
        handleAgree={handleConfirmDelete}
        handleCancel={() => setIsConfirmDialogOpen(false)}
      />
      <MuiModal
        isModalOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
      >
        <ProductModal
          product={selectedProduct}
          handleUpdate={handleUpdate}
          handleCreate={handleCreateNewProduct}
          pageCategory={"book"}
        />
      </MuiModal>
    </div>
  );
}
