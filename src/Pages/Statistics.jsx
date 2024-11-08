import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';



const Statistics = () => {
    const data = [
        { name: "UltraBook Pro", price: 899, rating: 4.7 },
        { name: "Gaming Beast 15", price: 1200, rating: 4.8 },
        { name: "BudgetBook Air", price: 650, rating: 4.3 },
        { name: "WorkPro X", price: 1100, rating: 4.6 },
        { name: "TravelMate Lite", price: 700, rating: 4.2 },
        { name: "PowerStudio 17", price: 1500, rating: 4.9 },
        { name: "SmartPhone X12", price: 799, rating: 4.5 },
        { name: "Galaxy Alpha", price: 999, rating: 4.7 },
        { name: "FastCharge 50W", price: 55, rating: 4.6 },
        { name: "EcoCharge Mini", price: 50, rating: 4.4 },
        { name: "Galaxy Tab S", price: 499, rating: 4.3 },
        { name: "iPad Air", price: 599, rating: 4.8 },
        { name: "Pulse SoundBar", price: 150, rating: 4.5 },
        { name: "Echo Speaker Plus", price: 180, rating: 4.6 },
        { name: "SkyDrone X", price: 750, rating: 4.8 },
        { name: "NanoDrone Mini", price: 200, rating: 4.2 },
        { name: "ProLens DSLR", price: 1300, rating: 4.9 },
        { name: "CompactCam V2", price: 550, rating: 4.4 }
    ]


    return (
        <HelmetProvider>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div>
                <div className="hero bg-[#9538E2] text-white">
                    <div className="hero-content text-center">
                        <div className="max-w-screen-md">
                            <h1 className="text-2xl lg:text-3xl font-bold lg:leading-snug">Statistics</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl font-bold my-4 md:my-6">Statistics :</h1>

                <div className="hidden lg:flex lg:justify-center bg-white rounded-[32px]">
                    <ComposedChart
                        width={1300}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="rating" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="price" barSize={20} fill="#9538E2" />
                        {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                        {/* <Scatter dataKey="rating" fill="red" /> */}
                    </ComposedChart>

                </div>
            </div>


        </HelmetProvider>
    );
};

export default Statistics;