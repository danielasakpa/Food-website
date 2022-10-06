import React from "react";
import "./Hero.css";
import {
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import HeroPhoto from "../../Assets/images/Hero.jpg";

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
            boxShadow: "none",
            color: "black",
            marginTop: "35px",
            border: "2px solid black",
            "&:hover": {
              backgroundColor: "#000000",
              color: "#FFFFFF",
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

theme.typography.body1 = {
  fontSize: "1.2rem",
  paddingTop: "10px",
  "@media (max-width:599px)": {
    fontSize: "0.95rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
};

const Hero = () => {
  return (
    <>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        marginTop={{ xs: 8, sm: 12 }}
        justify-content="space-between"
      >
        <ThemeProvider theme={theme}>
          <Stack marginTop={{ xs: 0, md: 2 }} className="slide-right">
            <Typography variant="h3">JESUS EMBASSY EATERY</Typography>
            <Typography variant="h2">
              WE SPEAK THE GOOD FOOD LANGUAGE
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </Typography>
            <Button variant="contained">Discover Our Menu</Button>
          </Stack>
          <Stack className="slide-left">
            <img
              src={HeroPhoto}
              loading="lazy"
              alt="HeroImg"
              className="HeroImg"
            />
          </Stack>
        </ThemeProvider>
      </Stack>
    </>
  );
};

export default Hero;
