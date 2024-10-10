"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaRegImages } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import Cart from "@/components/Cart/Cart";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import { formatCurrency } from "@/helpers/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface ClothingItem {
  id: number;
  name: string;
  price: number[];
  avatar: string[];
  avatarHover?: string;
  start: number;
  color: string[];
  size: string[];
  selectedSizeIndex: number;
  selectedColorIndex: number;
}
type ProductItem = {
  id: number;
  name: string;
  price: number;
  size: string;
  avatar: string;
  color: string;
};

export default function WomenPage() {
  const [openCart, setOpenCart] = useState(false);
  const [onSize, setOnSize] = useState<number | null>(null);

  const [addCart, setAddCart] = useState(false);
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const [onHover, setOnHover] = useState(true);
  const { addCartItem } = useShoppingContext();
  const handleOnHover = () => {
    setOnHover(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/clothes");
        const data: ClothingItem[] = await response.json();
        setClothingItems(
          data.map((item) => ({
            ...item,
            selectedSizeIndex: 0,
            selectedColorIndex: 0,
          }))
        );
        // console.table(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);
  const handleAddToCart = (item: ClothingItem) => {
    const selectedPrice = item.price[item.selectedSizeIndex];
    const selectedSize = item.size[item.selectedSizeIndex];
    const selectedColor = item.color[item.selectedColorIndex];
    const selectedAvatar = item.avatar[item.selectedColorIndex];

    const productToAddToCart: ProductItem = {
      id: item.id,
      name: item.name,
      price: selectedPrice,
      size: selectedSize,
      avatar: selectedAvatar,
      color: selectedColor,
    };

    addCartItem(productToAddToCart);
    setOpenCart(true);
  };
  const handleSizeClick = (itemId: number, index: number) => {
    setClothingItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, selectedSizeIndex: index } : item
      )
    );
  };
  const handleColorClick = (itemId: number, index: number) => {
    setClothingItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, selectedColorIndex: index } : item
      )
    );
  };

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

  // const pathname = usePathname();
  return (
    <nav className="m-auto">
      <div className="bg-[#f4f4f4] mb-8 flex flex-col gap-y-2">
        <div className="w-3/5 my-0 mx-auto h-80 flex items-center gap-x-3 text-2xl">
          {/* <Link href={"/home"} className="hover:text-red-500">
            Home
          </Link>
          .<p>Women</p>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            About
          </Link> */}
        </div>
      </div>
      <div className={``}>
        <div className="w-3/5 my-0 mx-auto grid grid-cols-3 gap-x-2 gap-y-4">
          {clothingItems.map((item: any, index: number) => (
            <Link
              href={`/singleproduct/${item.id}`}
              key={item.id}
              id={`${item.id}`}
              className={`rounded-2xl group`}
            >
              <div className="items-center relative">
                {item.avatar && (
                  <Image
                    className="object-cover w-full"
                    src={item.avatar[item.selectedColorIndex]}
                    alt="logo"
                    width={10}
                    height={10}
                    quality={100}
                    layout="responsive"
                  />
                )}
                {item.avatarHover && onHover && (
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleOpen(index);
                  }}
                  className={`absolute left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 h-10 -bottom-4 opacity-0 group-hover:opacity-100 group-hover:bottom-3 duration-700 ease-in-out flex items-center justify-center hover:bg-red-500 bg-black text-white font-bold rounded cursor-pointer`}
                >
                  QUICK ADD
                </button>

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

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full"></div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        {item.size.map((size: string, index: number) => (
                          <button
                            key={index}
                            className={`text-center p-1 text-black ring-2 ring-transparent transition-all border-2 rounded-md hover:border-black ${
                              index === item.selectedSizeIndex
                                ? "bg-red-500 text-white"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleSizeClick(item.id, index);
                              setAddCart(true);
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleAddToCart(item);
                        }}
                        className={`h-[40px] w-full flex items-center justify-center bg-slate-400 text-white font-bold rounded mt-2 `}
                      >
                        add to cart
                      </button>
                    </nav>
                  </div>
                )}
              </div>
              <div className="flex flex-col text-start gap-y-4 justify-end pt-4 ">
                <strong className="hover:text-red-500">{item.name}</strong>
                <strong className="flex">{isStar(item.start)}</strong>
                <strong>{`${formatCurrency(
                  item.price[item.selectedSizeIndex]
                )}`}</strong>

                <div className="flex gap-x-2">
                  {item.color.map((color: string, index: number) => (
                    <strong
                      key={index}
                      className={`bg-${color}-500 h-6 w-6 rounded-full border ${
                        index === item.selectedColorIndex ? "btn-toggle" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleColorClick(item.id, index);
                        handleOnHover();
                      }}
                    ></strong>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          {openCart && <Cart onClose={() => setOpenCart(false)} />}
        </div>
      </div>
    </nav>
  );
}
