
"use client";

import Link from "next/link";
// import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { SiGoogle, SiGithub } from "@icons-pack/react-simple-icons";
// import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";


export default function SignupPage() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        // console.log(user, "from signup page");
        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        })
        if (data) {
            console.log(data);
            toast.success("Sign Up Successful")
            redirect("/")

        }
        if (error) {
            console.log(error);
            toast.error(error.message)
            return
        }

    };
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    };

    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:py-10">
            <div className="mx-auto w-full max-w-[546px]">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-extrabold tracking-tight text-[#202b23]">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="mt-2 text-sm text-[#69746b]">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
                    </p>
                </div>

                <div className="rounded-[22px] border border-[#dce5dc] bg-[#fbfcfb] p-6 shadow-sm sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-lg font-medium text-[#263128]"
                            >
                                নাম
                            </label>

                            <input
                                name="name"
                                id="name"
                                type="text"
                                placeholder="যেমন: রহিম উদ্দিন"

                                className="input h-[53px] w-full rounded-xl border border-[#dce5dc] bg-transparent px-4 text-base text-[#263128] outline-none transition focus:border-[#008b43] focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-lg font-medium text-[#263128]"
                            >
                                ছবি
                            </label>

                            <input
                                name="image"
                                id="name"
                                type="url"
                                placeholder="ছবি"

                                className="input h-[53px] w-full rounded-xl border border-[#dce5dc] bg-transparent px-4 text-base text-[#263128] outline-none transition focus:border-[#008b43] focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-lg font-medium text-[#263128]"
                            >
                                ইমেইল
                            </label>

                            <input
                                name="email"
                                type="email"
                                placeholder="you@example.com"


                                className="input h-[53px] w-full rounded-xl border border-[#dce5dc] bg-transparent px-4 text-base text-[#263128] outline-none transition focus:border-[#008b43] focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-lg font-medium text-[#263128]"
                            >
                                পাসওয়ার্ড
                            </label>

                            <input
                                name="password"

                                type="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"

                                minLength={8}
                                className="input h-[53px] w-full rounded-xl border border-[#dce5dc] bg-transparent px-4 text-base text-[#263128] outline-none transition focus:border-[#008b43] focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-lg font-medium text-[#263128]"
                            >
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>

                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="আবার লিখুন"

                                className="input h-[53px] w-full rounded-xl border border-[#dce5dc] bg-transparent px-4 text-base text-[#263128] outline-none transition focus:border-[#008b43] focus:outline-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn h-[53px] min-h-[53px] w-full rounded-xl border-0 bg-[#008b43] text-base font-bold text-white shadow-[0_4px_5px_rgba(0,80,35,0.25)] transition hover:bg-[#007638] active:scale-[0.99]"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>
                    </form>

                    <div className="my-5 flex items-center gap-5">
                        <div className="h-[2px] flex-1 bg-[#e1e7e1]" />
                        <span className="text-base text-[#374139]">
                            অথবা
                        </span>
                        <div className="h-[2px] flex-1 bg-[#e1e7e1]" />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <button

                            type="button"
                            className="btn h-[53px] min-h-[53px] rounded-xl border border-[#dce5dc] bg-transparent text-sm font-semibold text-[#263128] shadow-none transition hover:border-[#aab9ac] hover:bg-[#f1f5f1] sm:text-base"
                            onClick={handleGoogleSignIn}
                        >
                            <SiGoogle size={20} color="#4285F4" />
                            Google দিয়ে চালিয়ে যান
                        </button>

                        <button
                            type="button"
                            className="btn h-[53px] min-h-[53px] rounded-xl border border-[#dce5dc] bg-transparent text-sm font-semibold text-[#263128] shadow-none transition hover:border-[#aab9ac] hover:bg-[#f1f5f1] sm:text-base"
                            onClick={handleGithubSignIn}
                        >
                            <SiGithub size={20} />
                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    <p className="mt-5 text-center text-base text-[#374139]">
                        অ্যাকাউন্ট আছে?{" "}
                        <Link
                            href="/signin"
                            className="font-medium text-[#008b43] transition hover:text-[#006c33] hover:underline"
                        >
                            সাইন ইন করুন
                        </Link>
                    </p>
                </div>

                <Link
                    href="/"
                    className="mt-8 flex items-center justify-center gap-2 text-base text-[#78847a] transition hover:text-[#008b43]"
                >
                    <ArrowLeft size={17} />
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
}

