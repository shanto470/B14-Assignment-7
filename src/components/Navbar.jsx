
"use client";

import { handleSignOut } from "@/lib/handleSignOut";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import DateDisplay from "./DisplayDate";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const pathname = usePathname();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <div className="bg-white sticky top-0 z-50">
            <div className="border-b border-b-[#F0F5F0]">
                <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-3 py-3 sm:px-4 md:flex-nowrap lg:px-0">

                    <div className="mb-1 flex items-center gap-2 sm:mb-3">
                        <Link href='/' className="rounded-xl bg-[#05893E] px-4 py-4">
                            <Image
                                src="/logo-icon.png"
                                height={20}
                                width={20}
                                alt="logo"
                            />
                        </Link>

                        <div>
                            <Link
                                href="/"
                                className="m-0 text-xl font-bold leading-none text-black sm:text-2xl md:text-[28px]"
                            >
                                বাজার দর
                            </Link>

                            <p className="mt-1 text-xs leading-tight text-gray-700 sm:text-sm md:text-[16px]">
                                <Suspense fallback={null}>
                                    <DateDisplay />
                                </Suspense>
                            </p>
                        </div>
                    </div>

                    {user ? (
                        <div className="dropdown dropdown-end">
                            <button
                                tabIndex={0}
                                className="btn h-auto min-h-0 gap-2 border-0 bg-transparent p-1.5 text-left shadow-none hover:bg-gray-100 sm:gap-3 sm:p-2"
                            >
                                <Image
                                    src={user.image || "/default-avatar.png"}
                                    alt={user.name || "Profile"}
                                    width={60}
                                    height={60}
                                    unoptimized
                                    className="h-9 w-9 rounded-lg object-cover sm:h-12 sm:w-12 md:h-15 md:w-15"
                                />

                                <span className="max-w-[100px] truncate text-sm font-semibold text-gray-800 sm:max-w-[150px] sm:text-base md:max-w-none">
                                    {user.name}
                                </span>
                            </button>

                            <ul
                                tabIndex={0}
                                className="dropdown-content menu z-50 mt-2 w-[min(18rem,calc(100vw-1.5rem))] rounded-2xl border border-gray-200 bg-white p-3 shadow-lg"
                            >
                                <li className="pointer-events-none mb-2 border-b border-gray-200 pb-3">
                                    <div className="flex flex-col items-start gap-1">
                                        <span className="max-w-full break-words font-semibold text-gray-800">
                                            {user.name}
                                        </span>
                                        <span className="max-w-full break-all text-sm text-gray-500">
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
                                        onClick={handleSignOut}
                                        type="button"
                                        className="py-3 text-red-500 hover:bg-red-50 hover:text-red-600"
                                    >
                                        <span>↩</span>
                                        সাইন আউট
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Link
                                href="/signin"
                                className={`${pathname === "/signin"
                                    ? "bg-[#05893E] btn text-white"
                                    : "btn"
                                    } !min-h-0 !h-auto px-3 py-2 text-xs sm:px-4 sm:text-sm md:text-base`}
                            >
                                সাইন ইন
                            </Link>

                            <Link
                                href="/signup"
                                className={`${pathname === "/signup" || pathname === "/"
                                    ? "bg-[#05893E] btn text-white"
                                    : "btn"
                                    } !min-h-0 !h-auto px-3 py-2 text-xs sm:px-4 sm:text-sm md:text-base`}
                            >
                                সাইন আপ
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <NavLink />
            </div>
        </div>
    );
};

export default Navbar;
