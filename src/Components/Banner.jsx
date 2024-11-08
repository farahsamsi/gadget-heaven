import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='pb-[80px] md:pb-[263px] lg:pb-[420px]'>
            <div className='relative'>
                <div className="hero bg-[#9538E2] text-white">
                    <div className="hero-content text-center">
                        <div className="max-w-5xl pb-20 md:pb-36  lg:pb-64">
                            <h1 className="text-2xl lg:text-5xl font-bold lg:leading-snug">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <Link to='/dashboard'>
                                <button className="btn text-[#9538E2] font-bold bg-white border-none rounded-[32px]">Shop Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border rounded-3xl p-3 md:p-6 w-8/12 backdrop:blur-sm absolute top-[85%]  md:top-[65%] lg:top-80 left-[16%]">
                    <div>
                        <img className='w-full max-h-[563px] object-cover rounded-3xl' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;