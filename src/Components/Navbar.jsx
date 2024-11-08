
import { act, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";



const Navbar = () => {
    const { pathname } = useLocation();

    const [active, setActive] = useState(true);
    useEffect(() => {
        if (pathname !== "/") {
            setActive(false);
        } else {
            setActive(true);
        }
    }, [pathname]);

    const links = <>
        <li><NavLink
            className={({ isActive }) =>
                `font-bold ${isActive ? 'underline ' : 'hover:underline'}`
            }
            to='/'>Home</NavLink></li>
        <li><NavLink
            className={({ isActive }) =>
                `font-bold ${isActive ? 'underline ' : 'hover:underline'}`
            }
            to='/statistics'>Statistics</NavLink></li>
        <li><NavLink
            className={({ isActive }) =>
                `font-bold ${isActive ? 'underline ' : 'hover:underline'}`
            }
            to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink
            className={({ isActive }) =>
                `font-bold ${isActive ? 'underline ' : 'hover:underline'}`
            }
            to='/help'>Need Help ?</NavLink></li>
    </>

    return (
        <div
            className={
                `navbar py-7 md:px-20 rounded-t-[32px] z-50 sticky top-0
                 ${active ? 'bg-[#9538e2] backdrop-blur-sm text-white' : ' backdrop-blur-sm bg-white/30 text-black '}`
            }
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${active ? 'text-white' : 'text-black'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className={`text-xl md:font-bold ${active ? 'text-white' : 'text-black'}`}>Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end space-x-4">
                <Link to='/dashboard'>
                    <div className="flex items-center justify-center rounded-full border-2 bg-white p-2">
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png" alt="shopping-cart--v1" />
                    </div>
                </Link>
                <Link to='/dashboard/wishlist'>
                    <div className="flex items-center justify-center rounded-full border-2 bg-white p-2">
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/hearts.png" alt="hearts" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;