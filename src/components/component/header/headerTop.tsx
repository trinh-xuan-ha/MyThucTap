import { MdPhoneInTalk } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import Link from "next/link";
import { Jost } from "next/font/google";

const Fjost = Jost({
    subsets: ["cyrillic"],
    weight: ["400"],
});
export default function HeaderTop() {
    return (
        <div className="flex items-center justify-between px-12 min-h-[60px] border-b-2 border-b-[#e8e8e8]">
            <div
                className={`${Fjost.className} flex items-center gap-x-6 text-[16px] flex-1`}
            >
                <div className="flex items-center gap-x-2">
                    <MdPhoneInTalk className="text-xl" />
                    <Link
                        href={"tel:+0327761969"}
                        className="hover:text-[#fb5300] transition-colors duration-300"
                    >
                        +03287761969
                    </Link>
                </div>
                <div className="flex items-center gap-x-2">
                    <CgMail className="text-xl text-black" />
                    <Link
                        className={`flex hover:text-[#fb5300] transition-colors duration-300`}
                        href={"mailto:trinhxuanha@gmail.com"}
                    >
                        trinhxuanha@gmail.com
                    </Link>
                </div>
            </div>
            <div className="flex items-center flex-grow-0 checkin">
                <strong>
                    FREE SHOPPING FOR ORDER ABOVE $200.
                    <Link
                        href={"#"}
                        className="hover:text-[#fb5300] transition-colors duration-300"
                    >
                        SHOW NOW!
                    </Link>
                </strong>
            </div>
            <div
                className={`${Fjost.className} flex flex-1 justify-end items-center text-[16px] gap-x-12`}
            >
                <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    Phu cu, Hung Yen, Viet Nam
                </div>
                <div className="flex items-center gap-x-5">
                    <div className="flex items-center ">
                        <button className="flex items-center gap-x-2 hover:text-[#fb5300] transition-colors duration-300 ">
                            English
                            <FaCaretDown className="mb-1" />
                        </button>
                    </div>
                    <div>
                        <button className="flex items-center gap-x-2 hover:text-[#fb5300] transition-colors duration-300">
                            USD
                            <FaCaretDown className="mb-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
