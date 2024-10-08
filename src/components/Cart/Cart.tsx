import { IoCloseSharp } from "react-icons/io5";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/Cart/CartItem";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import { formatCurrency } from "@/helpers/common";
import Link from "next/link";

type isOnclose = {
  onClose: () => void;
}
export default function Cart({ onClose }: isOnclose) {
  const [activeLink, setActiveLink] = useState(0);
  const [clothingItemsCart, setClothingItemsCart] = useState([]);
  const { cartItems, totalPrice } = useShoppingContext();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-login");
    btns.forEach((btn, index) => {
      if (index === activeLink) {
        btn.classList.add("activelogin");
      } else {
        btn.classList.remove("activelogin");
      }
    });
  }, [activeLink]);

  useEffect(() => {
    const fetData = async () => {
      try {
        const response = await fetch("http://localhost:3000/SimilarProducts");
        const data = await response.json();
        setClothingItemsCart(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetData();
  }, []);
  return (
    <nav
      className="modal-container z-50 fixed left-0 top-0 w-full h-full flex items-center justify-center bg-slate-700/30"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="z-50 relative bg-white rounded-md p-8 w-[1000px]">
        <p
          onClick={() => onClose()}
          className="absolute top-[-20px] right-[-26px] p-2 hover:bg-slate-300 rounded-full cursor-pointer"
        >
          <IoCloseSharp />
        </p>
        <nav className="">
          <div className="rounded-md p-2">
            <div className="p-3 ">
              <div className="inline-flex items-center justify-start gap-x-7 pb-5">
                <h3 className="font-bold">YOUR ORDER</h3>
                <p>THERE ARE 2 ITEM(S) IN YOUR CART</p>
              </div>
              <div className="flex gap-x-8 overflow-visible relative">
                <div className="w-2/3">
                  <div className="py-4 border-2 pl-4 pr-5 text-green-500 rounded-md bg-green-100">
                    Rick & Morty T-shirt-DeepSkyBlue / xxl - has been added to
                    the shopping cart.
                  </div>
                  <div className="h-[184px] -ml-7 pl-7 overflow-y-auto my-4">
                    {cartItems && cartItems.length > 0 ? (
                      cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                      ))
                    ) : (
                      <p>You don`t have any products yet</p>
                    )}
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="py-4 border-b-2 flex items-center justify-between">
                    <strong className="uppercase">TOTAL</strong>
                    <strong>{formatCurrency(totalPrice)}</strong>
                  </div>
                  <div className="my-4 flex flex-col gap-y-3">
                    <Button
                      className="uppercase w-full bg-[#e7e8eb]  text-center"
                      variant={"secondary"}
                    >
                      VIEW CART
                    </Button>
                    <Button
                      className="uppercase w-full bg-[#e7e8eb]  text-center"
                      variant={"secondary"}
                    >
                      CONTINUE
                    </Button>
                  </div>
                  <form className="flex gap-x-2 my-7 items-center">
                    <input
                      checked={active}
                      onChange={(e) => setActive(e.target.checked)}
                      type="checkbox" className="h-4 w-4 bg-red-500 cursor-pointer" />
                    <label className="flex items-center gap-x-1">
                      I Agree with the
                      <strong>Terms & conditios</strong>
                    </label>
                  </form>
                  <Button
                  onClick={() => onClose()}
                    className={`w-full uppercase text-center ${active ? 'bg-[#e7e8eb] text-black hover:text-white hover:bg-black' : 'bg-[#e7e8eb] opacity-30 text-[#3f4045]'}`}
                    disabled={!active}
                  >
                    <Link href={active ? "/checkout" : "#!"}>PROCEED TO CHECKOUT</Link>
                  </Button>
                </div>
              </div>
              <div className="border-t-2 my-5 flex flex-col gap-y-4">
                <strong className="mt-5 uppercase">
                  you may also like these products
                </strong>
                <div className="flex  gap-x-2 w-full my-4">
                  {clothingItemsCart.map((item: any) => (
                    <div key={item.id} className="w-1/5 group relative ">
                      <Image
                        className="w-full object-cover"
                        src={item.avatar}
                        alt="error"
                        width={100}
                        height={100}
                      />
                      {item.avatarHover && (
                        <Image
                          className="absolute w-full inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          src={item.avatarHover}
                          alt="error"
                          width={100}
                          height={100}
                        />
                      )}
                      <div className="flex flex-col items-center justify-center">
                        <strong className="text-center uppercase">{item.name}</strong>
                        <strong>{formatCurrency(item.price)}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}
