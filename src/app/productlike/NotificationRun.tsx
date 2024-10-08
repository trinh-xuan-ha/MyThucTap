import { HiOutlineBellAlert } from "react-icons/hi2";
import Image from "next/image";
import logo from '../../../public/images/10.webp';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import ItemLike from "@/app/productlike/itemLike";

type isOnclose = {
    onClose: () => void;
    isVisible: boolean;
    product: CartItemProps | null;
};
type CartItemProps = {
    id: number;
    name: string;
    avatar: string;
    price: number;
    color: string;
    size: string;
};
export default function NotificationRun({ onClose, isVisible, product }: isOnclose) {
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(0);
    const { whiteList } = useShoppingContext()


    useEffect(() => {
        let timer: NodeJS.Timeout;
        let interval: NodeJS.Timeout;

        if (isVisible) {
            setShow(true);
            setProgress(0);
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 1; // Cập nhật mỗi 50ms để đạt 100% trong 5 giây
                });
            }, 50);

            timer = setTimeout(() => {
                setShow(false);
                setTimeout(onClose, 500); // Delay để khớp với thời gian chuyển động
            }, 5000);
        } else {
            setShow(false);
        }

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [isVisible, onClose]);
    if (!product) {
        return null;
    }

    return (
        <div className={`fixed bg-white  flex flex-col z-100 h-32 overflow-hidden  w-96 bottom-20 transform transition-all duration-1000 shadow-md ${show ? "right-5 opacity-100" : "-right-96 opacity-100"}`}>
            <div className="h-1/5 flex gap-x-2 relative items-center bg-red-500 text-white ">
                <HiOutlineBellAlert className="ml-2" />
                <strong className="uppercase">trinh xuan ha</strong>
                <div style={{ width: `${progress}%`, transition: 'width 50ms linear' }} className="absolute h-1 bottom-0 w-full bg-red-200">
                </div>
            </div>
            <div className="flex h-4/5 w-full justify-between py-1 px-1 items-center">
                <div className="w-1/4 h-full">
                    {product.avatar ? (
                        <Image
                            className="w-full h-full object-cover"
                            src={product.avatar}
                            alt="Product Logo"
                            height={200}
                            width={200}
                            quality={100}
                        />
                    ) : (
                        <p>No Image</p>
                    )}
                </div>
                <p className="font-bold text-xs">{product.name}</p>
                <Button className="items-">
                    Go to wishlist
                </Button>
            </div>
        </div>
    );
}