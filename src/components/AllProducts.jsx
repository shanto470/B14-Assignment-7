import { Play } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AllProducts = ({ product }) => {
    return (
        <Link href={`/productDetails/${product.id}`}>

            <div key={product.id} className="bg-white p-5 border border-gray-200 rounded-2xl flex justify-between items-end">
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


                <div className={` ${product.change.dir === "up" ? "text-red-500" : "text-green-500"} bg-[#eff4f0]  px-4 py-1 rounded-2xl flex items-center gap-2`}>
                    <Play className="rotate-90 fill-current w-3 h-3" />{Math.abs(product.change.pct).toLocaleString("bn-BD")} %
                </div>
            </div>

        </Link  >
    );
};

export default AllProducts;