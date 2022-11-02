import { useContext } from "react";
import { Button } from "@mui/material";
import { Wrapper } from "./CartProductStyle";
import { CartContext } from "../../CartContext";
import { getProductData } from "../../productsStore";
import Meal from "../../Assets/images/Meals.jpg";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  return (
    <>
      <Wrapper>
        <div>
          <h3>{productData.title}</h3>
          <div className="information">
            <p>Price: ${productData.price}</p>
            <p>Total: ${(quantity * productData.price).toFixed(2)}</p>
          </div>
          <div className="buttons">
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => cart.removeOneFromCart(id)}
            >
              -
            </Button>
            <p>{quantity}</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => cart.addOneToCart(id)}
            >
              +
            </Button>
          </div>
        </div>
        <img src={Meal} alt={productData.title} />
      </Wrapper>
      <Button
        size="sm"
        variant="contained"
        fullWidth
        onClick={() => cart.deleteFromCart(id)}
      >
        Remove
      </Button>
    </>
  );
};

export default CartProduct;
