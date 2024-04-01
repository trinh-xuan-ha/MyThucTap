'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../public/images/banner-home1-1-min_2048x.webp";
import image2 from "../../public/images/banner-home1-2-min-min_2048x.webp";
import image3 from "../../public/images/s-1-3_2048x.webp";

export default function ImagePage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const Images = [
        {
            title: "NEW ARRIVALS",
            sex: "WOMEN DRESSES",
            logo: image1
        },
        {
            title: "NEW ARRIVALS",
            sex: "AUTUMN OVERCOAT",
            logo: image2
        },
        {
            title: "WOMEN OF SUMMER",
            sex: "WOMEN DRESSES",
            logo: image3
        }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === Images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Cập nhật mỗi 5 giây

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div key={currentImageIndex} className="relative">
                <Image
                    className="max-w-max  w-full h-[940px] image-container"
                    src={Images[currentImageIndex].logo}
                    alt="logo"
                />
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-72">
                <h4 className="text-2xl font-bold text-white dark:text-gray-100 pb-5 transition-opacity duration-1000 ease-out delay-500 animate-fadeInDown">
                    {Images[currentImageIndex].title}
                        </h4>
                    <h4 className="text-7xl font-bold text-white dark:text-gray-100 pb-5 animate-fadeInsould">
                            {Images[currentImageIndex].sex}
                    </h4>
                    <button className="px-9 py-5 hover:bg-red-500 transition-colors duration-300 bg-white text-black rounded-md">Show now</button>
                </div>
            </div>
        </div>
    );
}