"use client";
import Link from "next/link";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import BtnTwo from "./hovermenu/BtnTwo";
import BtnThree from "./hovermenu/BtnThree";
import BtnFour from "./hovermenu/BtnFour";
import BtnFive from "./hovermenu/BtnFive";
import Account from "./login/Account";
import Search from "./search/Search";
import Submenu from "@/components/ui/submenu/Submenu";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import Cart from "@/components/Cart/Cart";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "ShCollectionsop",
    href: "/collections",
    submenu: [
      { name: "a", href: "/fdfd" },
      { name: "a", href: "/fdfd" },
      { name: "a", href: "/fdfd" },
      { name: "a", href: "/fdfd" },
    ],
  },
  // {
  //     name: "Products",
  //     href:"#/Products",
  //     submenu: [
  //         [
  //             {name: "a1deeeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a1eeeeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a1eeeeeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a1eeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a1eeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a1eeeeeeeeeeeee",href:"/"},
  //         ],
  //         [
  //             {name: "a2deeeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a2eeeeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a2eeeeeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a2eeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a2eeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a2eeeeeeeeeeeee",href:"/"},
  //         ],
  //         [
  //             {name: "a3deeeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a3eeeeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a3eeeeeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "aeeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a3eeeeeeeeeeee",href:"/fdfd"},
  //             {name: "a3eeeeeeeeeeeee",href:"/"},
  //         ],
  //         ]

  // },
  {
    name: "products",
    href: "#/Otherpages",
    submenu: [
      { name: "404 eror", href: "#/register" },
      { name: "about us", href: "#/register" },
      { name: "fAQs page", href: "#/register" },
      { name: "store direction page", href: "#/register" },
      { name: "store locations page", href: "#/register" },
      { name: "testimonials", href: "#/register" },
      { name: "size guide page", href: "#/register" },
      { name: "size guide page", href: "#/register" },
      { name: "size guide page", href: "#/register" },
      { name: "size guide page", href: "#/register" },
      { name: "size guide page", href: "#/register" },
      { name: "size guide page", href: "#/register" },
      { name: "size guide page", href: "#/register" },
      { name: "size guide page", href: "#/register" },
    ],
  },
  {
    name: "Other pages",
    href: "#/Otherpages",
    submenu: [
      { name: "404 eror", href: "#/register" },
      { name: "about us", href: "#/register" },
      { name: "fAQs page", href: "#/register" },
      { name: "store direction page", href: "#/register" },
      { name: "store locations page", href: "#/register" },
      { name: "testimonials", href: "#/register" },
      { name: "size guide page", href: "#/register" },
    ],
  },
  {
    name: "Blog",
    href: "#/login",
    submenu: [
      { name: "Blog Left Sidebar", href: "#/login" },
      { name: "blog right sidebar", href: "#/register" },
      { name: "blog without sidebar", href: "#/register" },
      { name: "blog column view", href: "#/register" },
      { name: "blog detail left sidebar", href: "#/register" },
      { name: "blog detail without sidebar", href: "#/register" },
    ],
  },
]; //JSON.stringify();

export default function Menu() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartQty } = useShoppingContext();
  const handleButtonCart = () => {
    setCartOpen(false);
  };
  const handleButtonSearch = () => {
    setSearchOpen(false);
  };
  const handleButtonClick = () => {
    setAccountOpen(false);
  };
  const [wishlist, setWishlist] = useState(0);
  const heart = () => {
    setWishlist(wishlist + 1);
  };
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-menu");
    btns.forEach((btn, index) => {
      if (index === activeLink) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }, [activeLink]);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };

  const pathname = usePathname();

  return (
    <nav className=" h-[90px] px-12 pota relative">
      <nav className=" flex items-center justify-between h-full">
        <div className=" flex flex-1 items-center gap-x-5 h-full">
          {navLinks.map((link, index) => (
            <div key={index} className={`h-full py-7  group/menu-parent`}>
              <Link
                href={link.href}
                onClick={() => handleLinkClick(index)}
                className={` btn-menu font-bold hover:text-red-500 transition-colors duration-300`}
                key={link.name}
              >
                {link.name}
              </Link>
              {index === 1 && <BtnTwo />}
              {index === 2 && <BtnThree />}
              {index === 3 && <BtnFour />}
              {index === 4 && <BtnFive />}
            </div>
          ))}
        </div>
        <div className="flex-grow-0 h-full py-7">
          <label className="max-w-[165px] transition-colors duration-300 hover:text-red-500">
            <Logo />
          </label>
        </div>
        <div className="flex flex-1 justify-end gap-x-6 h-full py-7">
          <div
            onClick={() => {
              setSearchOpen(true);
            }}
          >
            <label
              className={` flex items-center gap-x-2 transition-colors duration-300 hover:text-red-500`}
            >
              <IoIosSearch className="text-2xl" />
              Search
            </label>
          </div>
          {searchOpen && <Search onClose={handleButtonSearch} />}
          <div>
            <label
              onClick={() => {
                setAccountOpen(true);
              }}
              className="flex cursor-pointer items-center gap-x-2 transition-colors duration-300 hover:text-red-500"
            >
              <FaUser className="text-2xl" />
              Accout
            </label>
            {accountOpen && <Account onClose={handleButtonClick} />}
          </div>
          <div>
            <label className="flex items-center gap-x-2 relative transition-colors duration-300 hover:text-red-500">
              <IoMdHeart className="text-2xl" />
              Wishlist
              <p className="absolute left-4 -top-3 w-5 h-5 bg-black text-white text-sm rounded-full text-center">
                {wishlist}
              </p>
            </label>
          </div>
          <div>
            <label
              onClick={() => {
                setCartOpen(true);
              }}
              className="flex items-center gap-x-2 relative transition-colors duration-300 hover:text-red-500"
            >
              <IoCartOutline className="text-2xl" />
              Cart
              <p className="absolute left-4 -top-3 w-5 h-5 bg-black text-white text-sm rounded-full text-center">
                {cartQty}
              </p>
            </label>
            {cartOpen && <Cart onClose={handleButtonCart} />}
          </div>
        </div>
      </nav>
    </nav>
  );
}
