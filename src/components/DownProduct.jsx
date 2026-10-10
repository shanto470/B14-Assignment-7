import { Play } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import React from "react";

const DownProduct = ({ products }) => {

    const upProducts = products
        .filter((product) => product.change.dir === "down")
        // .sort((a, b) => b.change.pct - a.change.pct)
        .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
        .slice(0, 6);

    // console.log(upProducts, "from dam barse page");

    return (
        <div className="grid grid-cols-3 gap-5 ">
            {upProducts.map((product) => (
                <Link href={`/productDetails/${product.id}`} key={product.id} className="bg-white p-5 border border-gray-200 rounded-2xl flex justify-between items-end">
                    <div>
                        <div className="flex gap-2">
                            <div className="bg-[#eff4f0] p-2 rounded-xl text-center">
                                <p className=" w-8 bg-none">{product.image}</p>
                            </div>
                            <div>
                                <h2 className="text-black text-[16px]">{product.nameBn}</h2>
                                <p className="text-xs text-gray-700">প্রতি কেজি</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-700 mt-5" >আজকের দাম</p>
                        <p className="text-black text-[16px] font-bold">{product.today.toLocaleString("bn-BD")} <span className="font-normal">টাকা</span></p>
                    </div>
                    <div className=" bg-[#eff4f0] text-green-500 px-4 py-1 rounded-2xl flex items-center gap-2">
                        <Play className="rotate-90 fill-current w-3 h-3" />{Math.abs(product.change.pct).toLocaleString("bn-BD")} %
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default DownProduct;