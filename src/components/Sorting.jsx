"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const Sorting = ({ products }) => {
    const [sort, setSort] = useState("default");

    const sortedProducts = useMemo(() => {
        const items = [...products];

        if (sort === "low") {
            return items.sort((a, b) => a.today - b.today);
        }

        if (sort === "high") {
            return items.sort((a, b) => b.today - a.today);
        }

        return items;
    }, [products, sort]);

    return (
        <>
            {/* Sorting */}
            <div className="flex justify-end">
                <div className="flex items-center gap-3">
                    <span className="text-sm text-[#68736d]">
                        সাজান
                    </span>

                    <div className="relative">
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="h-10 cursor-pointer appearance-none rounded-xl border border-[#ccd5cf] bg-white py-2 pl-4 pr-10 text-sm text-[#303a35] outline-none transition hover:border-[#9eaaa3] focus:border-[#72a484]"
                        >
                            <option value="default">
                                ডিফল্ট
                            </option>

                            <option value="low">
                                দাম: কম থেকে বেশি
                            </option>

                            <option value="high">
                                দাম: বেশি থেকে কম
                            </option>
                        </select>

                        {/* Chevron */}
                        <svg
                            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#303a35]"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Product Count */}
            <p className="mb-6 mt-6 text-sm text-[#68736d]">
                মোট {toBanglaNumber(sortedProducts.length)}টি পণ্য দেখানো হচ্ছে
            </p>

            {/* Product Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {sortedProducts.map((product) => {
                    const isUp = product.change?.dir === "up";
                    const isDown = product.change?.dir === "down";
                    const isFlat = product.change?.dir === "flat";

                    return (

                        <Link
                            key={product.id}
                            href={`/productDetails/${product.id}`}
                            className="group rounded-2xl border border-[#dce5df] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-[#c8d7cc] hover:shadow-md"
                        >
                            {/* Product */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f1] text-3xl">
                                    {product.image || "🛒"}
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#202a24] group-hover:text-[#168b45]">
                                        {product.nameBn}
                                    </h3>

                                    <p className="mt-1 text-sm text-[#68736d]">
                                        প্রতি কেজি
                                    </p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="mt-5 flex items-end justify-between">
                                <div>
                                    <p className="text-sm text-[#4f5953]">
                                        আজকের দাম
                                    </p>

                                    <div className="mt-1">
                                        <span className="text-2xl font-bold text-[#1b251f]">
                                            {toBanglaNumber(product.today)}
                                        </span>

                                        <span className="ml-1 text-sm text-[#4f5953]">
                                            টাকা
                                        </span>
                                    </div>
                                </div>

                                {/* Change */}
                                <div
                                    className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold ${isUp
                                        ? "bg-[#f1f6f2] text-[#df3838]"
                                        : isDown
                                            ? "bg-[#f1f6f2] text-[#149447]"
                                            : "bg-[#f1f6f2] text-[#303a35]"
                                        }`}
                                >
                                    {isUp && "▲"}
                                    {isDown && "▼"}
                                    {isFlat && "−"}

                                    <span>
                                        {toBanglaNumber(
                                            Math.abs(product.change?.pct || 0)
                                        )}
                                        %
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

function toBanglaNumber(number) {
    return String(number).replace(
        /\d/g,
        (digit) => "০১২৩৪৫৬৭৮৯"[digit]
    );
}

export default Sorting;