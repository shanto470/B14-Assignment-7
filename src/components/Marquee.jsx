
'use client'

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
// import MarqueeText from "react-marquee-text";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const MarquePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(
                "https://api.api-store.workers.dev/api/bazardor/products"
            );

            const data = await res.json();

            // console.log("1. API DATA:", data);

            setProducts(data);

            // console.log("2. SET DONE");
        };

        getProducts();
    }, []);

    useEffect(() => {
        // console.log("3. STATE UPDATED:", products);
    }, [products]);

    return (

        <div className="bg-white overflow-hidden border border-[#F0F5F0]">
            <Marquee
                speed={40}
                gradient={false}
                pauseOnHover={true}
            >
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="inline-flex items-center gap-2 py-2 mx-4 text-black border-r border-r-[#F0F5F0]"
                    >
                        {/* Product Image */}
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-2xl">
                            {p.image}
                        </div>

                        {/* Product Info */}
                        <div className="flex items-center gap-2 leading-tight">
                            <span className="font-semibold text-sm">
                                {p.nameBn}
                            </span>

                            <span className="text-xs opacity-90">
                                {p.today.toLocaleString("bn-BD")} টাকা/কেজি
                            </span>
                        </div>

                        {/* Price Change */}
                        <div
                            className={`px-3 py-1 rounded-full text-xs font-medium ${p.change.dir === "up"
                                ? " text-red-500"
                                : " text-green-500"
                                }`}
                        >
                            {p.change.dir === "up" ? "▲" : "▼"}{" "}
                            {Math.abs(p.change.pct).toLocaleString("bn-BD")}%
                        </div>

                        {/* Separator */}
                        {/* <span className="text-red-600 text-xl ml-2">
                            •
                        </span> */}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarquePage;