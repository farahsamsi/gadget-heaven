import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart } from "../Utilities/cartList";
import { addToWishlist } from "../Utilities/wishList";
import ReactStars from "react-rating-stars-component";


const ProductDetails = () => {
    const { product_title } = useParams();

    const data = useLoaderData();

    const [product, setProduct] = useState({});
    useEffect(() => {
        const findProduct = data.find(product => product.product_title == product_title);
        setProduct(findProduct);
    }, []);


    const { product_id, product_title: title, product_image, category, price, description, Specification, availability, rating } = product;

    const firstExample = {
        size: 30,
        value: rating,
        edit: false
    };

    const set = firstExample.value;
    console.log(set);

    // cart related functions
    const handleCart = (product) => {
        addToCart(product);
    }

    // wishlist related functions
    const [wish, setWish] = useState(false);
    const handleWishlist = (product) => {
        addToWishlist(product);
        setWish(true);
    }


    return (
        <HelmetProvider>
            <Helmet>
                <title>Product Details | Gadget Heaven</title>
            </Helmet>

            <div className='pb-[700px] md:pb-[800px] lg:pb-[420px]'>
                <div className='relative'>

                    <div className="hero bg-[#9538E2] text-white">
                        <div className="hero-content text-center">
                            <div className="max-w-5xl pb-20 md:pb-36  lg:pb-64">
                                <h1 className="text-2xl lg:text-3xl font-bold lg:leading-snug">Product Details</h1>
                                <p className="py-6">
                                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-3xl p-3 md:p-6 lg:w-8/12 backdrop:blur-sm absolute top-[65%]  md:top-[45%]  lg:left-[16%]">
                        <div className="hero bg-white rounded-3xl">
                            <div className="hero-content grid grid-cols-1 lg:grid-cols-12">
                                <div className="lg:col-span-5 lg:h-full">
                                    <img
                                        src={product_image}
                                        className="rounded-lg lg:h-full object-cover" />
                                </div>
                                <div className="lg:col-span-7 space-y-4">
                                    <h1 className="text-2xl font-semibold">{title}</h1>
                                    <p className="text-xl font-semibold text-black/80">
                                        Price : ${price}
                                    </p>
                                    <div className={
                                        `w-fit px-4 py-2 border-2 rounded-[32px] font-medium ${availability ? 'text-[#309C08] border-[#309C08] bg-[#EAF5E6] ' : 'text-red-600 border-red-600 bg-red-200'}`} >
                                        {
                                            availability ? 'In stock' : 'Not Available'
                                        }
                                    </div>
                                    <h3 className="text-black/60">{description}</h3>
                                    <div>
                                        <h2 className="font-bold mb-3">Specifications :</h2>
                                        <ol className="ml-4">
                                            {
                                                Specification?.map((i, index) => <li key={index} className="list-decimal text-black/60">{i}</li>)
                                            }
                                        </ol>
                                    </div>
                                    <div>
                                        <h2 className="font-bold mb-3">Ratings :</h2>
                                        <div className="flex gap-2 items-center">
                                            {/* <img width="25" height="25" src="https://img.icons8.com/material-outlined/24/f9c004/filled-star.png" alt="filled-star" />
                                            <img width="25" height="25" src="https://img.icons8.com/material-outlined/24/f9c004/filled-star.png" alt="filled-star" />
                                            <img width="25" height="25" src="https://img.icons8.com/material-outlined/24/f9c004/filled-star.png" alt="filled-star" />
                                            <img width="25" height="25" src="https://img.icons8.com/material-outlined/24/f9c004/filled-star.png" alt="filled-star" />
                                            <img width="20" height="20" src="https://img.icons8.com/metro/26/star.png" alt="star" /> */}
                                            <ReactStars {...firstExample} key={rating} />

                                            <div className="rounded-[32px] bg-[#F2F2F3] px-3 py-2">{rating}</div>
                                        </div>
                                    </div>
                                    <div className="space-x-4 flex items-center">
                                        <button
                                            onClick={() => handleCart(product)}
                                            className="btn font-bold text-lg bg-[#9538E2] text-white">Add to Cart <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/shopping-cart--v1.png" alt="shopping-cart--v1" /></button>
                                        <button
                                            disabled={wish}
                                            onClick={() => handleWishlist(product)}
                                            className="btn btn-outline rounded-full bg-white hover:bg-slate-200 border-black/60"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/like--v1.png" alt="like--v1" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default ProductDetails;