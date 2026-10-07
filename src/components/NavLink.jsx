"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const NavLink = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const getCategories = async () => {

            const res = await fetch(
                "https://api.api-store.workers.dev/api/bazardor/categories"
            );

            const data = await res.json();

            setCategories(data);
        };
        getCategories();

    }, []);

    return (
        <div className="container m-auto">
            <div className="mt-3 flex gap-6">

                {categories.map((item) => (
                    <Link
                        key={item.id}
                        href={`/category/${item.slug}`}
                    >
                        {item.icon} {item.nameBn}
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default NavLink;