import Link from "next/link";
import m1 from "../../../public/images/1.webp";
import m2 from "../../../public/images/2.webp";
import m3 from "../../../public/images/3.webp";
import m4 from "../../../public/images/4.webp";
import m5 from "../../../public/images/5.webp";
import m6 from "../../../public/images/6.webp";
import Image from "next/image";
export default function detailProduct() {
  return (
    <div className="border-t-2">
      <div className="w-3/5 mx-auto my-0">
        <div className="flex gap-x-1 py-4">
          <Link href={"/home"}>Home</Link>-<p>product detail</p>
        </div>
        <div className="detail">
          <div className="detailimg w-1/2 flex flex-col gap-y-3">
            <div className="w-full h-[840px]">
              <Image
                className="w-full h-full object-cover"
                src={m1}
                alt="error"
                width={100}
                height={100}
                quality={100}
              />
            </div>
            <div className="flex items-center gap-x-3 h-40">
              <Image
                className="h-full object-cover"
                src={m2}
                alt="error"
                width={100}
                height={100}
                quality={100}
              />
              <Image
                className="h-full object-cover"
                src={m3}
                alt="error"
                width={100}
                height={100}
                quality={100}
              />
              <Image
                className=" h-full object-cover"
                src={m4}
                alt="error"
                width={100}
                height={100}
                quality={100}
              />
              <Image
                className=" h-full object-cover"
                src={m5}
                alt="error"
                width={100}
                height={100}
                quality={100}
              />
              <Image
                className=" h-full object-cover"
                src={m6}
                alt="error"
                width={100}
                height={100}
                quality={100}
              />
            </div>
          </div>
          <div className="detaildescribe w-1/2">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
