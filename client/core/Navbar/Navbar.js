import React, { useState } from "react";
import "./Navbar.css"
import {
  Typography,
  Stack,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h6",
          },
          style: {
            backgroundColor: "#FFFFFF",
          },
        },
      ],
    },
  },
});

theme.typography.h6 = {
  padding: 10,
  cursor: "pointer",
  textTransform: "uppercase",
  fontFamily: "Nuosu SIL",
  fontSize: "1.2rem",
  "@media (max-width:600px)": {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <ThemeProvider theme={theme}>
      <nav>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <Typography
            variant="h6"
            textAlign="center"
            border="2px solid black"
            borderRadius={1}
          >
            Jesus Embassy
          </Typography>
          <div className="nav-links">
            <a href="/#">
              <li>Our menu</li>
            </a>
            <a href="/#">
              <li>About Us</li>
            </a>
            <a href="/#">
              <li>Contact</li>
            </a>
            <a href="/#">
              <li>Jobs</li>
            </a>
            <a href="/#">
              <li>Order Now</li>
            </a>
          </div>
          <Stack
            sx={{ display: { md: "none", xs: "block" } }}
            className="navbar-menu"
          >
            {toggleMenu ? (
              <Box
                border="2px solid black"
                padding="5px 10px"
                borderRadius={1}
              >
                <RiCloseLine
                  color="#000000"
                  size={30}
                  onClick={() => setToggleMenu(false)}
                />
              </Box>
            ) : (
              <Box
                border="2px solid black"
                backgroundColor="#F1D4CA"
                padding="5px 10px"
                borderRadius={1}
              >
                <RiMenu3Line
                  color="#000000"
                  size={30}
                  onClick={() => setToggleMenu(true)}
                />
              </Box>
            )}
            {toggleMenu && (
              <div className="navbar-menu_container scale-up-center">
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
                    <a href="jobs">Jobs</a>
                  </p>
                </div>
              </div>
            )}
          </Stack>
        </Stack>
      </nav>
    </ThemeProvider>
  </>
  );
};

export default Navbar;
