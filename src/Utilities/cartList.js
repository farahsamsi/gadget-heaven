import { toast } from "react-toastify";

// getting cart from local storage
const getCartFromLS = () => {
  const fullCart = localStorage.getItem("cart");

  if (fullCart) {
    const cart = JSON.parse(fullCart);
    return cart;
  } else {
    return [];
  }
};

// adding to local storage
const addToCart = (product) => {
  const cart = getCartFromLS();

  const isExist = cart.find((item) => item.product_id == product.product_id);

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  if (isExist) {
    toast.info(`${product.product_title} is added again`);
  } else {
    toast.success(`Successfully added ${product.product_title} to the cart.`);
  }
};

// remove from local storage
const removeFromCartList = (product_id) => {
  const cart = getCartFromLS();
  const remaining = cart.filter((product) => product.product_id != product_id);

  localStorage.setItem("cart", JSON.stringify(remaining));
  toast.error("Removed From Cart");
};

// clear local storage
const clearCart = () => {
  localStorage.removeItem("cart");
};

export { addToCart, getCartFromLS, removeFromCartList, clearCart };
