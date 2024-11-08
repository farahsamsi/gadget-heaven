import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-2xl md:text-5xl font-bold">Page is Unavailable</h1>
                    <p className="py-6">
                        The page you are looking for does not exist or may have been moved. Head back to the homepage.
                    </p>
                    <Link to='/'><button className="btn text-white hover:text-black font-bold text-2xl bg-[#9538E2]">Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;