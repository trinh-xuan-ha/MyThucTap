"use client";
import Link from "next/link";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HvCollections from "@/components/hovermenu/BtnTwo";
import HvProduct from "@/components/hovermenu/BtnThree";
import HvOther from "@/components/hovermenu/BtnFour";
import HvBlog from "@/components/hovermenu/BtnFive";
import Account from "./login/Account";
import Search from "./search/Search";
import Submenu from "@/components/ui/submenu/Submenu";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import Cart from "@/components/Cart/Cart";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/home" },
  {
    name: "ShCollectionsop",
    href: "/collection",
    component: HvCollections
  },
  {
    name: "products",
    href: "/products",
    component: HvProduct
  },
  {
    name: "Other pages",
    href: "/otherPages",
    component: HvOther

  },
  {
    name: "Blog",
    href: "/blog",
    component: HvBlog

  },
];

export default function Menu() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartQty, cartWish } = useShoppingContext();
  const [activeDropdown, setActiveDropdown] = useState(null);


  const handleButtonCart = () => {
    setCartOpen(false);
  };
  const handleButtonSearch = () => {
    setSearchOpen(false);
  };
  const handleButtonClick = () => {
    setAccountOpen(false);
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
            <div key={index} className={`h-full py-7 group/menu-parent`}>
              <Link
                href={link.href}
                onClick={() => handleLinkClick(index)}
                className={`link ${pathname === link.href ? 'text-red-500' : ''} font-bold hover:text-red-500 transition-colors duration-300`}
                key={link.name}
              >
                {link.name}
              </Link>
              {link.name && link.component && (
                <link.component />
              )}
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
              <Link href={"/productlike"} className="flex gap-x-2">
                <IoMdHeart className="text-2xl" />
                Wishlist
                <p className="absolute left-4 -top-3 w-5 h-5 bg-black text-white text-sm rounded-full text-center">
                  {cartWish}
                </p>
              </Link>
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
