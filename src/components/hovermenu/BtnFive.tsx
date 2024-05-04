import Link from "next/link"
export default function BtnFive() {
    return (
        <div className="w-[270px] border-2 border-[#e7e8eb] bg-white z-[999] hoverbtn5 absolute top-full hidden  group-hover/menu-parent:block ">
            <div className="flex gap-x-2 w-full  my-0 mx-auto py-5">
                <div className="">
                    <ul className=" flex flex-col gap-y-4 text-left pl-4">
                        <strong className="mb-3">new btn4</strong>
                        <li>
                            <Link href={"#"}>asdas</Link>
                        </li>
                        <li>
                            <Link href={"#"}>asdasdas</Link>
                        </li>
                        <li>
                            <Link href={"#"}>asdasd</Link>
                        </li>
                        <li>
                            <Link href={"#"}>adasd</Link>
                        </li>
                        <li>
                            <Link href={"#"}>asdas</Link>
                        </li>
                    </ul>


                </div>

            </div>
        </div>
    )
}