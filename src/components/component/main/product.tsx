"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaRegImages } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoCloseOutline } from "react-icons/io5";
import Cart from "@/components/Cart/Cart";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import { formatCurrency } from "@/helpers/common";
import Link from "next/link";
interface Inventory {
  size: string;
  color: string;
  price: number;
}

interface ClothingItem {
  id: number;
  name: string;
  price: number;
  avatar?: string;
  avatarHover?: string;
  inventory: Inventory[];
  start: number; 
}

export default function Product() {
  const [openCart, setOpenCart] = useState(false);
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const [onSize, setOnSize] = useState<number | null>(null);
  const { addCartItem } = useShoppingContext();
  const [isActive, setIsActive] = useState<{ [key: number]: number }>({
    [clothingItems[0]?.id]: 0,
  });

  const [selectedPrices, setSelectedPrices] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    const btns = document.querySelectorAll(".toggle-btn");

    btns.forEach((btn, index) => {
      const activeIndex = isActive[clothingItems[0]?.id ?? 0];
      if (index === activeIndex) {
        console.log("Adding class to index:", index);
        btn.classList.add("actives");
      } else {
        console.log("Removing class from index:", index);
        btn.classList.remove("actives");
      }
    });
  },  [isActive, clothingItems]);
  const handleClick = (productId: number, colorIndex: number) => {
    setIsActive((prev) => ({
      ...prev,
      [productId]: colorIndex,
    }));
    // alert(colorIndex)
  };
  const handleSelectSize = (productId: number, price: number) => {
    setSelectedPrices((prevPrices) => ({
      ...prevPrices,
      [productId]: price,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/clothes");
        const data = await response.json();
        setClothingItems(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  if (clothingItems.length === 0) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  const handleOpen = (index: number) => {
    setOnSize(index);
  };

  const handleClose = () => {
    setOnSize(null);
  };

  const isStar = (number: number) => {
    const max = 5;
    const ArryStars = [];
    let star1 = number;
    let star2 = 0;
    if (number <= max) {
      star1 = number;
      star2 = max - number;
    }
    for (let i = 0; i < star1; i++) {
      ArryStars.push(<MdOutlineStar key={i} />);
    }
    for (let i = 0; i < star2; i++) {
      ArryStars.push(<MdOutlineStarBorder key={i} />);
    }
    return ArryStars;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <nav className="m-auto">
      <h4 className="text-center text-black font-bold text-4xl my-10 w-full">
        New For You
      </h4>
      <div className={`px-[25px]`}>
        <Slider {...settings}>
          {clothingItems.map((item: any, index: number) => (
            <div
              key={item.id}
              id={`${index}`}
              className={`h-[600px] rounded-2xl group`}
            >
              <div className="items-center relative">
                {item.avatar && (
                  <Image
                    className="object-cover w-full"
                    src={item.avatar}
                    alt="logo"
                    width={10}
                    height={10}
                    quality={100}
                    layout="responsive"
                  />
                )}
                {item.avatarHover && (
                  <div
                    className={`absolute top-0 left-0 group-hover:opacity-100 opacity-0 duration-700`}
                  >
                    <Image
                      className=""
                      src={item.avatarHover}
                      alt="hovered image"
                      width={10}
                      height={10}
                      quality={100}
                      layout="responsive"
                    />
                  </div>
                )}
                <div className="gap-y-5 flex flex-col absolute -right-1 top-5 cursor-pointer">
                  <div className="p-3 opacity-0 bg-white rounded-full hover:bg-black hover:text-white duration-500 ease-linear group-hover:-translate-x-3 group-hover:opacity-100">
                    <CiHeart className="text-base" />
                  </div>
                  <div className="p-3 bg-white rounded-full opacity-0 duration-700 group-hover:-translate-x-3 group-hover:opacity-100 hover:bg-black hover:text-white">
                    <FaRegImages className="text-base" />
                  </div>
                </div>
                <div
                  onClick={() => handleOpen(index)}
                  className={`absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 h-10 -bottom-4 opacity-0 group-hover:opacity-100 group-hover:bottom-3 duration-700 ease-in-out flex items-center justify-center hover:bg-red-500 bg-black text-white font-bold rounded cursor-pointer`}
                >
                  QUICK ADD
                </div>

                {onSize === index && (
                  <div className="absolute bg-white w-5/6 left-1/2 -translate-y-1/2 -translate-x-1/2 -bottom-20">
                    <nav className="p-3 w-full h-full text-center justify-center items-center flex flex-col gap-y-2">
                      <div className="flex justify-between items-center w-full">
                        <span className="block pb-1">SELECT SIZE</span>
                        <div
                          onClick={handleClose}
                          className="hover:text-red-500 cursor-pointer"
                        >
                          <IoCloseOutline />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        {Array.from(
                          new Set(item.inventory.map((inv: any) => inv.size))
                        ).map((size, i) => (
                          <div key={i} className="">
                            <label
                              className="cursor-pointer"
                              onClick={() => {
                                const matchingItem = item.inventory.find(
                                  (inv: any) => inv.size === size
                                );
                                if (matchingItem) {
                                  handleSelectSize(item.id, matchingItem.price);
                                }
                              }}
                            >
                              <input
                                type="radio"
                                className="peer sr-only "
                                name={`pricing-{item.id}`}
                              />
                              <div className="text-center bg-white p-1 text-black ring-2 ring-transparent transition-all border-2 rounded-md hover:border-black peer-checked:bg-black peer-checked:text-white">
                                {size}
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>

                      <div
                        onClick={() => {
                          addCartItem(item);
                          setOpenCart(true);
                        }}
                        className={`h-[40px] w-full flex items-center justify-center bg-slate-400 text-white font-bold rounded mt-2 cursor-pointer`}
                      >
                        add to cart
                      </div>
                    </nav>
                  </div>
                )}
              </div>
              <div className="flex flex-col text-start gap-y-4 justify-end pt-4 relative">
                <strong className="hover:text-red-500">{item.name}</strong>
                <strong className="flex">{isStar(item.start)}</strong>
                <strong>
                  {formatCurrency(
                    selectedPrices[item.id?.toString()]
                      ? selectedPrices[item.id?.toString()]
                      : item.price
                  )}
                </strong>
                <div className="flex items-center gap-x-2">
                  {Array.from(
                    new Set(item.inventory.map((inv: any) => inv.color))
                  ).map((color, colorIndex) => (
                    <p
                      key={colorIndex}
                      id={`${colorIndex}`}
                      onClick={() => handleClick(item.id, colorIndex)}
                      className={`bg-${color} h-6 w-6 rounded-full cursor-pointer border-2 ${
                        isActive[item.id] === colorIndex ? "btn-toggle" : ""
                      }`}
                    ></p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {openCart && <Cart onClose={() => setOpenCart(false)} />}
      </div>
    </nav>
  );
}
