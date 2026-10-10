const page = async ({ params }) => {
    const { productDetailsId } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products/${productDetailsId}`
    );

    const data = await res.json();

    console.log(data, "from details page");

    const markets = data.markets || [];

    const lowestPrice = Math.min(
        ...markets.map((item) => item.min)
    );

    const highestPrice = Math.max(
        ...markets.map((item) => item.max)
    );

    const averagePrice =
        markets.reduce(
            (total, item) => total + (item.min + item.max) / 2,
            0
        ) / markets.length;

    const toBanglaNumber = (number) => {
        return String(number).replace(
            /\d/g,
            (digit) => "০১২৩৪৫৬৭৮৯"[digit]
        );
    };

    const formatPrice = (number) => {
        return `${toBanglaNumber(
            Number(number).toFixed(number % 1 ? 2 : 0)
        )} টাকা`;
    };

    return (
        <main className="min-h-screen bg-[#f3f7f4] py-6">
            <div className="container mx-auto px-4 md:px-6">

                {/* Breadcrumb */}
                <div className="mb-7 flex items-center gap-2 text-sm text-[#59645e]">
                    <span>হোম</span>
                    <span>›</span>
                    <span>{data.categoryNameBn}</span>
                    <span>›</span>
                    <span>{data.nameBn}</span>
                </div>

                {/* Product Header */}
                <section className="mb-6 rounded-2xl border border-[#dce5df] bg-white p-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        {/* Product Info */}
                        <div className="flex items-center gap-5">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#f0f5f1] text-5xl">
                                {data.image || "🍚"}
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-[#172019] md:text-3xl">
                                    {data.nameBn}
                                </h1>

                                <p className="mt-1 text-sm text-[#69746e]">
                                    প্রতি কেজি · {data.categoryNameBn}
                                </p>

                                <p className="mt-3 text-sm text-[#303a35]">
                                    গতকালের তুলনায় আজ দাম{" "}
                                    <span
                                        className={
                                            data.change?.dir === "up"
                                                ? "font-semibold text-[#179447]"
                                                : "font-semibold text-red-500"
                                        }
                                    >
                                        {data.change?.dir === "up"
                                            ? "বেড়েছে"
                                            : "কমেছে"}
                                    </span>
                                    {" "}· {toBanglaNumber(data.change?.pct)}%
                                </p>
                            </div>
                        </div>

                        {/* Today's Price */}
                        <div className="rounded-2xl bg-[#f0f5f1] px-7 py-4 text-center">
                            <p className="text-sm text-[#68736d]">
                                আজকের দাম
                            </p>

                            <p className="mt-1 text-3xl font-bold text-[#1d2922]">
                                {toBanglaNumber(data.today)}
                            </p>

                            <p className="text-sm text-[#68736d]">
                                টাকা / কেজি
                            </p>

                            <p className="mt-1 text-sm font-semibold text-red-500">
                                ▲ {toBanglaNumber(data.change?.pct)}%
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main */}
                <section className="rounded-2xl border border-[#dce5df] bg-white p-5 md:p-6">

                    {/* Summary */}
                    <h2 className="mb-5 text-xl font-bold text-[#1d2922]">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                        {/* Lowest */}
                        <div className="rounded-2xl border border-[#dce5df] p-5">
                            <p className="text-sm text-[#56615b]">
                                সর্বনিম্ন দাম
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#159447]">
                                {toBanglaNumber(lowestPrice)}
                                <span className="ml-1 text-base font-medium">
                                    টাকা
                                </span>
                            </p>

                            <p className="mt-1 text-xs text-[#6c7771]">
                                সবচেয়ে কম দামের বাজার
                            </p>
                        </div>

                        {/* Highest */}
                        <div className="rounded-2xl border border-[#dce5df] p-5">
                            <p className="text-sm text-[#56615b]">
                                সর্বাধিক দাম
                            </p>

                            <p className="mt-1 text-2xl font-bold text-red-500">
                                {toBanglaNumber(highestPrice)}
                                <span className="ml-1 text-base font-medium">
                                    টাকা
                                </span>
                            </p>

                            <p className="mt-1 text-xs text-[#6c7771]">
                                সবচেয়ে বেশি দামের বাজার
                            </p>
                        </div>

                        {/* Average */}
                        <div className="rounded-2xl border border-[#dce5df] p-5">
                            <p className="text-sm text-[#56615b]">
                                গড় দাম
                            </p>

                            <p className="mt-1 text-2xl font-bold text-[#159447]">
                                {toBanglaNumber(
                                    averagePrice.toFixed(2)
                                )}
                                <span className="ml-1 text-base font-medium">
                                    টাকা
                                </span>
                            </p>

                            <p className="mt-1 text-xs text-[#6c7771]">
                                প্রতি কেজির হিসেবে
                            </p>
                        </div>
                    </div>

                    {/* Table */}
                    <h2 className="mb-5 mt-8 text-xl font-bold text-[#1d2922]">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    <div className="overflow-hidden rounded-2xl border border-[#dce5df]">

                        {/* Desktop Table */}
                        <div className="hidden md:block">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#fafcfb] text-left text-sm text-[#69746e]">
                                        <th className="px-4 py-4 font-semibold">
                                            বাজার
                                        </th>

                                        <th className="px-4 py-4 font-semibold">
                                            বিভাগ
                                        </th>

                                        <th className="px-4 py-4 text-right font-semibold">
                                            সর্বনিম্ন
                                        </th>

                                        <th className="px-4 py-4 text-right font-semibold">
                                            সর্বাধিক
                                        </th>

                                        <th className="px-4 py-4 text-right font-semibold">
                                            গড়
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {markets.map((market, index) => {
                                        const average =
                                            (market.min + market.max) / 2;

                                        return (
                                            <tr
                                                key={index}
                                                className={`border-t border-[#dce5df] text-sm text-[#303a35] ${index % 2 === 0
                                                        ? "bg-[#f8fbf9]"
                                                        : "bg-[#eef5f0]"
                                                    }`}
                                            >
                                                <td className="px-4 py-4 font-medium">
                                                    {market.market}
                                                </td>

                                                <td className="px-4 py-4">
                                                    {market.division}
                                                </td>

                                                <td className="px-4 py-4 text-right">
                                                    {formatPrice(market.min)}
                                                </td>

                                                <td className="px-4 py-4 text-right">
                                                    {formatPrice(market.max)}
                                                </td>

                                                <td className="px-4 py-4 text-right font-semibold">
                                                    {formatPrice(average)}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile */}
                        <div className="space-y-3 p-3 md:hidden">
                            {markets.map((market, index) => {
                                const average =
                                    (market.min + market.max) / 2;

                                return (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-[#dce5df] bg-[#fafcfb] p-4"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="font-semibold text-[#27322c]">
                                                    {market.market}
                                                </h3>

                                                <p className="mt-1 text-xs text-[#707b75]">
                                                    {market.division}
                                                </p>
                                            </div>

                                            <p className="font-bold text-[#159447]">
                                                {formatPrice(average)}
                                            </p>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#dce5df] pt-3">
                                            <div>
                                                <p className="text-xs text-[#707b75]">
                                                    সর্বনিম্ন
                                                </p>

                                                <p className="mt-1 font-medium">
                                                    {formatPrice(market.min)}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-xs text-[#707b75]">
                                                    সর্বাধিক
                                                </p>

                                                <p className="mt-1 font-medium">
                                                    {formatPrice(market.max)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default page;