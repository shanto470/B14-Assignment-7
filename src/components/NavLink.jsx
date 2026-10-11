
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavLink = () => {
    const [categories, setCategories] = useState([]);
    const pathName = usePathname();

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch(
                "https://openapi.programming-hero.com/api/bazardor/categories"
            );

            const data = await res.json();

            setCategories(data);
        };

        getCategories();
    }, []);

    return (
        <div className="container mx-auto px-3 sm:px-4 lg:px-0">
            <div className="my-3 flex gap-2 overflow-x-auto whitespace-nowrap pb-2 sm:my-4 sm:gap-3 md:gap-4 lg:gap-6 lg:overflow-visible lg:pb-0">

                {categories.map((item) => (
                    <Link
                        key={item.id}
                        href={`/category/${item.slug}`}
                        className={`shrink-0 rounded-lg px-3 py-2 text-sm transition sm:px-4 sm:text-base ${pathName === `/category/${item.slug}`
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
