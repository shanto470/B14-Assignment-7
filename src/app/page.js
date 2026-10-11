
"use client";

import DateDisplay from "@/components/DisplayDate";
import MainPage from "@/components/Main";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="bg-[#eff4f0] pb-12">
      <div>
        <section className="container mx-auto mt-5 flex items-center font-sans sm:mt-6 md:mt-7">
          <div className="flex w-full flex-col items-center justify-between gap-5 rounded-3xl border border-gray-100 bg-white/60 p-4 shadow-sm backdrop-blur-sm sm:gap-6 sm:p-5 md:mt-0 md:flex-row md:gap-6 md:p-6 lg:gap-10">

            <div className="mt-0 w-full">
              <div className="inline-block rounded-full bg-[#e2f0e6] px-3 py-1.5 text-xs font-medium text-[#1b7a43] sm:px-4 sm:text-sm">
                <Suspense fallback={null}>
                  <DateDisplay />
                </Suspense>
              </div>

              <h1 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl md:text-4xl lg:text-5xl">
                আজকের বাজারের দাম এক নজরে
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-
                <br className="hidden lg:block" />
                সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
              </p>

              <div className="pt-3 sm:pt-2">
                <Link href="#all-products" className="rounded-lg bg-[#008744] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-[#007239] hover:shadow-lg sm:px-6 sm:text-base">
                  সব পণ্য দেখুন
                </Link>
              </div>
            </div>

            <div className="relative flex aspect-square w-full max-w-48 shrink-0 items-center justify-center sm:max-w-60 md:-mt-12 md:max-w-56 lg:max-w-70">
              <Image
                src="/bazar-hero.png"
                alt="বাজারের পণ্য"
                width={500}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

          </div>
        </section>
      </div>

      <div>
        <MainPage />
      </div>
    </section>
  );
}
