import { IoTrashOutline } from "react-icons/io5";
import Image from "next/image";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import { formatCurrency } from "@/helpers/common";
type CartItemProps = {
  id: number;
  name: string;
  avatar: string;
  price: number;
  qty: number;
  size: string;
  color: string;
};
export default function CartItem({
  id,
  name,
  price,
  qty,
  avatar,
  size,
  color,
}: CartItemProps) {
  const { increaseQty, decreaseQty, removeCartItem } = useShoppingContext();
  return (
    <div className="relative p-3 flex items-center gap-x-6 border-2">
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 p-2 bg-[#e9e9e9] cursor-pointer rounded-full z-[9999]"
        onClick={() => 
          removeCartItem(id)}
      >
        <IoTrashOutline />
      </div>
      {avatar ? (
        <Image
          className="w-20 h-full object-cover"
          src={avatar}
          alt="Product Image"
          width={100}
          height={100}
          quality={100}
        />
      ) : (
        <div className="w-20 h-full bg-gray-200 flex justify-center items-center">
          <p>No Image</p>
        </div>
      )}
      <div className="">
        <strong>{name}</strong>
        <div className="flex item-center gap-x-1">
          <p className="text-red-500">{color}</p>
          <p className="uppercase">{size}</p>
        </div>
      </div>
      <strong>{formatCurrency(price)}</strong>
      <div className="flex gap-x-4 cursor-pointer items-center justify-center">
        <p className="h-8 w-8 font-bold text-lg border-2 flex items-center justify-center bg-slate-100 " onClick={() => decreaseQty(id)}>
          -
        </p>
        <p>{qty}</p>
        <p className="h-8 w-8 font-bold text-lg border-2 flex items-center justify-center bg-slate-100 " onClick={() => increaseQty(id)}>
          +
        </p>
      </div>
      <strong>{formatCurrency(qty * price)}</strong>
    </div>
  );
}
