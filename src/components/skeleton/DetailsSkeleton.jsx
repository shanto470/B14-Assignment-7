const ProductDetailsSkeleton = () => {
    return (
        <main className="min-h-screen bg-[#f3f7f4] py-6">
            <div className="container mx-auto px-4 md:px-6">

                {/* Breadcrumb */}
                <div className="mb-7 flex items-center gap-3">
                    <div className="skeleton h-4 w-12"></div>
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                </div>

                {/* Product Header */}
                <section className="mb-6 rounded-2xl border border-[#dce5df] bg-white p-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        <div className="flex items-center gap-5">
                            <div className="skeleton h-20 w-20 shrink-0 rounded-2xl"></div>

                            <div className="space-y-3">
                                <div className="skeleton h-7 w-44"></div>
                                <div className="skeleton h-4 w-32"></div>
                                <div className="skeleton h-4 w-52"></div>
                            </div>
                        </div>

                        <div className="w-full rounded-2xl bg-[#f0f5f1] px-7 py-4 md:w-48">
                            <div className="skeleton mx-auto h-4 w-20"></div>
                            <div className="skeleton mx-auto mt-3 h-9 w-28"></div>
                            <div className="skeleton mx-auto mt-3 h-4 w-24"></div>
                        </div>
                    </div>
                </section>

                {/* Price Summary */}
                <section className="rounded-2xl border border-[#dce5df] bg-white p-5 md:p-6">

                    <div className="skeleton mb-5 h-6 w-40"></div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-[#dce5df] p-5"
                            >
                                <div className="skeleton h-4 w-24"></div>
                                <div className="skeleton mt-3 h-8 w-32"></div>
                                <div className="skeleton mt-3 h-3 w-36"></div>
                            </div>
                        ))}
                    </div>

                    {/* Market Table */}
                    <div className="skeleton mb-5 mt-8 h-6 w-52"></div>

                    <div className="overflow-hidden rounded-2xl border border-[#dce5df]">

                        {/* Desktop */}
                        <div className="hidden md:block">
                            <div className="flex justify-between bg-[#fafcfb] p-4">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="skeleton h-4 w-20"
                                    ></div>
                                ))}
                            </div>

                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between border-t border-[#dce5df] p-4"
                                >
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="skeleton h-4 w-20"
                                        ></div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Mobile */}
                        <div className="space-y-3 p-3 md:hidden">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-[#dce5df] p-4"
                                >
                                    <div className="skeleton h-5 w-32"></div>
                                    <div className="skeleton mt-3 h-4 w-20"></div>
                                    <div className="skeleton mt-5 h-5 w-full"></div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProductDetailsSkeleton;