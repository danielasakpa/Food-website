import React from "react";
import "./Footer.css";
import {
  Typography,
  Stack,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import MovingText from "../Moving-Text/Moving-Text";
import footer1 from "../../Assets/images/Footer/footer1.jpg";
import footer2 from "../../Assets/images/Footer/footer2.jpg";
import footer3 from "../../Assets/images/Footer/footer3.jpg";
import footer4 from "../../Assets/images/Footer/footer4.jpg";
import footer5 from "../../Assets/images/Footer/footer5.jpg";
import footer6 from "../../Assets/images/Footer/footer6.jpg";

const footerImages = [
  { img: footer1 },
  { img: footer2 },
  { img: footer3 },
  { img: footer4 },
  { img: footer5 },
  { img: footer6 },
];

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
  fontWeight: "400",
  paddingTop: "10px",
  "@media (max-width:599px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
};

const Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container backgroundColor="#FFFFFF" marginTop={6}>
          <Grid
            item
            xs={12}
            md={6}
            textAlign="center"
            border="2px solid #000000"
            padding={7}
            alignSelf="center"
            justifySelf="center"
          >
            <Typography variant="h3">JESUS EMBASSY EATERY</Typography>
            <Stack className="footer-link">
              <Stack>
                <Typography variant="body2">CONTACT US</Typography>
                <a href="/">Jesus@Embassy.com</a>
              </Stack>
              <Stack>
                <Typography variant="body2">CALL US</Typography>
                <a href="/">08028595971</a>
              </Stack>
              <Stack>
                <Typography variant="body2">FIND US</Typography>
                <a href="/">422 Franklin St, Michigan City, IN 46360-3385</a>
              </Stack>
              <Stack>
                <Typography variant="body2">Follow</Typography>
                <a href="/">Instagram</a>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            border="2px solid #000000"
            borderTop={{ xs: 0, md: 2 }}
            borderLeft={{ xs: 2, md: 0 }}
            position="relative"
            overflow="hidden"
          >
            <MovingText />
            <Grid
              container
              rowSpacing={1}
              alignItems="center"
              marginTop={7}
              borderTop="2px solid #000000"
              columnSpacing={{ xs: 1 }}
            >
              {footerImages.map((items) => {
                return (
                  <Grid
                    item
                    marginTop={2}
                    key={items.img}
                    xs={12}
                    sm={6}
                    md={4}
                    marginBottom={{ xs: 2, md: 0 }}
                  >
                    <img
                      alt="footerImg"
                      className="footerImg"
                      loading="lazy"
                      src={items.img}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="#E48C71"
          border="2px solid #000000"
          borderTop="0"
          padding="10px"
        >
          <Typography>&copy; 2021 JESUS EMBASSY EATERY</Typography>
          <Stack order={{ xs: 3, md: 2 }} marginTop={{ xs: 3, md: 0 }}>
            <a href="/" className="back-To-Top">
              TOP
            </a>
          </Stack>
          <Typography
            variant="h6"
            textAlign="center"
            border="2px solid black"
            marginTop={{ xs: 3, md: 0 }}
            borderRadius={1}
            order={{ xs: 2, md: 3 }}
          >
            Jesus Embassy
          </Typography>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default Footer;
