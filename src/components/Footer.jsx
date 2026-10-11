import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container mx-auto my-8 flex flex-col gap-3 px-4 sm:px-6 md:flex-row md:flex-wrap md:justify-between md:gap-4 lg:flex-nowrap lg:px-0">

                <h1 className="text-[14px] text-black">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </h1>

                <h1 className="text-[14px] text-black">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </h1>

            </div>
        </div>
    );
};

export default Footer;