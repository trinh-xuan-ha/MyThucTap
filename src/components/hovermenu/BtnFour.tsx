import Link from "next/link";
export default function HvOther() {
  return (
    <div className="w-[270px] border-2 border-[#e7e8eb] bg-white z-[999] hoverbtn4 absolute top-full hidden  group-hover/menu-parent:block">
      <div className="flex gap-x-2 w-full my-0 mx-auto py-5">
        <div className="">
          <ul className=" flex flex-col gap-y-4 text-left pl-4">
            <li>
              <Link href={"#"}>404 Error</Link>
            </li>
            <li>
              <Link href={"#"}>About Us</Link>
            </li>
            <li>
              <Link href={"#"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"#"}>FAQs Us</Link>
            </li>
            <li>
              <Link href={"#"}>Store Direction Page</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
