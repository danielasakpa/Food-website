import React from "react";
import useStyles from "./NavbarStyle.js";
import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import auth from "../../auth/auth-helper";
import { Link } from "react-router-dom";

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

const navLinks = [
  { link: "/menu", name: "Our Menu" },
  { link: "/aboutus", name: "About Us" },
  { link: "/contact", name: "Contact" },
];

const Navbar = ({ color, mb , fontFamily, moblieDisplay }) => {
  const jwt = auth.isAuthenticated();
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack
          width="250px"
          direction="row"
          justifyContent="start"
          alignItems="center"
          mb={{ sm: 2, md: mb}}
          display={{ xs: moblieDisplay, md: "block" }}
        >
          <Box fontFamily={fontFamily}>
            {navLinks.map((items) => {
              return (
                <Link
                  className={classes.navLinks}
                  key={items.name}
                  style={{
                    color: color,
                    fontFamily: fontFamily,
                    fontWeight: "200",
                  }}
                  to={items.link}
                >
                  <li>{items.name}</li>
                </Link>
              );
            })}
            <Link
              className={classes.navLinks}
              style={{
                color: color,
                fontFamily: fontFamily,
                fontWeight: "200",
              }}
              to={jwt.token ? "/" : "/signup"}
            >
              <li>Order Now</li>
            </Link>
          </Box>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
