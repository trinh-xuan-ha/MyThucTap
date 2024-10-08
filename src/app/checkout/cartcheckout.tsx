import { formatCurrency } from "@/helpers/common";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import Image from "next/image";

export default function CartCheckout() {
  const { cartItems } = useShoppingContext();
  return (
    <div className="flex flex-col gap-y-6">
      {cartItems.map((item) => {
        const { id, avatar, qty, name, size, price, color } = item;
        return (
          <div key={id} className="flex items-center w-full gap-x-3 p-3">
            <div className="relative">
              <Image
                className="border-2 rounded-md"
                src={avatar}
                alt="error"
                width={50}
                height={50}
                quality={100}
              />
              <p className="absolute -top-3 -right-2 h-5 w-5 bg-[#666666] rounded-full flex items-center justify-center text-white">
                {qty}
              </p>
            </div>
            <div className="flex flex-col flex-grow">
              <p>{name}</p>
              <div className="flex items-center gap-x-1">
                <p>{color}</p>/<p>{size}</p>
              </div>
            </div>
            <strong>{formatCurrency(price * qty)}</strong>
          </div>
        );
      })}
    </div>
  );
}
