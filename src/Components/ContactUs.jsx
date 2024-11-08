import React from 'react';

const ContactUs = () => {
    return (
        <div className='px-4'>
            <h1 className="text-2xl font-bold my-4 md:my-6">Contact us: </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='p-4 lg:p-8 space-y-4 lg:space-y-6 bg-white border rounded-[32px] text-center'>
                    <div>
                        <p className='flex justify-center mb-4'><img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/9538e2/phone.png" alt="phone" /></p>
                        <p className='text-2xl font-bold text-[#9538E2] underline'>Talk To A Team Member</p>
                    </div>
                    <p className='font-semibold'>Call us for immediate assistance. Our customer support team is available 24/7.</p>
                    <p className='text-2xl md:text-4xl font-bold text-black/60'>+01234-56789</p>
                </div>
                <div className='p-4 lg:p-8 space-y-4 lg:space-y-6 bg-white border rounded-[32px] text-center'>
                    <div>
                        <p className='flex justify-center mb-4'><img width="64" height="64" src="https://img.icons8.com/ios-filled/50/9538e2/office.png" alt="office" /></p>
                        <p className='text-2xl font-bold text-[#9538E2] underline'>Visit our office</p>
                    </div>
                    <p className='font-semibold'>Visit our office. We would love to see you in person to discuss your project needs.</p>
                    <p className='text-2xl font-bold text-black/60'>123 Electric Ave, Suite 100, Spark City, CA 90210, USA</p>
                </div>
                <div className='md:col-span-2 p-4 lg:p-8 space-y-4 lg:space-y-6 bg-white border rounded-[32px]'>
                    <div className='flex items-center gap-4'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/9538e2/task.png" alt="task" /><span className='text-2xl font-bold'>Submit your Feedback</span></div>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Enter Your Full Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Enter Your Email Address" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <img width="15" height="15" src="https://img.icons8.com/metro/26/626973/phone.png" alt="phone" />
                        <input type="text" className="grow" placeholder="Enter your phone number" />
                    </label>


                    <textarea
                        placeholder="Write Your Message"
                        className="textarea textarea-bordered textarea-md w-full  grow"></textarea>
                    <button className='btn'>Submit</button>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;