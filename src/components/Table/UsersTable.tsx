import { TUser } from "../../contexts/user/user.type";
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

type UsersTableProps = {
  users: Array<TUser>;
};

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ minWidth: "100px" }}>ユーザー名</TableCell>
            <TableCell align="left" style={{ minWidth: "100px" }}>
              メールアドレス
            </TableCell>
            <TableCell align={"left"} style={{ minWidth: "150px" }}>
              住所
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="left">
                〒{user.address.postalCode} {user.address.prefecture}{" "}
                {user.address.city} {user.address.addressLine}{" "}
                {user.address.building} {user.address.tel}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
