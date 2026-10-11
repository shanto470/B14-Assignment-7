
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-10">
            <div className="w-full max-w-lg text-center">
                <div className="relative mx-auto flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
                    <div className="absolute inset-0 rounded-full bg-rose-100" />
                    <span className="relative text-5xl font-extrabold text-rose-500 sm:text-6xl">
                        404
                    </span>
                </div>

                <h1 className="mt-6 text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
                    দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
                </h1>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
                    আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে,
                    নাম পরিবর্তন করা হয়েছে অথবা ঠিকানাটি ভুল।
                </p>

                <Link
                    href="/"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-600 sm:text-base"
                >
                    <Home size={19} />
                    হোম পেজে ফিরে যান
                </Link>


            </div>
        </main>
    );
}
