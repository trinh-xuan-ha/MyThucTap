"use client"
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const textRender = [
    {
        title: "Best purchase I've made this winter! The color and knitting are exquisite and it's so comfy! went from NYC to Miami without ever taking it off. Super cute!!",
        author: "Christina M. - From Canada",

    },
    {
        title: "Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!!",
        author: "David Jame. - From America",

    },
    {
        title: "trĩnh âu hà",
        author: "Christina M. - From Canada",

    }
];
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
export default function Testimonial() {
    return (
        <div className='max-w-7xl my-0 mx-auto'>
            <div className='text-center my-9'>
                <h3>TESTIMONIAL</h3>
            </div>
            <div className="testimonial-item">
                <Slider {...settings}>
                    {
                        textRender.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p className='text-center my-5 px-36'><strong>{item.title}</strong></p>
                                    <div className='text-center'>
                                        <p className='p-4 bg-[#f2f2f2] rounded-2xl inline-block hover:text-red-500'>{item.author}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>

        </div>
    );
}





