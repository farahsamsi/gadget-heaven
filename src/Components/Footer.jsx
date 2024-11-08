

const Footer = () => {
    return (
        <div className="bg-white ">
            <footer className="py-10 lg:py-24 text-center container mx-auto">
                <div>
                    <h1 className="font-bold text-xl lg:text-3xl">Gadget Heaven</h1>
                    <p className="font-medium text-black/60 mt-3 ">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="divider my-8"></div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                        <h6 className="text-lg font-bold mb-2 md:mb-4">Services</h6>
                        <a className="link link-hover text-black/60">Product Support</a>
                        <a className="link link-hover text-black/60">Order Tracking</a>
                        <a className="link link-hover text-black/60">Shipping & Delivery</a>
                        <a className="link link-hover text-black/60">Returns</a>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-lg font-bold mb-2 md:mb-4">Company</h6>
                        <a className="link link-hover text-black/60">About Us</a>
                        <a className="link link-hover text-black/60">Careers</a>
                        <a className="link link-hover text-black/60">Contact</a>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-lg font-bold mb-2 md:mb-4">Legal</h6>
                        <a className="link link-hover text-black/60">Terms of Service</a>
                        <a className="link link-hover text-black/60">Privacy Policy</a>
                        <a className="link link-hover text-black/60">Cookie Policy</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;