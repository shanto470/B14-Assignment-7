
const LoaderSkeleton = ({ type = "product", count = 6 }) => {
    if (type === "product") {
        return (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                        <div className="skeleton h-36 w-full rounded-lg"></div>
                        <div className="skeleton mt-4 h-4 w-3/4"></div>
                        <div className="skeleton mt-2 h-4 w-1/2"></div>
                        <div className="skeleton mt-4 h-6 w-2/5"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === "category") {
        return (
            <div className="flex flex-wrap gap-3">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className="skeleton h-12 w-28 rounded-xl"
                    ></div>
                ))}
            </div>
        );
    }

    if (type === "profile") {
        return (
            <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-xl"></div>
                    <div className="flex-1">
                        <div className="skeleton h-5 w-1/2"></div>
                        <div className="skeleton mt-3 h-4 w-3/4"></div>
                    </div>
                </div>
                <div className="skeleton mt-6 h-10 w-full"></div>
                <div className="skeleton mt-3 h-10 w-full"></div>
            </div>
        );
    }

    return (
        <div className="skeleton h-32 w-full rounded-xl"></div>
    );
};

export default LoaderSkeleton;

