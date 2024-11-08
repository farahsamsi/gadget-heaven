import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Main Page | Gadget Heaven</title>
            </Helmet>
            <ToastContainer
                position="top-left"
                autoClose={2000}
            ></ToastContainer>
            <div className="pt-2 bg-[#F6F6F6]">
                <div className="container mx-auto">
                    <Navbar></Navbar>

                    <div className="min-h-[calc(100vh-132px)] pb-10">
                        <Outlet></Outlet>
                    </div>
                </div>

                <Footer></Footer>

            </div>
        </HelmetProvider>
    );
};

export default MainLayout;