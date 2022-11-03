import React, { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Meal from "../../Assets/images/Meals.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CartContext } from "../../CartContext";
import { Button } from "@mui/material";

const ProductCard = ({ products }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(products.id);

  return (
    <Grid data-aos="fade-up" item key={products.id} xs={12} sm={6} md={3}>
      <Card
        sx={{
          height: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
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
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="h2">
              {products.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {`$${products.price}`}
            </Typography>
          </Stack>
          <Typography variant="body2" color="gray">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like
          </Typography>
        </CardContent>
        <CardActions>
          {productQuantity > 0 ? (
            <Stack alignItems="center" width="100%">
              <Stack direction="row" width="80%" justifyContent="space-between">
                <Button
                  variant="contained"
                  color="black"
                  onClick={() => cart.addOneToCart(products.id)}
                >
                  <AddShoppingCartIcon /> +
                </Button>

                <Button
                  variant="contained"
                  color="black"
                  onClick={() => cart.removeOneFromCart(products.id)}
                >
                  <RemoveShoppingCartIcon /> -
                </Button>
              </Stack>
              <Button
                display="flex"
                flexDirection="row"
                m="0 auto"
                justifyContent="space-between"
                alignItems="center"
                onClick={() => cart.deleteFromCart(products.id)}
              >
                {" "}
                <Typography color="red">Remove from cart</Typography>
              </Button>
            </Stack>
          ) : (
            <>
              <Button
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                color="black"
                onClick={() => cart.addOneToCart(products.id)}
              >
                <AddShoppingCartIcon /> Add To Cart
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
