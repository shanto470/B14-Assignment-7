
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import UpProduct from "./UpProduct";
import DownProduct from "./DownProduct";
import AllProducts from "./AllProducts";
const MainPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {

            const res = await fetch(
                // "https://api.api-store.workers.dev/api/bazardor/products"
                "https://openapi.programming-hero.com/api/bazardor/products"
            );

            const data = await res.json();

            setProducts(data);
        };
        getProducts();

    }, []);
    // console.log(products);
    return (

        <section className=" container m-auto mt-10">
            <section>
                <div className=" flex gap-2 items-center mb-3 "> <Play className="text-red-500 -rotate-90 fill-current" />
                    <h2 className=" text-[28px] font-bold text-black">আজ দাম বেড়েছে</h2>
                </div>
                <div>
                    {
                        // products.map(product => <UpProduct key={product.id} product={product}></UpProduct>)
                        <UpProduct products={products} ></UpProduct>
                    }
                </div>
            </section>
            <section className="mt-10">
                <div className=" flex gap-2 items-center mb-3 "> <Play className="text-green-500 rotate-90 fill-current" />
                    <h2 className=" text-[28px] font-bold text-black">আজ দাম কমেছে</h2>
                </div>
                <div>
                    {
                        <DownProduct products={products}></DownProduct>
                    }
                </div>


            </section>
            <section className="mt-10">
                <div className="  r mb-3 ">
                    <h2 className=" text-[28px] font-bold text-black"> সব পণ্য</h2>
                    <p className="text-[14px] text-gray-700">  মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
                </div>

                <div className="grid grid-cols-3 gap-5 ">{
                    products.map(product => <AllProducts key={product.id} product={product}></AllProducts>)
                }</div>
            </section>
        </section>

    );
};

export default MainPage;