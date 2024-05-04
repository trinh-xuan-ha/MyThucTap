import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type MenuItem = { name: string; href: string };
type SliderItem = {
  attachment: string;
  name: string;
  price: number;
};
type Props = {
  items?: MenuItem[];
  data?: SliderItem[];
  settings?: object;
};

export default function Submenu({ items, data, settings }: Props) {
  if (!items || items.length === 0) return null;

  const maxItemsPerColumn = 7;
  const numberOfColumns = Math.ceil(items.length / maxItemsPerColumn);

  const columns = Array.from({ length: numberOfColumns }, (_, i) =>
    items.slice(i * maxItemsPerColumn, (i + 1) * maxItemsPerColumn)
  );

  return (
    <div
      className={`bg-red-700 absolute top-full left-0 px-5 py-4 z-[99999] hidden group-hover/menu-parent:grid grid-cols-${
        numberOfColumns + 1
      }`}
    >
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col">
          {column.map((item) => (
            <Link className="capitalize" href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      ))}

      {data && (
        <div className="w-1/5">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="w-full">
                <div>
                  <Image
                    src={item.attachment}
                    alt="Slider image"
                    width={333}
                    height={33}
                    className="object-cover h-[21rem] w-[100%]"
                  />
                </div>
                <div className="flex flex-col text-left gap-y-2 mt-2">
                  <strong>{item.name}</strong>
                  <p>{`${item.price}$`}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
