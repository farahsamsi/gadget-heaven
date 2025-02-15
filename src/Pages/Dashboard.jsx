import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";


const Dashboard = () => {

    const { pathname } = useLocation();

    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        if (pathname === '/dashboard/wishlist') {
            return setToggle(true);
        } else {
            setToggle(false);
        }
    }, [pathname])

    return (
        <HelmetProvider>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div>
                <div className="hero bg-[#9538E2] text-white">
                    <div className="hero-content text-center">
                        <div className="">
                            <h1 className="text-2xl lg:text-3xl font-bold lg:leading-snug">Dashboard</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
                                <button><NavLink
                                    className={
                                        `btn border-white px-16  rounded-[32px] 
                                        ${toggle ? 'bg-[#9538E2] text-white' : '  bg-white text-[#9538E2]'}`
                                    }
                                    to='/dashboard'>Cart</NavLink></button>

                                <button><NavLink
                                    className={
                                        `btn border-white px-16  rounded-[32px] 
                                        ${toggle ? ' bg-white text-[#9538E2]' : ' bg-[#9538E2] text-white'}`
                                    }
                                    to='/dashboard/wishlist'>Wishlist</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Dashboard;