import Link from "next/link"
export default function HvBlog() {
    return (
        <div className="w-[270px] border-2 border-[#e7e8eb] bg-white z-[999] hoverbtn5 absolute top-full hidden  group-hover/menu-parent:block ">
            <div className="flex gap-x-2 w-full  my-0 mx-auto py-5">
                <div className="">
                    <ul className=" flex flex-col gap-y-4 text-left pl-4">
                        <li>
                            <Link href={"#"}>Blog Left Sidebar</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Blog Right Sidebar</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Blog Without Sidebar</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Blog List View</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Blog Detail Left Siderbar</Link>
                        </li>
                    </ul>


                </div>

            </div>
        </div>
    )
}