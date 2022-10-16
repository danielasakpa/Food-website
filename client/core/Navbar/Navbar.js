import React from "react";
import useStyles from "./NavbarStyle.js";
import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import auth from "../../auth/auth-helper";

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

const Navbar = ({ color, fontFamily, moblieDisplay }) => {
  const jwt = auth.isAuthenticated();
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack
          direction="row"
          justifyContent="start"
          alignItems="center"
          mb={{ sm: 2, md: 10 }}
          display={{ xs: moblieDisplay, md: "block" }}
        >
          <Box fontFamily={fontFamily} className={classes.navLinks}>
            {navLinks.map((items) => {
              return (
                <a
                  key={items.name}
                  style={{
                    color: color,
                    fontFamily: fontFamily,
                    fontWeight: "200",
                  }}
                  href={items.link}
                >
                  <li>{items.name}</li>
                </a>
              );
            })}
            <a
              style={{
                color: color,
                fontFamily: fontFamily,
                fontWeight: "200",
              }}
              href={jwt.token ? "/" : "/signup"}
            >
              <li>Order Now</li>
            </a>
          </Box>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
