
"use client";
import { handleSignOut } from "@/lib/handleSignOut";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return <LoaderSkeleton type="profile" />;
    }

    if (!user) {
        return <p className="p-10">আপনি লগইন করেননি।</p>;
    }


    return (
        <div className="min-h-screen bg-[#F0F5F0] px-4 py-10">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-3xl font-bold text-gray-800">
                    আমার প্রোফাইল
                </h1>

                <p className="mt-1 text-gray-500">
                    আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                </p>

                <div className="card mt-8 border border-gray-200 bg-white/80 shadow-none">
                    <div className="card-body flex flex-col items-center justify-between gap-5 sm:flex-row">
                        <div className="flex items-center gap-5">
                            <div className="relative h-22 w-22 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                                <Image
                                    src={user.image || "/default-avatar.png"}
                                    alt={user.name || "Profile"}
                                    fill
                                    sizes="88px"
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {user.name}
                                </h2>
                                <p className="text-gray-500">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        <button onClick={handleSignOut} className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                            ↩ সাইন আউট
                        </button>
                    </div>
                </div>

                <div className="card mt-7 border border-gray-200 bg-white/80 shadow-none">
                    <div className="card-body p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-gray-800">
                            তথ্য
                        </h2>

                        <form className="mt-6">
                            <label className="label mb-2 text-base text-gray-800">
                                নাম
                            </label>

                            <input
                                type="text"
                                defaultValue={user.name || ""}
                                className="input input-bordered w-full border-gray-200 bg-transparent focus:border-green-600 focus:outline-none"
                            />

                            <button
                                type="button"
                                className="btn mt-5 w-full border-none bg-green-700 text-white hover:bg-green-800"
                            >
                                আপডেট
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

