"use client"
// import { Search, User, ShoppingCart } from "lucide-react"
import Image from "next/image";
import { useEffect, useState } from "react"
import NavLink from "./NavLink";

const Navbar = () => {
    const [date, setDate] = useState(null)

    useEffect(() => {
        const today = new Date().toLocaleDateString("bn-BD", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        })

        setTimeout(() => {
            setDate(today)
        }, 0)
    }, [])
    return (
        <div className="bg-white">

            <div className="border-b border-b-[#F0F5F0]">
                <div className="container m-auto flex justify-between items-center py-3 ">
                    <div className=" flex justify-between items-center gap-2 mb-3">
                        <div className="bg-[#05893E] px-2.5 py-2.5 rounded-xl"> <Image className="" src={'/logo-icon.png'} height={20} width={20} alt='logo' /></div>
                        <div className="">
                            <h2 className="text-black font-bold text-[28px] leading-none m-0">
                                বাজার দর
                            </h2>
                            <p className="text-gray-700 text-[16px] leading-none mt-1">
                                {date}
                            </p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3">
                        <button className='btn'>সাইন ইন</button>
                        <button className='btn bg-[#05893E] text-white'>সাইন আপ</button>
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