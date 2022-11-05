import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { CartContext } from "../../CartContext";
import { Typography } from "@mui/material";
import CartProduct from "../CartProduct/CartProduct";
import { Stack } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import PaystackBtn from "../PaystackBtn/PaystackBtn";

const Cart = () => {
  const cart = useContext(CartContext);
  const [state, setState] = React.useState({
    right: false,
  });

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const CartDrawer = (anchor) => (
    <Box
      sx={{
        width: { md: "500px" },
        padding: "20px",
      }}
      role="presentation"
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Your Cart:</Typography>
        <CloseIcon cursor="pointer" onClick={toggleDrawer(anchor, false)} />
      </Stack>
      {productsCount > 0 ? (
        <>
          {cart.items.map((currentProduct, idx) => (
            <CartProduct
              key={idx}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
            ></CartProduct>
          ))}

          <h1>Total: {cart.getTotalCost().toFixed(0)}</h1>

          <PaystackBtn amount={cart.getTotalCost().toFixed(0)} />
        </>
      ) : (
        <p>There are no items in your cart!</p>
      )}
    </Box>
  );

  return (
    <>
      <Button sx={{ color: "#fff" }} onClick={toggleDrawer("right", true)}>
        <Badge badgeContent={productsCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {CartDrawer("right")}
      </Drawer>
    </>
  );
};

export default Cart;
