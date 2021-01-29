import { useState } from "react";
import { TUser } from "./user.type";
import { apiClient } from "../../infrastructure/apiClient/apiClient";

export const userOperations = () => {
  const [users, setUsers] = useState<Array<TUser>>([]);

  const fetchUser = async () => {
    try {
      const idToken = await apiClient.auth.getIdToken();
      const users = await apiClient.get.users(idToken);
      setUsers(users);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    users,
    fetchUser,
  };
};
