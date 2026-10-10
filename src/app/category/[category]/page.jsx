import Sorting from "@/components/Sorting";

const page = async ({ params }) => {
    const { category } = await params;

    const res = await fetch(
        // `https://api.api-store.workers.dev/api/bazardor/products?category=${category}`
        `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`
    );

    const products = await res.json();

    const categoryName = products[0]?.categoryNameBn || category;
    const categoryIcon = products[0]?.categoryIcon || "🛒";

    return (
        <main className="min-h-screen bg-[#f3f7f4] py-7">
            <div className="container mx-auto px-4 md:px-6">

                {/* Category Header */}
                <section className="rounded-2xl border border-[#dce5df] bg-white px-6 py-6">
                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f0f5f1] text-4xl">
                            {categoryIcon}
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-[#1c2720]">
                                {categoryName}
                            </h1>

                            <p className="mt-1 text-sm text-[#68736d]">
                                {toBanglaNumber(products.length)}
                                টি পণ্যের আজকের দাম ও পরিবর্তন
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sorting + Products */}
                <section className="mt-7 rounded-2xl border border-[#dce5df] bg-white px-6 py-5">
                    <Sorting products={products} />
                </section>
            </div>
        </main>
    );
};

function toBanglaNumber(number) {
    return String(number).replace(
        /\d/g,
        (digit) => "০১২৩৪৫৬৭৮৯"[digit]
    );
}

export default page;