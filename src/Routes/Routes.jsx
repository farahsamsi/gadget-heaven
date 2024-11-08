import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../Pages/ErrorPage";
import AllProducts from "../Components/AllProducts";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import Help from "../Pages/Help";
import FAQ from "../Components/FAQ";
import ContactUs from "../Components/ContactUs";

const routes = createBrowserRouter([
    {
        errorElement: <ErrorPage></ErrorPage>,

        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),

                children: [
                    {
                        path: '/',
                        element: <AllProducts></AllProducts>,
                        loader: () => fetch('../products.json')
                    },
                    {
                        path: '/categories/:category',
                        element: <AllProducts></AllProducts>,
                        loader: () => fetch("../products.json")
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('../products.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/',
                        element: <Cart></Cart>
                    },
                    {
                        path: '/dashboard/wishlist',
                        element: <Wishlist></Wishlist>
                    }
                ]
            },
            {
                path: '/productDetails/:product_title',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch("../products.json")
            },
            {
                path: '/help',
                element: <Help></Help>,
                children: [
                    {
                        path: '/help/',
                        element: <ContactUs></ContactUs>
                    },
                    {
                        path: '/help/faq',
                        element: <FAQ></FAQ>,
                        loader: () => fetch('../faq.json')
                    }
                ]
            }

        ]
    }
]);

export default routes;