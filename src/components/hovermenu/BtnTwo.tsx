import Image from "next/image";
import Link from "next/link";
import Myimage from "../../../public/images/35.webp";

export default function HvCollections() {
  return (
    <div className="w-full border-2 border-[#e7e8eb] bg-white left-0  absolute top-full hidden  group-hover/menu-parent:block z-[999]">
      <div className="flex gap-x-2 w-[1510px] my-0 mx-auto py-5">
        <div className="w-3/4 flex">
          <ul className="w-1/4 flex flex-col gap-y-4 text-left">
            <strong className="mb-3">COOLECVTION PAGE</strong>
            <li>
              <Link href={"/women"}>Collection Left Sidear</Link>
            </li>
            <li>
              <Link href={"#"}>Collection Right Sidebar</Link>
            </li>
            <li>
              <Link href={"#"}>Collection Top Sidebar</Link>
            </li>
            <li>
              <Link href={"#"}>Collection Without Sidebar</Link>
            </li>
            <li>
              <Link href={"#"}>Collection Deals</Link>
            </li>
          </ul>
          <ul className=" w-1/4 flex flex-col gap-y-4 text-left">
            <strong className="mb-3">COOLECVTION PAGE</strong>
            <li>
              <Link href={"#"}>Collection Canvas On Left</Link>
            </li>
            <li>
              <Link href={"/women"}>Collection Canvas On Top</Link>
            </li>
            <li>
              <Link href={"#"}>Collection Canvas On Bottom</Link>
            </li>
            <li>
              <Link href={"#"}>Collection Full Width</Link>
            </li>
          </ul>
          <ul className="w-1/4 flex flex-col gap-y-4 text-left">
            <strong className="mb-3">COOLECVTION PAGE</strong>
            <li>
              <Link href={"#"}>Numbered Pagination</Link>
            </li>
            <li>
              <Link href={"#"}>Load More Button</Link>
            </li>
            <li>
              <Link href={"#"}>Infinity Scroll Load More</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4 ">
          <Image
            className="object-cover"
            src={Myimage}
            alt="logo"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
