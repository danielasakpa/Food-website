import React from "react";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Meal from "../../Assets/images/Meals.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProfileImg from "../../Assets/images/profile.jpg";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Menu = () => {
  return (
    <>
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
          maxWidth: "lg",
          height: "300px",
          m: "0 auto",
          borderRadius: "20px ",
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
      <Container maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={Meal}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">order</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Menu;
