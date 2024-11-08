import { useEffect, useState } from "react";
import { clearCart, getCartFromLS, removeFromCartList } from "../Utilities/cartList";
import CartCard from "./CartCard";
import { toast } from "react-toastify";
import { useNavigate, useNavigation } from "react-router-dom";



const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const cart = getCartFromLS();
        setCartItems(cart);
    }, []);

    // sort by price functionality
    const handleSort = () => {
        const cart = getCartFromLS();
        const sorted = [...cart].sort((a, b) => b.price - a.price);
        setCartItems(sorted);
        toast('Products Sorted Successfully')
    };


    //total price functionalities
    const [price, setPrice] = useState(0);
    useEffect(() => {
        const cart = getCartFromLS();
        const totalPrice = cart.reduce((price, product) => price + product.price, 0);
        setPrice(totalPrice);
    }, [])

    // remove item functionality
    const handleRemoveFromCart = (product_id) => {
        removeFromCartList(product_id);
        const cart = getCartFromLS();
        setCartItems(cart);

        const totalPrice = cart.reduce((price, product) => price + product.price, 0);
        setPrice(totalPrice);
    }

    // purchase btn functionalities

    const handlePurchase = () => {
        document.getElementById('my_modal_5').showModal();
    }
    const handleCloseBtn = () => {
        setCartItems([]);
        setPrice(0);
        clearCart();
        navigate('/');
    }



    return (
        <div className="px-2">
            <header className="flex justify-between items-center my-5 lg:my-12">
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <h1 className="text-xl md:text-2xl font-bold">Total cost: ${price}</h1>
                    <button
                        onClick={handleSort}
                        disabled={cartItems.length === 0 || price === 0}
                        className="btn btn-outline border-[#9538E2] bg-white text-[#9538E2] rounded-[32px]"
                    >Sort by Price
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/9538e2/sorting-answers.png" alt="sorting-answers" />
                    </button>
                    <button
                        onClick={() => handlePurchase()}
                        disabled={cartItems.length === 0 || price === 0}
                        className="btn bg-[#9538E2] text-white rounded-[32px] hover:text-black"
                    >Purchase</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box space-y-4 text-center flex flex-col items-center">
                            <img width="70" height="70" src="https://img.icons8.com/color/48/approval--v1.png" alt="approval--v1" />
                            <h3 className="font-bold text-2xl">Payment Successful</h3>
                            <div className="divider"></div>
                            <div>
                                <p className="font-medium text-black/60">Thankyou for Purchasing</p>
                                <p className="font-medium text-black/60">Total Price : ${price}</p>
                            </div>
                            <div className="modal-action w-full">
                                <form method="dialog" className="w-full">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button
                                        onClick={handleCloseBtn}
                                        className="btn w-full">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </header>
            <div className="space-y-4">
                {
                    cartItems.map(cartItem => <CartCard key={cartItem.product_id} cartItem={cartItem}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></CartCard>)
                }
            </div>

        </div>
    );
};

export default Cart;