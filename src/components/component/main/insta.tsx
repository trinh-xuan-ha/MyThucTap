"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductLeft from "@/components/productleft/ProductLeft";
import NotificationRun from "@/app/productlike/NotificationRun";

export default function Insta() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    fetch("https://v1.appbackend.io/v1/rows/YizuUx3AFqAL")
      .then((response) => response.json())
      .then((data) => setImages(data.data))
      .catch((error) => console.log("error", error));
  };

  return (
    <nav className="mt-28">

      <div className="">
        <div className="text-center">
          <h3 className="my-6">
            <strong className=" text-3xl">@ Insta Gallery</strong>
          </h3>
          
          <div className="mb-10">
            <p>Follow us: @coolmate</p>
            <p>Share your style: #coolmate</p>
          </div>
          <ProductLeft />
          <NotificationRun />
        </div>
        <div className="flex gap-x-2">
          {images.map((image: any, index: number) => (
            <div key={index} className="w-1/5 rounded-2xl overflow-hidden">
              <Image
                className="object-cover"
                src={image.attachment}
                alt={image.name}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
