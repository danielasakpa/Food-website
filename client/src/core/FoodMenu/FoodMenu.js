import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../Footer/Footer";
import ProfileImg from "../../Assets/images/profile.jpg";
import UserNav from "../UserNav/UserNav";
import HowItWork from "../How-It-Works/How-It-Works";
import AOS from "aos";
import "aos/dist/aos.css";
import { productsArray } from "../../productsStore";
import ProductCard from "./ProductCard";

AOS.init({
  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
});

const FoodMenu = () => {
  return (
    <Container maxWidth="xl">
      <UserNav />
      <Box
        sx={{
          backgroundImage: `url(${ProfileImg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxWidth: "xl",
          height: "300px",
          m: "0 auto",
          borderRadius: "20px ",
          mt: 10,
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h1"
          textAlign="center"
          fontFamily="Averia Serif Libre"
          fontSize="70px"
          color="#fffee6"
        >
          Our menu
        </Typography>
        <Typography variant="body2" textAlign="center" mt={2} color="#fffee6">
          Our chefs have designed a variety of nutritious, gourmet dishes for
          you to relish.
        </Typography>
      </Box>
      <Grid maxWidth="lg" m="0 auto" container spacing={{xs: 0, sm: 2}}>
        {productsArray.map((products) => (
          <ProductCard products={products} />
        ))}
      </Grid>
      <HowItWork />
      <Footer />
    </Container>
  );
};

export default FoodMenu;
