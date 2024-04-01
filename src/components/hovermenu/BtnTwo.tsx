import Image from "next/image"
import Link from "next/link"
import Myimage from"../../../public/images/menu_330x320.webp"
export default function BtnTwo() {
    return(
        <div className="w-full bg-white z-10 dropmenu absolute">
            <div className="flex gap-x-2 w-[1510px] my-0 mx-auto py-5">
                <div className="w-3/4 flex">
                    <ul className="w-1/4 flex flex-col gap-y-4 text-left">
                        <strong className="mb-3">COOLECVTION PAGE</strong>
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
                    <ul className=" w-1/4 flex flex-col gap-y-4 text-left">
                        <strong className="mb-3">COOLECVTION PAGE</strong>
                        <li>
                            <Link href={"#"}>asdasd</Link>
                        </li>
                        <li>
                            <Link href={"#"}>asdasd</Link>
                        </li>
                        <li>
                            <Link href={"#"}>asdasdas</Link>
                        </li>
                        <li>
                            <Link href={"#"}>adasda</Link>
                        </li>
                        <li>
                            <Link href={"#"}>asdasdas</Link>
                        </li>
                    </ul>
                    <ul className="w-1/4 flex flex-col gap-y-4 text-left">
                        <strong className="mb-3">COOLECVTION PAGE</strong>
                        <li>
                            <Link href={"#"}>sadasdasdasdas</Link>
                        </li>
                        <li>
                            <Link href={"#"}>adsasdadasdas</Link>
                        </li>
                        <li>
                            <Link href={"#"}>adadasdasdasd</Link>
                        </li>
                        <li>
                            <Link href={"#"}>adasdasdasd</Link>
                        </li>
                        <li>
                            <Link href={"#"}>asdasdasdas</Link>
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
    )
}