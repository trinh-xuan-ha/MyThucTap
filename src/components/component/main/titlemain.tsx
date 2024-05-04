import { LiaShippingFastSolid } from "react-icons/lia";
import { RxIdCard } from "react-icons/rx";
import { GiReceiveMoney } from "react-icons/gi";
import { MdArrowRightAlt } from "react-icons/md";
import image1 from "../../../../public/images/19.webp";
import image2 from "../../../../public/images/20.webp";
import image3 from "../../../../public/images/21.webp";
import image4 from "../../../../public/images/22.webp";
import Image from "next/image";
import { Jost } from "next/font/google";
const jost = Jost({ subsets: ["latin"] });
export default function TitleMain() {
  const titles = [
    {
      logo: <LiaShippingFastSolid />,
      title: "FREE Shipping",
      policy:
        "All oder of $49 or more of eligible items across any  product category qualify",
    },
    {
      logo: <RxIdCard />,
      title: "CREDIT CARDS",
      policy: "We accept  Visa, American Express MasterCard, and Discover",
    },
    {
      logo: <GiReceiveMoney />,
      title: "RETURN POLICY ",
      policy:
        "You can return  your online order  within 30 days of receiving your order",
    },
  ];
  const products = [
    {
      isimage: image1,
      toppic: "SWIMWEAR",
      description:
        "Stand out from the Crowd Out Wide Range of Brand  and Style",
    },
    {
      isimage: image2,
      toppic: "JEANS SHORTS",
      description:
        "Stand out from the Crowd Out Wide Range of Brand  and Style",
    },
    {
      isimage: image3,
      toppic: "MEN'S SHOP",
      description:
        "Stand out from the Crowd Out Wide Range of Brand  and Style",
    },
    {
      isimage: image4,
      toppic: "BACK TO SCHOOL",
      description:
        "Stand out from the Crowd Out Wide Range of Brand  and Style",
    },
  ];
  return (
    <nav className="max-w-7xl flex items-center flex-col mx-auto mb-12">
      <div className="flex my-10">
        {titles.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center gap-x-4 ">
                <div className="flex-shrink-0 text-5xl wiggle-on-hover">
                  {item.logo}
                </div>
                <div className="ml-3">
                  <strong
                    className={`${jost.className} text-sm text-gray-900 dark:text-gray-100`}
                  >
                    {item.title}
                  </strong>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {item.policy}
                  </p>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>

      <div>
        <div className="flex gap-x-5">
          {products.map((product, index) => {
            return (
              <div key={index} className="w-1/4 rounded-2xl overflow-hidden">
                <Image
                  src={product.isimage}
                  alt="logo"
                  className=" w-full h-96 object-cover"
                />
                <div
                  className={`${jost.className} flex flex-col text-center bg-[rgb(242,242,242)] h-40 justify-center`}
                >
                  <div>
                    <strong className="">{product.toppic}</strong>
                    <p className="my-3">{product.description}</p>
                  </div>
                  <button
                    className={`transition-colors duration-300 delay-100 flex text-center justify-center items-center gap-x-2 hover:text-red-500`}
                  >
                    Shop now
                    <MdArrowRightAlt />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
