import { IoTrashOutline } from "react-icons/io5";
import Image from "next/image";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import { formatCurrency } from "@/helpers/common";
import { CiHeart } from "react-icons/ci";
import { FaRegImages } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type CartItemProps = {
  id: number;
  name: string;
  avatar: string;
  price: number[];
};
export default function ItemLike({
  id,
  name,
  price,
  avatar,
}: CartItemProps) {
  const { removeLikeItem } = useShoppingContext();
  return (
    <Link className="w-full h-full relative group"
      href={`/singleproduct/${id}`}>
      <div >
        {avatar ? (
          <Image
            className="w-full h-4/5 object-cover"
            src={avatar[0]}
            alt="Product Image"
            width={500}
            height={500}
            quality={100}
          />
        ) : (
          <div className="w-20 h-full bg-gray-200 flex justify-center items-center">
            <p>No Image</p>
          </div>
        )}
      </div>
      <div className="gap-y-5 flex flex-col absolute -right-1 top-5 cursor-pointer">
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            removeLikeItem(id);

          }}
          className="rounded-full relative size-10 bg-black text-white text-2xl  flex justify-center items-center opacity-0 duration-500 ease-linear group-hover:-translate-x-3 group-hover:opacity-100"
        >
          <CiHeart className="text-xl absolute transition-colors duration-500 ease-linear " />
        </Button>
        <Button
          className="rounded-full relative size-10 bg-white flex justify-center items-center opacity-0 hover:bg-black duration-500 ease-linear group-hover:-translate-x-3 group-hover:opacity-100">
          <FaRegImages
           className="text-xl absolute transition-colors duration-500 ease-linear peer-hover:text-white text-black" />
        </Button>
      </div>
      <div className="flex flex-col gap-y-3 my-2">
        <strong>{name}</strong>
        <strong>{formatCurrency(price[0])}</strong>
      </div>
    </Link>
  );
}
