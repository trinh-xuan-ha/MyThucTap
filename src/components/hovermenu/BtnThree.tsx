import Image from "next/image";
import Link from "next/link";
// import Myimage from"../../../public/images/menu_330x320.webp"
import React, { useEffect, useState } from "react";

import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
export default function BtnThree() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    fetch("https://v1.appbackend.io/v1/rows/G7AUbglRb0Na")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log("error", error));
  };
  return (
    <div
      className="w-full left-0 bg-white z-[999] border-2 border-[#e7e8eb] hoverbtn3 hidden group-hover/menu-parent:translate-y-[-20px] group-hover/menu-parent:block absolute "
      style={{ top: "calc(100% + 20px)" }}
    >
      <div className="flex gap-x-2 w-[1510px] my-0 mx-auto py-5">
        <div className="w-3/4 flex">
          <ul className="w-1/4 flex flex-col gap-y-4 text-left">
            <strong className="mb-3">PRODUCT DETAIL</strong>
            <li>
              <Link href={"#"}>Product Detail Default</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Thumb Left 1</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Thumb Left 2</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Thumb Left Right</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Coundown</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Tab Accordion V1</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Tab Accordion V2</Link>
            </li>
          </ul>
          <ul className=" w-1/4 flex flex-col gap-y-4 text-left">
            <strong className="mb-3">PRODUCT DETAIL</strong>
            <li>
              <Link href={"#"}>Product Detail Thumb Grid 1</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Thumb Grid 2</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Image Scroll</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Image Slider 1</Link>
            </li>
            <li>
              <Link href={"#"}>Product Detail Image Slider 2</Link>
            </li>
            <li>
              <Link href={"#"}>Product 3D, AR Models</Link>
            </li>
          </ul>
          <ul className="w-1/4 flex flex-col gap-y-4 text-left">
            <strong className="mb-3">PRODUCT DETAIL</strong>
            <li>
              <Link href={"#"}>Product Video</Link>
            </li>
            <li>
              <Link href={"#"}>Product Pre-Order</Link>
            </li>
            <li>
              <Link href={"#"}>Product Variant Dropbox Style</Link>
            </li>
            <li>
              <Link href={"#"}>Product Variant Image Swatch</Link>
            </li>
            <li>
              <Link href={"#"}>Product Variant Pattern</Link>
            </li>
            <li>
              <Link href={"#"}>Product Sticky Add To Cart</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/5">
          <Slider {...settings}>
            {data &&
              data.map((item: any, index: number) => {
                return (
                  <div key={index} className="w-full">
                    <div>
                      <Image
                        src={item.attachment}
                        alt="logo"
                        width={333}
                        height={33}
                        className="object-cover h-[21rem] w-[100%]"
                      />
                    </div>
                    <div className="flex flex-col text-left gap-y-2 mt-2">
                      <strong>{item.name}</strong>
                      <p>{`${item.price}$`}</p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
