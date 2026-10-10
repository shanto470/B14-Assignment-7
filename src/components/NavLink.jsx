"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavLink = () => {

    const [categories, setCategories] = useState([]);
    const pathName = usePathname()

    useEffect(() => {

        const getCategories = async () => {

            const res = await fetch(
                // "https://api.api-store.workers.dev/api/bazardor/categories"
                "https://openapi.programming-hero.com/api/bazardor/categories"
            );

            const data = await res.json();

            setCategories(data);
        };
        getCategories();

    }, []);
    // console.log(categories, 'from navlink');



    return (
        <div className="container m-auto">
            <div className="my-4 flex gap-6">

                {categories.map((item) => (
                    <Link

                        key={item.id}
                        href={`/category/${item.slug}`}
                        className={`rounded-lg px-4 py-2 transition ${pathName === `/category/${item.slug}`
                            ? "bg-[#05893E] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        {item.icon} {item.nameBn}
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default NavLink;