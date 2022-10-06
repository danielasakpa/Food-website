import React from "react"
import { useEffect } from "react";
import "./How-It-Works.css";
import {
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Meal from "../../Assets/images/Meals.jpg";
import Eat from "../../Assets/images/Eat.jpg";
import Enjoy from "../../Assets/images/Enjoy.jpg";
import Deliver from "../../Assets/images/Deliver.jpg";

import AOS from "aos";
// import "aos/dist/aos.css";

const HTWContent = [
  {
    title: "Choose your meals",
    number: "1",
    image: Meal,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    title: "We cook & deliver meal",
    number: "2",
    image: Deliver,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    title: "Heat & eat in minutess",
    number: "3",
    image: Eat,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    title: "Enjoy & Repeat",
    number: "4",
    image: Enjoy,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
];

const theme = createTheme({
  components: {
    MuiCard: {
      variants: [
        {
          props: {
            variant: "HTW",
          },
          style: {
            border: "2px solid #000000",
            margin: "0 auto",
            maxWidth: 600,
            position: "relative",
            padding: 5,
            overflow: "visible",
          },
        },
      ],
    },
  },
});

theme.typography.h3 = {
  textTransform: "uppercase",
  fontFamily: "Nuosu SIL",
  fontSize: "1.2rem",
  "@media (max-width:600px)": {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
};

theme.typography.h5 = {
  textTransform: "uppercase",
  fontFamily: "Nuosu SIL",
  fontSize: "1.2rem",
  "@media (max-width:600px)": {
    fontSize: "1.2rem",
    marginTop: 15,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
};

theme.typography.body1 = {
  fontWeight: "400",
  fontSize: "1.2rem",
  "@media (max-width:600px)": {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

theme.typography.body2 = {
  fontWeight: "400",
  fontSize: "1.2rem",
  padding: "3px 10px",
  border: "2px solid #000000",
  position: "absolute",
  top: -20,
  left: 20,
  backgroundColor: "#FFFFFF",
  "@media (max-width:600px)": {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
};

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Stack className="HowItWorks" marginTop={15}>
        <ThemeProvider theme={theme}>
          <Typography textAlign="center" variant="h3">
            How it works
          </Typography>
          <Grid container alignItems="center" spacing={4} marginTop={3}>
            {HTWContent.map((items) => {
              return (
                <Grid item xs={12} key={items.title} md={6}>
                  <Card
                    variant="HTW"
                    data-aos="zoom-in"
                    sx={{ height: "100%" }}
                  >
                    <Typography variant="body2">{items.number}</Typography>
                    <CardContent>
                      <Typography variant="h5" color="#000000">
                        {items.title}
                      </Typography>
                      <CardMedia
                        component="img"
                        height="194"
                        loading="lazy"
                        image={items.image}
                        alt="Paella dish"
                      />
                      <Typography marginTop={1} variant="body1">
                        {items.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </ThemeProvider>
      </Stack>
    </>
  );
};

export default HowItWorks;
