import { Typography } from "@material-ui/core";
import { UsersTable } from "../../components/Table/UsersTable";
import { useUser } from "../../contexts/user/user.context";
import { useEffect } from "react";

export default function UserPage(): JSX.Element {
  const { users, fetchUser } = useUser();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Typography variant="h4">User</Typography>
      <div style={{ height: "40px" }} />
      <UsersTable users={users} />
    </div>
  );
}
