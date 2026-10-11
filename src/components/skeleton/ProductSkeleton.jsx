const ProductSkeleton = ({ title, count = 6 }) => {
    return (
        <section className="mb-10">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                    {title}
                </h2>

                <div className="skeleton h-5 w-20"></div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                        <div className="skeleton h-40 w-full rounded-lg"></div>

                        <div className="mt-4 space-y-3">
                            <div className="skeleton h-5 w-3/4"></div>
                            <div className="skeleton h-4 w-1/2"></div>

                            <div className="flex items-center justify-between pt-3">
                                <div className="skeleton h-7 w-24"></div>
                                <div className="skeleton h-5 w-16"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductSkeleton;