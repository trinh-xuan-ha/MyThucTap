'use client'
import Link from "next/link"
import Logo from "./Logo"
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import BtnTwo from "./hovermenu/BtnTwo";
import { useId } from "react";

function YourComponent() {
 
}



const navLinks = [
    {name: "Home",href:"/home"},
    {name: "ShCollectionsop",href:"/collections"},
    {name: "Products",href:"#/Products"},
    {name: "Other pages",href:"#/Otherpages"},
    {name: "Blog",href:"#/login"},
   
] //JSON.stringify();

export default function Menu() {
    const [wishlist, setWishlist] = useState(0);
    const heart = () => {
        setWishlist(wishlist + 1);
    }
    const[cart, serCart] = useState(0);
    const carts = () => {
        serCart(cart + 1);
    }
   
    const [activeLink, setActiveLink] = useState(0);

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-menu');
        btns.forEach((btn, index) => {
            if (index === activeLink) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }, [activeLink]);

    const handleLinkClick = (index:number) => {
        setActiveLink(index);
        
    };

    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false); // State để lưu trạng thái hover

    const handleLinkHover = () => {
        setIsHovered(true); // Đặt trạng thái hover thành true khi di chuột qua phần tử
    };

    const handleLinkLeave = () => {
        setIsHovered(false); // Đặt trạng thái hover thành false khi di chuột rời khỏi phần tử
    };
    return(
        <nav className=" flex items-center justify-between min-h-[90px] px-12">
            <div className=" flex flex-1 items-center gap-x-5">
                {navLinks.map((link,index) => {
                    const isActive = pathname.startsWith(link.href)
                    return(
                        <Link href={link.href} onClick={() => handleLinkClick(index)} className={` btn-menu${index} btn-menu font-bold hover:text-red-500 transition-colors duration-300`}  key = {link.name}
                        onMouseEnter={handleLinkHover}
                        onMouseLeave={handleLinkLeave}
                            >
                            
                            {link.name}
                            
                        </Link>
                    );
                })}
            </div>
         
                    
                <BtnTwo/>
            
            
            <div className="flex-grow-0">
                <Link href="#" className="max-w-[165px] transition-colors duration-300 hover:text-red-500">
            <Logo/>

                </Link>
            </div>
            <div className="flex flex-1 justify-end gap-x-6">
            <div>
                <Link href="#" className={` flex items-center gap-x-2 transition-colors duration-300 hover:text-red-500`}>
                    <IoIosSearch className="text-2xl"/>
                    Search
                </Link>
            </div>
            <div>
            <Link href="#" className="flex items-center gap-x-2 transition-colors duration-300 hover:text-red-500">
                <FaUser className="text-2xl"/>
                Account
            </Link>

            </div>
            <div>
            <Link href="#" className="flex items-center gap-x-2 relative transition-colors duration-300 hover:text-red-500">
                <IoMdHeart className="text-2xl"/>
                Wishlist
                <p className="absolute left-4 -top-3 w-5 h-5 bg-black text-white text-sm rounded-full text-center">{wishlist}</p>
            </Link>

            </div>
            <div>
            <Link href="#" className="flex items-center gap-x-2 relative transition-colors duration-300 hover:text-red-500">
                <IoCartOutline className="text-2xl"/>
                Cart
                <p className="absolute left-4 -top-3 w-5 h-5 bg-black text-white text-sm rounded-full text-center">{cart}</p>
            </Link>
            {/* <p>ffsdfsdf {wishlist}</p>
                    <button onClick={heart}>sdsd</button> */}
            </div>
            </div> 
            
        </nav>
    )
}