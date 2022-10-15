import React, { useState } from "react";
import useStyles from "./NavbarStyle.js";
import { Typography, Stack, Box } from "@mui/material";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import auth from "../../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";

const NavMenu = () => {
  const jwt = auth.isAuthenticated();
  const classes = useStyles();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Box
      position="absolute"
      px={2}
      width="100%"
      top={20}
      sx={{ display: { sm: "none", xs: "flex" } }}
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
        {toggleMenu ? (
          <Box
            border="2px solid #000000"
            textAlign="center"
            backgroundColor="#fffee6"
            padding="17px"
            borderRadius="60%"
            onClick={() => setToggleMenu(false)}
          >
            <Typography fontFamily="Bebas Neue" fontSize={15} color="#000000">
              CLOSE
            </Typography>
          </Box>
        ) : (
          <Box
            border="2px solid black"
            textAlign="center"
            backgroundColor="#fffee6"
            padding="18px"
            borderRadius="60%"
            onClick={() => setToggleMenu(true)}
          >
            <Typography fontFamily="Bebas Neue" fontSize={15} color="#000000">
              MENU
            </Typography>
          </Box>
        )}
        {toggleMenu && (
          <div className={classes.navbarMenuContainer}>
            <div className="navbar-menu_container-links">
              <p>
                <a href="menu">Our Menu</a>
              </p>
              <p>
                <a href="about">About Us</a>
              </p>
              <p>
                <a href="contact">Contact</a>
              </p>
              <p>
                <a href={jwt.token ? "/" : "/signup"}>Order Now</a>
              </p>
            </div>
          </div>
        )}
      </Stack>
    </Box>
  );
};

export default NavMenu;
