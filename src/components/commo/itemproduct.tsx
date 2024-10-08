import Image from "next/image"
import { CiHeart } from "react-icons/ci";
import { FaRegImages } from "react-icons/fa";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/Cart/CartItem";

export default function Getitem() {
    const { whiteList, removeCartItem } = useShoppingContext();
    return (
        <div>  
            {whiteList && whiteList.length > 0 ? (
                whiteList.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))
            ) : (
                <p>you dont have any products yet</p>
            )}
        </div>
    )
}