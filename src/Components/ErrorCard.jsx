import React from 'react';

const ErrorCard = () => {
    return (
        <div className="hero md:col-span-2 lg:col-span-3">
            <div className="hero-content text-center">
                <div className="max-w-screen-md">
                    <h1 className="text-2xl md:text-5xl font-bold">Products of this category are Unavailable</h1>
                    <p className="py-6">
                        The category products you are looking for does not exist or may have been moved. Look for products in other categories.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorCard;