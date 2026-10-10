
import Link from "next/link";
import { SiGoogle, SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-10 sm:py-12">
            <div className="mx-auto w-full max-w-[546px]">
                <div className="mb-10 text-center">
                    <h1 className="text-2xl font-extrabold text-[#202b23] ">
                        সাইন ইন
                    </h1>

                    <p className="mt-3 text-sm text-[#69746b] ">
                        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                    </p>
                </div>

                <div className="rounded-[22px] border border-[#dce5dc] bg-[#fbfcfb] p-6 shadow-sm sm:p-8">
                    <form className="space-y-8">
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
                        <button
                            type="submit"
                            className="btn h-[53px] min-h-[53px] w-full rounded-xl border-0 bg-[#008b43] text-base font-bold text-white shadow-[0_4px_5px_rgba(0,80,35,0.25)] transition hover:bg-[#007638] active:scale-[0.99]"
                        >
                            সাইন ইন
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

                        >
                            <SiGoogle size={20} color="#4285F4" />
                            Google দিয়ে চালিয়ে যান
                        </button>

                        <button
                            type="button"
                            className="btn h-[53px] min-h-[53px] rounded-xl border border-[#dce5dc] bg-transparent text-sm font-semibold text-[#263128] shadow-none transition hover:border-[#aab9ac] hover:bg-[#f1f5f1] sm:text-base"

                        >
                            <SiGithub size={20} />
                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    <p className="mt-5 text-center text-base text-[#374139]">
                        অ্যাকাউন্ট নেই?{" "}
                        <Link
                            href="/signup"
                            className="font-medium text-[#008b43] transition hover:text-[#006c33] hover:underline"
                        >
                            সাইন আপ করুন
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

