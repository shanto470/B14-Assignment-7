"use client"
// import { Search, User, ShoppingCart } from "lucide-react"
import Image from "next/image";
// import { useEffect, useState } from "react"
import NavLink from "./NavLink";
import Link from "next/link";
import DateDisplay from "./DisplayDate";
import { Suspense } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    const user = {
        name: "Shantay Chandra Paul",
        email: "shanto@gmail.com",
        image: "https://img.magnific.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288884.jpg?semt=ais_hybrid&w=740&q=80",
    };
    return (
        <div className="bg-white sticky top-0 z-50 ">

            <div className="border-b border-b-[#F0F5F0]">
                <div className="container m-auto flex justify-between items-center py-3 ">
                    <div className=" flex justify-between items-center gap-2 mb-3">
                        <div className="bg-[#05893E] px-2.5 py-2.5 rounded-xl"> <Image className="" src={'/logo-icon.png'} height={20} width={20} alt='logo' /></div>
                        <div className="">
                            <Link href={'/'} className="text-black font-bold text-[28px] leading-none m-0">
                                বাজার দর
                            </Link>
                            <p className="text-gray-700 text-[16px] leading-none mt-1">
                                {/* {date}
                             */}
                                <Suspense fallback={null}>

                                    <DateDisplay></DateDisplay>
                                </Suspense>
                            </p>
                        </div>
                    </div>
                    {/* sign up and sign in */}
                    {/* <div className="flex items-center gap-3">
                        <Link
                            href="/signin"
                            className={`${pathname === "/signin"
                                ? "bg-[#05893E] btn text-white"
                                : "btn"
                                }`}
                        >
                            সাইন ইন
                        </Link>

                        <Link
                            href="/signup"
                            className={`${pathname === "/signup" || pathname === "/"
                                ? "bg-[#05893E] btn text-white"
                                : "btn"
                                }`}
                        >
                            সাইন আপ
                        </Link>
                    </div> */}
                    {/* profile */}
                    <div className="dropdown dropdown-end">
                        <button
                            tabIndex={0}
                            className="btn h-auto min-h-0 gap-3 border-0 bg-transparent p-2 text-left shadow-none hover:bg-gray-100"
                        >
                            <Image
                                src={user.image}
                                alt={user.name}
                                width={60}
                                height={60}
                                unoptimized
                                className="h-[60px] w-[60px] rounded-xl object-cover"
                            />

                            <span className="font-semibold text-gray-800">
                                {user.name}
                            </span>
                        </button>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu z-50 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg"
                        >
                            <li className="pointer-events-none mb-2 border-b border-gray-200 pb-3">
                                <div className="flex flex-col items-start gap-1">
                                    <span className="font-semibold text-gray-800">
                                        {user.name}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {user.email}
                                    </span>
                                </div>
                            </li>

                            <li>
                                <Link href="/profile" className="py-3">
                                    <span>👤</span>
                                    আমার প্রোফাইল
                                </Link>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="py-3 text-red-500 hover:bg-red-50 hover:text-red-600"
                                >
                                    <span>↩</span>
                                    সাইন আউট
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div >
                <NavLink></NavLink>
            </div>
        </div>
    );
};

export default Navbar;
