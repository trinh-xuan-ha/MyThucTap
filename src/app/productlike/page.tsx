"use client"
import Getitem from "@/components/commo/itemproduct";
import ItemLike from "@/app/productlike/itemLike";
import CartCheckout from "@/app/checkout/cartcheckout";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import CartItem from "@/components/Cart/CartItem";

export default function ProductLike() {
    const {whiteList} = useShoppingContext()

    return (
        <div>
            <div className="w-[1290px] my-0 mx-auto">
                <div className="flex items-center justify-center my-5">
                    <h2>home</h2>
                </div>
                <div className="grid grid-cols-4 gap-4 my-4">
                   {whiteList && whiteList.length > 0 ? (
                        whiteList.map((item) => (
                            <ItemLike key={item.id} {...item} />
                        ))

                   ) : (
                    <p>you dont have</p>
                   )}
                </div>
            </div>
        </div>
    )
}