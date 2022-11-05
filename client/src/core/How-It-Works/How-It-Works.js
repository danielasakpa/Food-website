import React from "react";
import {
  Typography,
  Stack,
  Container,
  Box,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Meal from "../../Assets/images/Meals.jpg";
import Eat from "../../Assets/images/Eat.jpg";
import Enjoy from "../../Assets/images/Enjoy.jpg";
import Deliver from "../../Assets/images/Deliver.jpg";
import { makeStyles } from "@mui/styles";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease',
});

const useStyles = makeStyles((theme) => ({
  HowItWorks: {
    backgroundColor: "#fffee6",
    padding: "20px",
  },
}));

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
    maxWidth: 500,
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
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl">
        <Stack
          marginTop={10}
          alignItems="center"
          justifyContent="center"
          className={classes.HowItWorks}
        >
          <ThemeProvider theme={theme}>
            <Grid
              container
              maxWidth="lg"
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  backgroundImage: `url(${Meal})`,
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                data-aos="fade-up"
                border="4px solid black"
                position="relative"
                height="500px"
                width="300px"
              >
                <Typography
                  bottom={5}
                  variant="h3"
                  fontSize="1.8rem"
                  fontFamily="Averia Serif Libre"
                  color="#fffee6"
                  position="absolute"
                >
                  Our menu changes with the seasons, and we change with it.
                </Typography>
              </Grid>
              <Grid
                position="relative"
                display="flex"
                flexDirection="column"
                data-aos="fade-left"
                item
                xs={12}
                md={6}
              >
                <Typography
                  fontFamily="pragmatica-extrabold"
                  variant="bod1"
                  fontSize="1rem"
                  marginTop={6}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </Typography>
                <Typography
                  fontFamily="pragmatica-extrabold"
                  variant="bod1"
                  fontSize="1rem"
                  marginTop={{ xs: 6, md: 10 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              mt={{ xs: 6, md: 40 }}
              position="relative"
              container
              rowSpacing={{ xs: 5, md: 0 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  backgroundImage: `url(${Deliver})`,
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                data-aos="fade-up"
                border="4px solid black"
                position="relative"
                height="350px"
                width="100px"
              >
                <Typography
                  bottom={5}
                  variant="h3"
                  fontSize="1.8rem"
                  fontFamily="Averia Serif Libre"
                  color="#fffee6"
                  position="absolute"
                >
                  Choose your meals.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  fontFamily="pragmatica-extrabold"
                  variant="bod1"
                  data-aos="fade-up"
                  fontSize="1rem"
                  pr={{ xs: 0, md: 3 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  backgroundImage: `url(${Eat})`,
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                data-aos="fade-up"
                border="4px solid black"
                height="350px"
                width="800px"
                position={{ xs: "relative", md: "absolute" }}
                top={{ xs: 20, md: -150 }}
                right={{ xs: 0, md: 1 }}
              >
                {" "}
                <Typography
                  bottom={5}
                  variant="h3"
                  fontSize="1.8rem"
                  fontFamily="Averia Serif Libre"
                  color="#fffee6"
                  position="absolute"
                >
                  Choose your meals.
                </Typography>
              </Grid>
            </Grid>
            <Box
              direction={{ xs: "column", md: "row" }}
              alignItems={{ XS: "center", md: "start" }}
              width="100%"
              height="200px"
              position="relative"
              justifyContent={{ xs: "center", md: "end" }}
              mt={{ xs: 5, md: 0 }}
            >
              <Typography
                variant="body1"
                fontFamily="Bebas Neue"
                sx={{ fontWeight: "700" }}
                alignSelf="end"
                justifySelf="end"
                data-aos="fade-left"
                position={{ xs: "relative", md: "absolute" }}
                top={{ xs: 0, md: -40 }}
                right={{ xs: 0, md: 1 }}
              >
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
                Suspendisse varius enim in eros elementum tristique. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla. Suspendisse varius
                enim in eros elementum tristique.
              </Typography>
            </Box>
            <Grid
              container
              maxWidth="lg"
              mt={{ xs: 6, sm: 2, md: 7 }}
              columnSpacing={{ xs: 1, sm: 0, md: 5 }}
            >
              <Grid
                display="flex"
                flexDirection="column"
                data-aos="fade-right"
                mb={{ xs: 5, md: 0 }}
                item
                xs={12}
                md={6}
              >
                <Typography
                  fontFamily="pragmatica-extrabold"
                  variant="bod1"
                  fontSize="1rem"
                  marginTop={6}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </Typography>
                <Typography
                  fontFamily="pragmatica-extrabold"
                  variant="bod1"
                  fontSize="1rem"
                  marginTop={{ xs: 6, md: 10 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                position="relative"
                sx={{
                  backgroundImage: `url(${Enjoy})`,
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                data-aos="fade-up"
                border="4px solid black"
                height="500px"
                width="300px"
              >
                <Typography
                  bottom={5}
                  variant="h3"
                  fontSize="1.8rem"
                  fontFamily="Averia Serif Libre"
                  color="#fffee6"
                  position="absolute"
                >
                  Choose your meals.
                </Typography>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Stack>
      </Container>
    </>
  );
};

export default HowItWorks;