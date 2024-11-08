import React, { useEffect, useState } from 'react';
import { getWishlistFromLS, removeFromWishlist } from '../Utilities/wishList';
import CartCard from './CartCard';
import WishlistCard from './WishlistCard';

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        const wishlist = getWishlistFromLS();
        setWishlist(wishlist);
    }, []);

    const handleRemoveFromWishlist = (product_id) => {
        removeFromWishlist(product_id);

        const wishlist = getWishlistFromLS();
        setWishlist(wishlist);
    };

    return (
        <div className='my-5 lg:my-12'>
            <h1 className="text-2xl font-bold mb-4 lg:mb-12">WishList : {wishlist.length}</h1>
            <div className='space-y-4'>
                {
                    wishlist.map(cartItem => <WishlistCard key={cartItem.product_id} cartItem={cartItem} handleRemoveFromWishlist={handleRemoveFromWishlist}></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;