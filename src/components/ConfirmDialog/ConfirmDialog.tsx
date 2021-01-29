import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

type ConfirmDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  contentText: string;
  handleAgree: () => void;
  handleCancel: () => void;
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onClose,
  title,
  contentText,
  handleAgree,
  handleCancel,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{contentText}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleAgree}>はい</Button>
      <Button onClick={handleCancel}>キャンセル</Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmDialog;
