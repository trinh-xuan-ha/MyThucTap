"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaRegImages } from "react-icons/fa";
import Link from "next/link";
import $ from 'jquery';
import 'slick-carousel/slick/slick';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Product() {
    const [productData, setProductData] = useState<any>(null);
    const [btnCartStates, setBtnCartStates] = useState<string[]>([]);
    const [btnCart, setbtnCart] = useState('QUICK ADD')

    const clickBtnCart = (index:number) => {
            setbtnCart('ADD TO CART')
        
    }
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch("https://v1.appbackend.io/v1/rows/K5qOGLBcJBat");
                const data = await response.json();
                setProductData(data);
                
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, []);

    const  isStar  =  (number:number) => {
        const max = 5; 
        const ArryStars = [];
        let star1 = number;
        let star2 = 0;
        if(number <= max) {
            star1 = number;
            star2 = (max - number);
        }
        for(let i = 0 ; i < star1 ; i++) {
            ArryStars.push(<MdOutlineStar key={i}/>);
        }
        for(let i = 0 ; i < star2 ; i++) {
            ArryStars.push(<MdOutlineStarBorder key={i}/>);
        }
        return ArryStars;
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
      };
   
    return (
        <nav className="mt-5">
            <h4 className="text-center text-black font-bold text-4xl my-10">New For You</h4>
            <div  className={``}>
            {/* <Slider {...settings}> */}
            {/* {productData && productData.data.map((product:any, index:number) => (
               <Link href="#" key={product.id} className={``}>
               <div className="">
                   {product.attachment && (
                       <Image
                           className="object-cover "
                           src={product.attachment}
                           alt="logo"
                           width={10}
                           height={10}
                           layout="responsive"
                       />
                   )}
                   
                   {product.attachment2 && (
                       <div className={`absolute inset-0  hover:opacity-100 opacity-0  transition-opacity duration-300 `}>
                           <Image
                               className="object-cover"
                               src={product.attachment2}
                               alt="hovered image"
                               width={10}
                               height={10}
                               layout="responsive"
                           />
                       </div>
                   )}
               
               </div>
               <div className="py-4 h-36 flex flex-col justify-center items-center">
                   <strong className="py-4 hover:text-red-500  transition-colors duration-300">{product.name}</strong>
                   <p className="flex my-4">{isStar(product.star)}</p>
                   <h3>{`${product.age}.00`}</h3>
               </div>
               <div className="item-image gap-y-5 flex flex-col">
                <div className="p-3 bg-black rounded-full">
                    <CiHeart  className="text-base  text-white"/>

                </div>
                <div className="p-3 bg-black rounded-full">

                    <FaRegImages className=" text-base text-white" />
                </div>
               </div>
                <div onClick={()=>clickBtnCart(index)} className=" btn-on absolute block  mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ">{`${btnCart}`}</div>
                
           </Link>
            ))} */}
            <Slider {...settings}>
            {
                productData && productData.data.map((product:any, index:number) => {
                    return(
                        
                            <Link key={index} href="#" className={`container h-[600px] rounded-2xl bg-slate-400 relative`}>
                                <div className="items-center">
                                    {
                                        product.attachment && (
                                             <Image 
                                                 className=" object-cover"
                                                 src={product.attachment}
                                                 alt="logo"
                                                 width={10}
                                                 height={10}
                                                 layout="responsive"
                                                 
                                             />
 
                                        )
                                    }
                                    {
                                        product.attachment2 && (
                                             <div className={`imagehover`}>
                                                 <Image
                                                     className=""
                                                     src={product.attachment2}
                                                     alt="hovered image"
                                                     width={10}
                                                     height={10}
                                                     layout="responsive"
                                                 />
                                             </div>
                                        )
                                    }
                                </div>
                                <div className="flex flex-col text-start gap-y-4 justify-end">
                                    <strong className="hover:text-red-500">{product.name}</strong>
                                    <strong className="flex ">{isStar(product.star)}</strong>
                                    <strong>{`${product.age}.00`}</strong>
                                </div>
                                <div className=" gap-y-5 flex flex-col">
                                     <div  className="p-3 item-image bg-white rounded-full">
                                           <CiHeart  className="text-base  text-black"/>

                                     </div>
                                 <div className="p-3 bg-white rounded-full item-image item-image-2">

                                      <FaRegImages className=" text-base text-black" />
                                  </div>
                              </div>
                              <div onClick={()=>clickBtnCart(index)} className=" btn-on  flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded ">{`${btnCart}`}</div>
                        
                        </Link>

                        
                        

                    )
                    
                    })}
                    </Slider>
            {/* </Slider> */}
           
        </div>
        
        </nav>
        
    );
}