
"use client";

import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import UpProduct from "./UpProduct";
import DownProduct from "./DownProduct";
import AllProducts from "./AllProducts";
import ProductSkeleton from "./skeleton/ProductSkeleton";

const MainPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch(
                    "https://openapi.programming-hero.com/api/bazardor/products"
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    return (
        <section className="container mx-auto mt-10 px-3 sm:px-4 lg:px-0">

            <section>
                <div className="mb-3 flex items-center gap-2">
                    <Play className="-rotate-90 fill-current text-red-500" />
                    <h2 className="text-xl font-bold text-black sm:text-2xl md:text-[28px]">
                        আজ দাম বেড়েছে
                    </h2>
                </div>

                {loading ? (
                    <ProductSkeleton count={6} />
                ) : (
                    <UpProduct products={products} />
                )}
            </section>

            <section className="mt-8 sm:mt-10">
                <div className="mb-3 flex items-center gap-2">
                    <Play className="rotate-90 fill-current text-green-500" />
                    <h2 className="text-xl font-bold text-black sm:text-2xl md:text-[28px]">
                        আজ দাম কমেছে
                    </h2>
                </div>

                {loading ? (
                    <ProductSkeleton count={6} />
                ) : (
                    <DownProduct products={products} />
                )}
            </section>

            <section className="mt-8 sm:mt-10">
                <div className="mb-3">
                    <h2 className="text-xl font-bold text-black sm:text-2xl md:text-[28px]">
                        সব পণ্য
                    </h2>

                    <p className="text-sm text-gray-700">
                        মোট {loading ? "..." : products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
                    </p>
                </div>

                {loading ? (
                    <ProductSkeleton count={9} />
                ) : (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        {products.map((product) => (
                            <AllProducts
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}
            </section>

        </section>
    );
};

export default MainPage;
