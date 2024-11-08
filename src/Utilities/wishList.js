import { toast } from "react-toastify";

// get wishlist from LS
const getWishlistFromLS = () => {
  const fullWishlist = localStorage.getItem("wishlist");

  if (fullWishlist) {
    const wishlist = JSON.parse(fullWishlist);
    return wishlist;
  } else {
    return [];
  }
};

// add item to wishlist in LS
const addToWishlist = (product) => {
  const wishlist = getWishlistFromLS();
  const isExist = wishlist.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) {
    return toast.error(`${product.product_title} is Already added.`);
  } else {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    toast.success(`Successfully Added ${product.product_title} to Wishlist`);
  }
};

// remove from LS
const removeFromWishlist = (product_id) => {
  const wishlist = getWishlistFromLS();
  const remaining = wishlist.filter(
    (product) => product.product_id != product_id
  );

  localStorage.setItem("wishlist", JSON.stringify(remaining));
  toast.error(`Successfully Removed`);
};

export { addToWishlist, getWishlistFromLS, removeFromWishlist };
