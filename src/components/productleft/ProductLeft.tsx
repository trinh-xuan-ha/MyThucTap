
import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { BsCheckCircle } from "react-icons/bs";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// Define the Product interface with expected properties
interface Product {
  image: string;
  author: string;
  from: string;
  name: string;
  time: string;
}

export default function ProductLeft() {
  // Use the Product interface to define the state type
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [productOpen, setProductOpen] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const query = await fetch("https://v1.appbackend.io/v1/rows/VgJoTTIy7QwQ");
        const response = await query.json();

        if (response && response.data) {
          const data: Product[] = response.data; // Cast to Product[]
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 3000);

    const productTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      setIsTransitioning(true);
    }, 8000);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(productTimer);
    };
  }, [currentIndex, products]);

  return (
    <>
      {productOpen && products.length > 0 && (
        <nav
          className={`fixed w-96 h-32 bottom-5 left-5 z-50  ${isTransitioning ? "transitioning" : ""}`}
        >
          <div className="bg-white h-full rounded-md shadow-inner border-2">
            <p
              className="absolute top-2 right-2 hover:text-red-500 duration-500 cursor-pointer"
              onClick={() => setProductOpen(false)}
            >
              <IoClose />
            </p>
            {products.length > 0 && (
              <div className="product h-full w-full py-2 pl-2 pr-8">
                <div className="w-1/3 h-full">
                  <Image
                    className="w-full h-full object-cover"
                    src={products[currentIndex].image}
                    alt="logo"
                    width={500}
                    height={100}
                  />
                </div>
                <div className="py-2 flex flex-col text-left gap-y-4">
                  <div className="flex text-center gap-x-2">
                    <p>{products[currentIndex].author}</p>
                    <p>-</p>
                    <p>{products[currentIndex].from}</p>
                  </div>
                  <strong className="flex gap-x-2 text-center items-center">
                    {products[currentIndex].name}
                    <div>
                      <FaEye />
                    </div>
                  </strong>
                  <div className="flex gap-x-3 text-center items-center">
                    <div className="flex gap-x-1 items-center">
                      <IoMdTime />
                      <p>{products[currentIndex].time}</p>
                    </div>
                    <div className="flex gap-x-1 text-center items-center text-green-400">
                      <BsCheckCircle />
                      <p>verified</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      )}
       <style jsx>{`
        .product-container {
          overflow: hidden;
        }

        .product {
          display: flex;
          gap: 2rem;
        }

        .transitioning {
          animation: moveProduct 1.5s forwards;
        }

        @keyframes moveProduct {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}