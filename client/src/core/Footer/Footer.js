import React from "react";
import {
  Typography,
  Box,
  Stack,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import NorthIcon from "@mui/icons-material/North";
import { Link, animateScroll as scroll } from "react-scroll";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {
            maxWidth: "max-content",
            padding: "15px 30px",
            fontWeight: "400",
            backgroundColor: "#F1D4CA",
            color: "black",
            marginTop: "35px",
            border: "2px solid black",
          },
        },
      ],
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  },
});

theme.typography.h3 = {
  color: "#E48C71",
  fontSize: "1.2rem",
  "@media (max-width:599px)": {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.8rem",
  },
};

theme.typography.h2 = {
  fontSize: "1.2rem",
  paddingTop: "6px",
  fontFamily: "Nuosu SIL",
  lineHeight: 1.2,
  "@media (max-width:599px)": {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "4rem",
  },
};

theme.typography.h6 = {
  padding: 10,
  cursor: "pointer",
  textTransform: "uppercase",
  backgroundColor: "#FFFFFF",
  fontFamily: "Nuosu SIL",
  fontSize: "1.2rem",
  "@media (max-width:600px)": {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
};

theme.typography.body2 = {
  fontSize: "1.2rem",
  fontWeight: "600",
  paddingTop: "10px",
  "@media (max-width:599px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
};

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="flex-end"
            justifyContent="space-between"
            mt={6}
          >
            <Box order={{ xs: 2, md: 1 }}>
              <Navbar
                mb={0}
                color="#000000"
                moblieDisplay="block"
                fontFamily="Bebas Neue"
              />
            </Box>
            <Box order={{ xs: 2, md: 2 }}>
              <Typography
                variant="body1"
                sx={{ maxWidth: 600 }}
                fontFamily="pragmatica-extrabold"
                mt={{ xs: 3, md: 0 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </Typography>
            </Box>
            <Box
              order={{ xs: 1, md: 3 }}
              mb={{ xs: 2, md: 0 }}
              alignSelf={{ xs: "flex-end", md: "flex-end" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h6" fontFamily="Bebas Neue" mb={0.5}>
                UP
              </Typography>
              <Link onClick={scrollToTop}>
                <Box
                  display="flex"
                  alignItems="center"
                  textAlign="center"
                  color="#fffee6"
                  backgroundColor="#000000"
                  padding="16px"
                  borderRadius="50%"
                  cursor="pointer"
                >
                  <NorthIcon cursor="pointer" />
                </Box>
              </Link>
              <Box mt={3}>
                <Typography variant="body1" fontFamily="Bebas Neue">
                  Instagram
                </Typography>
                <Typography variant="body1" fontFamily="Bebas Neue">
                  FaceBook
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Footer;
