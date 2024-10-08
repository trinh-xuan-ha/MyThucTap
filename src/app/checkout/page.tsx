"use client";
import React, { useState, useEffect } from "react";
import imgvisa from "../../../public/images/OIP (1).jpg";
import imgMaterCart from "../../../public/images/Mastercard-Logo-1979.png";
import imgdiscover from "../../../public/images/OIP.jpg";
import Image, { StaticImageData } from "next/image";
import { CiLock } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import { formatCurrency } from "@/helpers/common";
import CartCheckout from "@/app/checkout/cartcheckout";
import Account from "@/components/login/Account";

type MyTmageProps = {
  src: string | StaticImageData;
  alt: string;
};
const MyImage = (img: MyTmageProps) => {
  return (
    <div className="border-2">
      <Image
        className="object-cover"
        src={img.src}
        height={30}
        width={30}
        alt={img.alt}
      />
    </div>
  );
};
const myTaxes = (total: number) => {
  const tax = total * 0.37;
  return Math.round(tax);
};
function myTotal(total: number, shipping: number, taxes: number) {
  const alltptal = total + shipping + taxes;
  return alltptal;
}
export default function CheckOut() {
  const [country, setCountry] = useState("--Country--");
  const [countryitems, setCountryitems] = useState([]);
  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);
  const { totalPrice } = useShoppingContext();
  const [accountOpen, setAccountOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/countries");
        const data = await response.json();
        setCountryitems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handleButtonClick = () => {
    setAccountOpen(false);
  };
  return (
    <nav>
      <div className="w-[1320px] my-0 mx-auto flex">
        <div className="from w-1/2">
          <form className="p-3 flex flex-col gap-y-3">
            <div className="contact flex flex-col gap-y-2 ">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">Contact</h2>
                <p 
                onClick={() => {
                  setAccountOpen(true);
                }}
                className="text-sky-400 underline cursor-pointer">
                  Login
                </p>
                {accountOpen && <Account onClose={handleButtonClick} />}
              </div>
              <input
                type="text"
                className="p-2 w-full border-2 rounded-md"
                placeholder="Email or mobie phone number"
              />
              <div className="flex gap-x-2">
                <input type="checkbox" />
                <label htmlFor="">Email me with news and offers</label>
              </div>
            </div>
            <div className="delivery flex flex-col gap-y-3">
              <h2 className="font-bold">Delivery</h2>
              <select className="border-2 rounded-md p-2 w-full" id={country}>
                <option value="">--Country--</option>
                {countryitems.map((item: any) => (
                  <option key={item.id}>{item.name}</option>
                ))}
              </select>
              <div className="flex gap-x-2">
                <input
                  type="text"
                  className="p-2 w-1/2 border-2 rounded-md"
                  placeholder="First Name (optional)"
                />
                <input
                  type="text"
                  className="p-2 w-1/2 border-2 rounded-md"
                  placeholder="Last Name"
                />
              </div>
              <input
                className="w-full border-2 p-2"
                type="text"
                placeholder="Address"
              />
              <input
                className="w-full border-2 p-2"
                type="text"
                placeholder="Apartment, suite, etc, (optionnal)"
              />
              <div className="flex gap-x-2">
                <input
                  type="text"
                  className="p-2 w-1/2 border-2 rounded-md"
                  placeholder="City"
                />
                <input
                  type="text"
                  className="p-2 w-1/2 border-2 rounded-md"
                  placeholder="Postal code"
                />
              </div>
              <div className="flex gap-x-2">
                <input type="checkbox" />
                <label htmlFor="">Save this information for next time</label>
              </div>
            </div>
            <div className="shipping method relative">
              <h2 className="font-bold">Shipping method</h2>
              <div className="relative p-5 w-full border-2 rounded-md bg-[#f0f5ff] border-[#78add3]">
                <p className="absolute top-1/2 left-2 -translate-y-1/2">
                  Standard Shipping
                </p>
                <strong className="absolute top-1/2 right-2 -translate-y-1/2">
                  $10.00
                </strong>
              </div>
            </div>
            <div className="payment">
              <h2 className="font-bold">Payment</h2>
              <p>All transactions are secure and encrypted.</p>
              <div className="bg-[#e3e3e3] rounded-md overflow-hidden gap-y-2 flex flex-col">
                <div className="relative p-5 w-full border-2  bg-[#f0f5ff] border-[#78add3] rounded-t-md">
                  <p className="absolute top-1/2 left-2 -translate-y-1/2">
                    Standard Shipping
                  </p>
                  <div className="absolute top-1/2 right-2 -translate-y-1/2">
                    <div className="flex gap-x-3">
                      <MyImage src={imgvisa} alt="visa" />
                      <MyImage src={imgMaterCart} alt="visa" />
                      <MyImage src={imgdiscover} alt="visa" />
                    </div>
                  </div>
                </div>
                <div className="p-2 rounded-md flex flex-col gap-y-2">
                  <div className="relative">
                    <input
                      type="text"
                      className="p-2 border-2  rounded-md w-full"
                      placeholder="Cart Number"
                    />
                    <p className="absolute top-1/2 right-2 -translate-y-1/2">
                      <CiLock />
                    </p>
                  </div>
                  <div className="flex gap-x-2 relative">
                    <input
                      type="text"
                      className="p-2 w-1/2 border-2 rounded-md"
                      placeholder="First Name (optional)"
                    />
                    <input
                      type="text"
                      className="p-2 w-1/2 border-2 rounded-md "
                      placeholder="Last Name"
                    />
                    <p className="absolute top-1/2 right-2 -translate-y-1/2">
                      <HiOutlineQuestionMarkCircle />
                    </p>
                  </div>
                  <input
                    type="text"
                    className="p-2 border-2  rounded-md w-full"
                    placeholder="Cart Number"
                  />
                  <div className="flex gap-x-2">
                    <input
                      type="checkbox"
                      checked={isBillingSameAsShipping}
                      onChange={(e) =>
                        setIsBillingSameAsShipping(e.target.checked)
                      }
                    />
                    <label htmlFor="">
                      Use shipping address as billing address
                    </label>
                  </div>
                  {!isBillingSameAsShipping && (
                    <div className="billing adddress flex flex-col gap-y-3">
                      <h2 className="font-bold">Billing address</h2>
                      <select
                        className="border-2 rounded-md p-2 w-full"
                        id={country}
                      >
                        <option value="">--Country--</option>
                        {countryitems.map((item: any) => (
                          <option key={item.id}>{item.name}</option>
                        ))}
                      </select>
                      <div className="flex gap-x-2">
                        <input
                          type="text"
                          className="p-2 w-1/2 border-2 rounded-md"
                          placeholder="First Name (optional)"
                        />
                        <input
                          type="text"
                          className="p-2 w-1/2 border-2 rounded-md"
                          placeholder="Last Name"
                        />
                      </div>
                      <input
                        className="w-full border-2 p-2"
                        type="text"
                        placeholder="Address"
                      />
                      <input
                        className="w-full border-2 p-2"
                        type="text"
                        placeholder="Apartment, suite, etc, (optionnal)"
                      />
                      <div className="flex gap-x-2">
                        <input
                          type="text"
                          className="p-2 w-1/2 border-2 rounded-md"
                          placeholder="City"
                        />
                        <input
                          type="text"
                          className="p-2 w-1/2 border-2 rounded-md"
                          placeholder="Postal code"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Button className="bg-[#1773b0] py-7 font-bold">Pay Now</Button>
          </form>
        </div>
        <div className="product w-1/2 border-l-2">
          <div className="p-4">
            <CartCheckout />
            <div className="mt-6 flex flex-col gap-y-2">
              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <strong>{formatCurrency(totalPrice)}</strong>
              </div>
              <div className="flex items-center justify-between">
                <p>Shipping</p>
                <strong>{formatCurrency(10)}</strong>
              </div>
              <div className="flex items-center justify-between">
                <p>Estimated taxes</p>
                <strong>{formatCurrency(myTaxes(totalPrice))}</strong>
              </div>
              <div className="flex items-center justify-between">
                <strong>Total</strong>
                <strong>
                  {formatCurrency(myTotal(totalPrice, myTaxes(totalPrice), 10))}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
