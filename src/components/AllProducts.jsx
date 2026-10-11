
import { Play } from "lucide-react";
import Link from "next/link";

const AllProducts = ({ product }) => {
    return (
        <Link href={`/productDetails/${product.id}`} >
            <div className="flex items-end justify-between gap-2 rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 lg:p-5">
                <div className="min-w-0">
                    <div className="flex gap-2">
                        <div className="rounded-xl bg-[#eff4f0] p-2 text-center">
                            <p className="w-8 bg-none">{product.image}</p>
                        </div>

                        <div className="min-w-0">
                            <h2 className="break-words text-[16px] text-black">
                                {product.nameBn}
                            </h2>
                            <p className="text-xs text-gray-700">
                                প্রতি কেজি
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 text-xs text-gray-700">
                        আজকের দাম
                    </p>

                    <p className="text-[16px] font-bold text-black">
                        {product.today.toLocaleString("bn-BD")}{" "}
                        <span className="font-normal">টাকা</span>
                    </p>
                </div>

                <div
                    className={`flex shrink-0 items-center gap-1 rounded-2xl bg-[#eff4f0] px-2 py-1 text-sm sm:gap-2 sm:px-4 ${product.change.dir === "up"
                        ? "text-red-500"
                        : "text-green-500"
                        }`}
                >
                    <Play className="h-3 w-3 shrink-0 rotate-90 fill-current" />
                    {Math.abs(product.change.pct).toLocaleString("bn-BD")} %
                </div>
            </div>
        </Link>
    );
};

export default AllProducts;
