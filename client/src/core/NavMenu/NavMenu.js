import React, { useState } from "react";
import useStyles from "./NavMenuStyle";
import { Typography, Stack, Box } from "@mui/material";
import auth from "../../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;
const navItems = [
  { link: "/menu", name: "Menu" },
  { link: "/about", name: "About Us" },
  { link: "/contact", name: "Contact Us" },
];

const NavMenu = (props) => {
  const jwt = auth.isAuthenticated();
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <a className={classes.navMenuLink} href={item.link}>
                  {item.name}
                </a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <a
                className={classes.navMenuLink}
                href={jwt.token ? "/" : "/signup"}
              >
                Order Now
              </a>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      position="fixed"
      zIndex={3}
      px={2}
      width="100%"
      top={20}
      sx={{ display: { md: "none", xs: "flex" } }}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        fontFamily="Averia Serif Libre"
        p={2}
        display="inline-block"
        borderRadius={2}
        border="2px solid #000000"
        backgroundColor="#fffee6"
        variant="h4"
        fontSize="17px"
      >
        JESUS EMBASSY
      </Typography>
      <Stack display="inline-block">
        <Box
          border="2px solid #000000"
          textAlign="center"
          borderRadius={2}
          backgroundColor="#fffee6"
          padding="14px"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <Typography fontFamily="Bebas Neue" fontSize={15} color="#000000">
            MENU
          </Typography>
        </Box>
      </Stack>
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
  );
};

export default NavMenu;
