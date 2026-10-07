'use client'

import MainPage from "@/components/Main";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [date, setDate] = useState(null)

  useEffect(() => {

    const today = new Date().toLocaleDateString("bn-BD", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    })

    setTimeout(() => {
      setDate(today)
    }, 0)

  }, [])

  return (

    <section className="bg-[#eff4f0] pb-12">
      <div >

        <section className="container m-auto flex items-center font-sans mt-7">

          <div className="w-full bg-white/60 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 shadow-sm flex gap-10 flex-col md:flex-row items-center justify-between ">
            <div className="w-full -mt-12">

              <div className="inline-block bg-[#e2f0e6] text-[#1b7a43] text-sm font-medium px-4 py-1.5 rounded-full">
                {date}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mt-3">
                আজকের বাজারের দাম এক নজরে
              </h1>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-
                <br />
                সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
              </p>

              <div className="pt-2">
                <button className="bg-[#008744] hover:bg-[#007239] text-white font-medium px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
                  সব পণ্য দেখুন
                </button>
              </div>

            </div>


            <div className="-mt-12 relative flex items-center justify-center w-full max-w-70 sm:max-w-[320px] aspect-square shrink-0">

              <Image
                src="/bazar-hero.png"
                alt="banner"
                width={500}
                height={500}
              />

            </div>

          </div>

        </section>

      </div>
      <div>
        <MainPage></MainPage>
      </div>

    </section>
  );
}