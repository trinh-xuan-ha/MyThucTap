'use client'
import Image from "next/image";
import Link from "next/link";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { useShoppingContext } from "@/app/contexts/ShoppingContext";
import { Button } from "@/components/ui/button";
import { FC, useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import urlVisa from "../../../../public/images/OIP (1).jpg";
import urlMaster from "../../../../public/images/Mastercard-Logo-1979.png"
import urlVietnam from "../../../../public/images/ha.jpg"
import urlPaypal from "../../../../public/images/R.png"
import urlClub from "../../../../public/images/og__dq5nejr4bg02_image-864x454.webp"
import urlDiscover from "../../../../public/images/OIP.jpg"
import { formatCurrency } from "@/helpers/common";
import TabContent from "@/app/singleproduct/[id]/tabContent";
import Cart from "@/components/Cart/Cart";

interface ClothingItem {
  id: number;
  name: string;
  price: number[];
  avatar: string[];
  avatarHover?: string;
  start: number;
  color: string[];
  size: string[];
  description: string;
  selectedSizeIndex: number;
  selectedColorIndex: number;
}
type ProductItem = {
  id: number;
  name: string;
  price: number;
  size: string;
  avatar: string;
  color: string;
  description: string;
};

interface PageProps {
  params: { id: number; name: string };
}

const Page: FC<PageProps> = ({ params }) => {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const [qty, setQty] = useState(1);
  const [openCart, setOpenCart] = useState(false);
  const { increaseQty, decreaseQty } = useShoppingContext();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addCartItem, cartItems } = useShoppingContext();

  const myUrl = [
    urlVisa,
    urlMaster,
    urlVietnam,
    urlPaypal,
    urlClub,
    urlDiscover
  ]

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/clothes");
      const data: ClothingItem[] = await response.json();
      setClothingItems(
        data.map((item) => ({
          ...item,
          selectedSizeIndex: 0,
          selectedColorIndex: 0,
        }))
      );

    };
    fetchData();
  }, []);
  const handleAddToCart = (item: ClothingItem) => {
    const selectedPrice = item.price[item.selectedSizeIndex];
    const selectedSize = item.size[item.selectedSizeIndex];
    const selectedColor = item.color[item.selectedColorIndex];
    const selectedAvatar = item.avatar[item.selectedColorIndex];

    const productToAddToCart: ProductItem = {
      id: item.id,
      name: item.name,
      price: selectedPrice,
      size: selectedSize,
      avatar: selectedAvatar,
      color: selectedColor,
      description: item.description,
      qty: qty,
    } as ProductItem;
    addCartItem(productToAddToCart);
    setOpenCart(true);
  };
  const handleColorClick = (index: number) => {
    if (currentItem) {
      setSelectedColor(currentItem.color[index]);
      setSelectedImage(currentItem.avatar[index]);
      setClothingItems(prevItems => {
        const updatedItems = [...prevItems];
        const selectedItemIndex = updatedItems.findIndex(item => item.id === currentItem.id);
        if (selectedItemIndex !== -1) {
          updatedItems[selectedItemIndex].selectedColorIndex = index;
        }
        return updatedItems;
      });
    }
  };
  const handlePriceClick = (index: number) => {
    if (currentItem) {
      setSelectedSize(currentItem.size[index]);
      setSelectedPrice(currentItem.price[index]);
      setClothingItems(prevItems => {
        const updatedItems = [...prevItems];
        const selectedItemIndex = updatedItems.findIndex(item => item.id === currentItem.id);
        if (selectedItemIndex !== -1) {
          updatedItems[selectedItemIndex].selectedSizeIndex = index;
        }
        return updatedItems;
      });
    }
  };
  const currentItem = clothingItems.find(item => item.id === params.id);

  const handleIncreaseQty = () => {
    setQty(qty + 1);
    increaseQty(params.id);
  };

  const handleDecreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      decreaseQty(params.id);
    }
  };

  const isStar = (number: number) => {
    const max = 5;
    const ArryStars = [];
    let star1 = number;
    let star2 = 0;
    if (number <= max) {
      star1 = number;
      star2 = max - number;
    }
    for (let i = 0; i < star1; i++) {
      ArryStars.push(<MdOutlineStar key={i} />);
    }
    for (let i = 0; i < star2; i++) {
      ArryStars.push(<MdOutlineStarBorder key={i} />);
    }
    return ArryStars;
  };

  if (!currentItem) return null;

  return (
    <div className="w-[1290px] my-0 mx-auto">
      <div className="my-2">
      <Link href="/">Home</Link> - {currentItem.name}
      </div>
      <div className="flex gap-x-12 ">
        <div className="w-1/2 flex flex-col gap-y-2">
          <Image
            // data-f={`${currentItem.avatar[0]}`}
            className="w-full thumb"
            // src={currentItem.avatar[0]}
            src={selectedImage || currentItem.avatar[0]}
            alt={currentItem.name}
            width={500}
            height={500}
            quality={100} />
          <div className="grid grid-cols-4 gap-x-2 w-full">
            {currentItem.avatar.map((url: string, index: number) => (
              <Image
                onClick={() => handleColorClick(index)}
                className={`w-full cursor-pointer ${index === currentItem.selectedColorIndex ? 'border-b-4 border-red-500' : ''}`}
                key={index}
                src={url}
                alt={`Preview ${index}`}
                width={80}
                height={100}
                quality={100} />
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-y-5">
          <h2 className="font-bold text-2xl">{currentItem.name}</h2>
          <div className="flex gap-x-4 items-center">
            <h2 className="flex"> {isStar(currentItem.start)} </h2>
            <p className="text-[#a4a5a8] text-xs font-bold uppercase">5 REVIEWS</p>
            <span className="uppercase font-bold hover:text-red-500 text-xs">VIEW ALL REVIEWS</span>
          </div>
          <h2 className="font-bold text-2xl">{formatCurrency(selectedPrice || currentItem.price[0])}</h2>
          <p className="text-sm">Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard. The real mother of pearl buttons and embroidered crocodile complete its elegant appeal.Lorem ipsum...</p>
          <div className="flex flex-col gap-y-3">
            <p className="text-xs font-bold uppercase">Color: {selectedColor || currentItem.color[0]}</p>
            <div className="flex gap-x-1">
              {
                currentItem.color.map((color: string, index: number) => (
                  <Button
                    onClick={() => handleColorClick(index)}
                    data-img={`${currentItem.avatar[index]}`} 
                    key={index} 
                    className={`btn-url w-10 h-10 border-2 p-2 bg-${color}-500 rounded-full flex hover:bg-${color} hover:bg-opacity-50 justify-center items-center ${index === currentItem.selectedColorIndex ? 'btn-toggle' : ''}`}>
                  </Button>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-xs font-bold uppercase">Size: {selectedSize || currentItem.size[0]}</p>
            <div className={`flex flex-wrap gap-2`}>
              {currentItem.size.map((size, index) => (
                <Button
                  onClick={() => handlePriceClick(index)}
                  key={index} className={`bg-white hover:bg-black hover:text-white text-black w-12 h-12 ${index === currentItem.selectedSizeIndex ? 'bg-black text-white' : ''}`}>{size}</Button>
              ))}
            </div>
          </div>
          <div className="flex my-5 gap-x-2">
            <div className="flex items-center justify-between w-32 h-14 p-2 border-2 rounded-lg">
              <button className="h-full w-1/3 hover:text-red-500" onClick={handleDecreaseQty}>-</button>
              {qty}
              <button className="h-full w-1/3 hover:text-red-500" onClick={handleIncreaseQty}>+</button>
            </div>
            <Button
              onClick={() => handleAddToCart(currentItem)}
              className="h-14 w-full bg-slate-100 text-black hover:bg-black hover:text-white">Add to Bag</Button>
          </div>
          <Button
            className="w-full h-14 hover:bg-red-500 ">
            <Link href={"/checkout"}>Buy It Now</Link>
          </Button>
          <div className="flex flex-col gap-y-6 ">
            <p className="border-t-2 py-4 mt-6"></p>
            <p className="uppercase font-bold text-xs inline-block pt-2">quaranteed safe checkout:</p>
            <div className="flex gap-x-2">
              {
                myUrl.map((url: any, index: number) => (
                  <Image
                    className={` w-24 h-10 object-cover mix-blend-multiply p-2 border-2`}
                    key={index}
                    src={url}
                    alt={`Preview ${index}`}
                    width={80}
                    height={10}
                    quality={100} />
                ))
              }
            </div>
          </div>
          <div className="flex flex-col gap-y-3 mt-5 text-xl">
            <div className="flex gap-x-3 items-center capitalize text-sm font-medium">
              <GoClock className="text-xl" />
              Orders ship within 5 to 10 business days
            </div>
            <div className="flex gap-x-3 items-center capitalize text-sm font-medium">
              <LiaShippingFastSolid className="text-xl" />
              Hoorey ! This item ships free to the US
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-x-8 h-14 items-center mb-3 border-b-2 mt-6">
          <h2
            className={`font-bold uppercase text-xl flex items-center  hover:text-black cursor-pointer h-full border-black relative ${activeTab === 'description' ? 'text-black border-b-4' : 'text-[#a8a8a8]'}`}
            onClick={() => setActiveTab('description')}
          >
            description
          </h2>
          <h2
            className={`font-bold uppercase text-xl flex items-center  cursor-pointer hover:text-black h-full border-black relative ${activeTab === 'delivery' ? 'text-black border-b-4' : 'text-[#a8a8a8]'}`}
            onClick={() => setActiveTab('delivery')}
          >

            delivery policy
          </h2>
          <h2
            className={`font-bold uppercase text-xl flex items-center  hover:text-black cursor-pointer h-full border-black relative ${activeTab === 'shipping' ? 'text-black border-b-4' : 'text-[#a8a8a8]'}`}
            onClick={() => setActiveTab('shipping')}
          >

            shipping & return
          </h2>
          <h2
            className={`font-bold uppercase text-xl flex items-center  hover:text-black cursor-pointer h-full border-black relative ${activeTab === 'custom' ? 'text-black border-b-4' : 'text-[#a8a8a8]'}`}
            onClick={() => setActiveTab('custom')}
          >

            custom tab
          </h2>
        </div>

        <TabContent activeTab={activeTab} currentItem={currentItem.description} />
        <p className="border-t-2 absolute w-full left-0 right-0"></p>
        <div className="flex  items-center gap-x-20 justify-between">
          <div className="py-10 flex gap-x-14 items-center justify-between">
            <div className="flex gap-x-3">
              <div className="bg-slate-200 h-20 w-20 rounded-full flex items-center justify-center">
                <LiaShippingFastSolid className="text-4xl" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="uppercase font-bold text-xs inline-block pt-2">FREE shipping</p>
                <p className="text-[#a4a5a8]">free shipping order abouve $200</p>
                <p>Learn More</p>

              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="bg-slate-200 h-20 w-20 rounded-full flex items-center justify-center">
                <LuPhoneCall className="text-4xl" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="uppercase font-bold text-xs inline-block pt-2">support 24/7</p>
                <p className="text-[#a4a5a8]">Contact us 24 hours a day, 7days a week</p>
                <p>Learn More</p>

              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="bg-slate-200 h-20 w-20 rounded-full flex items-center justify-center">
                <RiMoneyDollarCircleLine className="text-4xl" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="uppercase font-bold text-xs inline-block pt-2">7 days return</p>
                <p className="text-[#a4a5a8]">Return it within 30 days for an exchange</p>
                <p>Learn More</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </div>
  );
};

export default Page;
