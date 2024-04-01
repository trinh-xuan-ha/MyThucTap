import Image from "next/image"
import logo from "../../public/images/logo-1.webp"
export default function Logo() {
    return (
        <Image className="max-w-max"
        src={logo}
        alt="logo"  
        width={200}
        height={80}  
        />
    )

    
}
{/* <div>
                <Link href="#" className="max-w-[165px]">
            <Logo/>

                </Link>
            </div>
            <div className="flex">
            <div>
                <Link href="#" className="flex items-center">
                    <IoIosSearch/>
                    Search
                </Link>
            </div>
            <div>
            <Link href="#" className="flex items-center">
                <FaUser/>
                Account
            </Link>

            </div>
            <div>
            <Link href="#" className="flex items-center">
                <IoMdHeart/>
                Wishlist
            </Link>

            </div>
            <div>
            <Link href="#" className="flex items-center">
                <IoCartOutline/>
                Cart
            </Link>

            </div>
            </div> */}