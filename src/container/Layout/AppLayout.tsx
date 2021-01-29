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
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="book" />
            </ListItem>
            <ListItem
              button
              key="clothes"
              onClick={() => router.push("/products/clothes")}
            >
              <ListItemIcon>
                <WorkSharp />
              </ListItemIcon>
              <ListItemText primary="clothes" />
            </ListItem>
            <ListItem
              button
              key="food"
              onClick={() => router.push("/products/foods")}
            >
              <ListItemIcon>
                <Fastfood />
              </ListItemIcon>
              <ListItemText primary="food" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="user" onClick={() => router.push("/users")}>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="user" />
            </ListItem>
            <ListItem button key="order" onClick={() => router.push("/orders")}>
              <ListItemIcon>
                <Toc />
              </ListItemIcon>
              <ListItemText primary="order" />
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
