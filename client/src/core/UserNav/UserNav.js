import React from "react";
import useStyles from "./UserNavStyle";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, withRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Cart from "../Cart/Cart";
import auth from "../../auth/auth-helper";

const theme = createTheme({
  components: {
    MuiAppBar: {
      variants: [
        {
          props: {},
          style: {
            backgroundColor: "#000000",
          },
        },
      ],
    },
  },
});

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#ff4081" };
};

const UserNav = withRouter((props) => {
  const userData = JSON.parse(sessionStorage.getItem("user"));

  const classes = useStyles();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = 240;
  const navItems = [
    { link: "/menu", name: "Our menu" },
    { link: "/about", name: "About Us" },
    { link: "/contact", name: "Contact Us" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JESUS EMBASSY
      </Typography>
      <Divider />
      <List>
        {auth.isAuthenticated() ? (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link
                  className={classes.UserNavLink}
                  to={`/user/${userData._id}` + auth.isAuthenticated().user._id}
                >
                  <Typography
                    style={isActive(
                      props.history,
                      `/user/${userData._id}` + auth.isAuthenticated().user._id
                    )}
                  >
                    My Profile
                  </Typography>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link className={classes.UserNavLink} to={"/"}>
                  <Typography style={isActive(props.history, "/")}>
                    Home
                  </Typography>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <Link className={classes.UserNavLink} to={item.link}>
                  <Typography style={isActive(props.history, `${item.link}`)}>
                    {item.name}
                  </Typography>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }} color="black">
        <AppBar component="nav" backgroundColor="#000000">
          <Toolbar backgroundColor="#000000">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={classes.UserNavLogo} to={"/"}>
                JESUS EMBASSY
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {auth.isAuthenticated() ? (
                <Button sx={{ color: "#fff" }}>
                  <Link
                    className={classes.UserNavLink}
                    to={
                      `/user/${userData._id}` + auth.isAuthenticated().user._id
                    }
                  >
                    <Typography
                      style={isActive(
                        props.history,
                        `/user/${userData._id}` +
                          auth.isAuthenticated().user._id
                      )}
                    >
                      My Profile
                    </Typography>
                  </Link>
                </Button>
              ) : (
                <Button sx={{ color: "#fff" }}>
                  <Link className={classes.UserNavLink} to={"/"}>
                    <Typography style={isActive(props.history, "/")}>
                      Home
                    </Typography>
                  </Link>
                </Button>
              )}
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  <Link className={classes.UserNavLink} to={item.link}>
                    <Typography style={isActive(props.history, `${item.link}`)}>
                      {item.name}
                    </Typography>
                  </Link>
                </Button>
              ))}
              <Cart />
            </Box>
            <Box sx={{ mr: 2, display: { sm: "none" } }}>
              <Cart />
            </Box>
            <Box
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
});

UserNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserNav;
