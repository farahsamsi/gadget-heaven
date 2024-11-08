import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";



const Home = () => {
    const categories = useLoaderData();

    return (
        <HelmetProvider>
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>

            <div>
                {/* banner */}
                <Banner></Banner>
                <div>
                    {/* heading */}
                    <h1 className="text-center font-bold md:text-4xl mb-4 md:mb-6 lg:mb-8">Explore Cutting-Edge Gadgets</h1>
                    <div className="lg:flex gap-6">
                        {/*  categories */}
                        <Categories categories={categories}></Categories>
                        {/* dynamic card */}

                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Home;