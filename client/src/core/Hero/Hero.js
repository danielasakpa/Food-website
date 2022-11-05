import React from "react";
import useStyles from "./HeroStyle.js";
import {
  Box,
  Container,
  Typography,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import SignupImg from "../../Assets/images/hero.jpg";
import Navbar from "../Navbar/Navbar";
import { Stack } from "@mui/system";
import NavMenu from "../NavMenu/NavMenu";
import { Link } from "react-router-dom";

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
            fontFamily: "Bebas Neue",
            padding: "15px 30px",
            fontWeight: "400",
            backgroundColor: "black",
            boxShadow: "none",
            color: "#ffffff",
            marginTop: "35px",
            border: "2px solid black",
            "&:hover": {
              backgroundColor: "#F1D4CA",
              color: "black",
            },
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
  color: "#fffee6",
  fontFamily: "Averia Serif Libre",
  fontSize: "3.2rem",
  "@media (max-width:599px)": {
    fontSize: "1.3rem",
  },
};

theme.typography.h2 = {
  fontSize: "2rem",
  fontFamily: "Bebas Neue",
  marginBottom: 2,
  paddingTop: "6px",
  color: "#fffee6",
  lineHeight: 1.2,
  "@media (max-width:599px)": {
    fontSize: "3rem",
  },
};

theme.typography.body1 = {
  fontSize: "1.2rem",
  fontFamily: "Bebas Neue",
  paddingTop: "10px",
  color: "#fffee6",
  "@media (max-width:599px)": {
    fontSize: "0.75rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
};

const Hero = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${SignupImg})`,
          height: "90vh",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        position="relative"
      >
        <NavMenu />
        <Container maxWidth="xl">
          <Stack
            direction="row"
            alignItems="end"
            justifyContent="space-between"
            pb={3}
            height="90vh"
          >
            <ThemeProvider theme={theme}>
              <Box marginTop={{ xs: 0, md: 2 }} className={classes.slidRight}>
                <Navbar color="#fffee6" mb={10} moblieDisplay="none" fontFamily="Averia Serif Libre"/>
                <Typography
                  variant="h2"
                  fontFamily={{ xs: "Averia Serif Libre", lg: "Bebas Neue" }}
                  lineHeight="1"
                  display={{ xs: "block", md: "none" }}
                >
                  WE SPEAK THE GOOD FOOD LANGUAGE
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </Typography>
                <Link to={"/menu"} className={classes.orderBtn}><Button variant="contained">Discover Our Menu</Button></Link>
              </Box>
              <Box
                textAlign="right"
                display={{ xs: "none", md: "block" }}
                className={classes.slideLeft}
              >
                <Typography variant="h3" marginBottom={29}>
                  WE SPEAK THE GOOD FOOD LANGUAGE
                </Typography>
                <Box display="flex" flexDirection="row" justifyContent="end">
                  <Typography variant="body1" mr={4}>
                    JESUS EMBASSY
                  </Typography>
                  <Typography variant="body1">@ 2022</Typography>
                </Box>
              </Box>
            </ThemeProvider>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
