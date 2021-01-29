import React from "react";
import {
  AppBar,
  createStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Fastfood,
  MenuBook,
  WorkSharp,
  AccountBox,
  Toc,
} from "@material-ui/icons";
import { useRouter } from "next/router";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const AppLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Sample Web Store Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key="book"
              onClick={() => router.push("/products/books")}
            >
              <ListItemIcon>
                <MenuBook
                  color={
                    router.pathname === "/products/books"
                      ? "primary"
                      : undefined
                  }
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={
                    router.pathname === "/products/books"
                      ? "primary"
                      : undefined
                  }
                >
                  book
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="clothes"
              onClick={() => router.push("/products/clothes")}
            >
              <ListItemIcon>
                <WorkSharp
                  color={
                    router.pathname === "/products/clothes"
                      ? "primary"
                      : undefined
                  }
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={
                    router.pathname === "/products/clothes"
                      ? "primary"
                      : undefined
                  }
                >
                  clothes
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="food"
              onClick={() => router.push("/products/foods")}
            >
              <ListItemIcon>
                <Fastfood
                  color={
                    router.pathname === "/products/foods"
                      ? "primary"
                      : undefined
                  }
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={
                    router.pathname === "/products/foods"
                      ? "primary"
                      : undefined
                  }
                >
                  food
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="user" onClick={() => router.push("/users")}>
              <ListItemIcon>
                <AccountBox
                  color={router.pathname === "/users" ? "primary" : undefined}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={router.pathname === "/users" ? "primary" : undefined}
                >
                  user
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button key="order" onClick={() => router.push("/orders")}>
              <ListItemIcon>
                <Toc
                  color={router.pathname === "/orders" ? "primary" : undefined}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  color={router.pathname === "/orders" ? "primary" : undefined}
                >
                  order
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
