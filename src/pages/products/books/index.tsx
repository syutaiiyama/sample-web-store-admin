import React, { useCallback, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import ProductTable from "../../../components/Table/ProductTable";
import { useProducts } from "../../../contexts/products/products.context";
import ConfirmDialog from "../../../components/ConfirmDialog/ConfirmDialog";
import { TProduct } from "../../../contexts/products/products.type";
import { MuiModal } from "../../../components/Modal/MuiModal";
import { ProductModal } from "../../../container/Modal/ProductModal";

export default function BookPage(): JSX.Element {
  const { books, fetchProducts } = useProducts();
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
    // TODO: await deleteProduct(selectedProduct);
    setIsConfirmDialogOpen(false);
  }, [selectedProduct]);

  const handleUpdate = useCallback((product: TProduct) => {
    //TODO: await updateProduct(product);
    setIsProductModalOpen(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Typography variant="h4">Book</Typography>
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
        <ProductModal product={selectedProduct} handleSubmit={handleUpdate} />
      </MuiModal>
    </div>
  );
}
