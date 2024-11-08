import React from 'react';
import { Link } from 'react-router-dom';

const CartCard = ({ cartItem, handleRemoveFromCart }) => {
    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = cartItem;
    return (
        <div className="card w-full p-5 bg-white border grid grid-cols-1 md:grid-cols-6 md:gap-4">
            <figure className="md:col-span-2 w-full">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl w-full md:h-48 object-cover" />
            </figure>
            <div className="col-span-4 flex flex-col md:flex-row justify-between items-center">
                <div className='card-body p-0'>
                    <h2 className="text-2xl font-semibold mt-4">{product_title}</h2>
                    <p className='flex-grow text-black/60'>{description}</p>
                    <p className='font-semibold'>Price : ${price}</p>
                    <div className="card-actions">
                        <Link to={`/productDetails/${product_title}`}>
                            <button className="btn btn-outline rounded-[32px] text-[#9538E2] border-[#9538E2]">View Details</button>
                        </Link>
                    </div>
                </div>
                <div onClick={() => handleRemoveFromCart(product_id)}>
                    <img width="36" height="36" src="https://img.icons8.com/color/48/cancel--v1.png" alt="cancel--v1" />
                </div>
            </div>
        </div>
    );
};

export default CartCard;