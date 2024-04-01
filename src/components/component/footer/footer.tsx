import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { GoClock } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaApplePay } from "react-icons/fa6";
import imgPay from "../../../../public/images/og__dq5nejr4bg02_image-864x454.webp"
import imgDis from "../../../../public/images/OIP.jpg"
import imgCard from "../../../../public/images/Mastercard-Logo-1979.png"
import imgVisa from "../../../../public/images/OIP (1).jpg"
import { IconType } from "react-icons";
function MyIcon({icon:Icon,text}:{icon:IconType, text:string}) {
    return(
        <Link href={"#"} title={text} className="text-white">
            <Icon />
            
            </Link>
    )
}
function MyImage({mysrc}:{mysrc:StaticImageData}) {
    return(
        <Image className="border-2 border-black" src= {mysrc} alt="logo" width={40} height={20} />
    )
}
export default function Footer() {
    return(
        <footer>
            <div className="bg-neutral-100 py-20">
                <div className="max-w-[1320px] flex my-0 mx-auto">
            <nav className="text-left w-2/6">
                <strong>
                    <h4 className="mb-6 text-xl">CONTACT US</h4>
                </strong>
                <ul className="flex flex-col gap-y-3">
                    <li className="mb-5 text-base">Morbi ullamcorper ligula sit amet effictur pellentesque.
                    Aliquam ornare quam tellus ultricies molestie tortor.</li>
                    
                    <li className="flex  text-center gap-x-4 itemfooter">
                        <FiPhoneCall/>
                        <strong>HOTLINE:+123-456-789</strong>
                    </li>
                    <li className="flex  text-center itemfooter gap-x-4">
                        <CgMail/>
                        infor@example.com
                    </li>
                    <li className=" flex text-center gap-x-4 itemfooter">
                        <GoClock/>
                        Monday - Friday 9am - 6pm
                    </li>
                </ul>
            </nav>
            <nav className="text-left w-1/6">
                <strong>
                    <h4 className="mb-6 text-xl">GELP</h4>
                </strong>
                <ul className="flex flex-col gap-y-[10px]">
                    <li>Help Center</li>
                    <li>Shipping Info</li>
                    <li>
                        Returns
                    </li>
                    <li>
                       How To Order
                    </li>
                    <li>
                        How To Track
                    </li>
                    <li>Size Guide</li>
                </ul>
            </nav>
            <nav className="text-left w-1/6">
                <strong>
                    <h4 className="mb-6 text-xl">COMPANY</h4>
                </strong>
                <ul className="flex flex-col gap-y-[10px]">
                    <li>About Us</li>
                    <li>Our blog</li>
                    <li>Careere</li>
                    <li>Store Locations</li>
                    <li>Testimonial</li>
                    <li>Sitemap</li>
                </ul>
            </nav>
            <nav className="text-left w-2/6">
                <strong>
                    <h4 className="mb-6 text-xl">NEWSLETTER</h4>
                </strong>
                <ul className="flex flex-col gap-y-[20px]">
                    <li>Get 15% off your first purchaxse! plus, be the first to know about 
                        sales new product launches and exclusive offers!</li>
                    <li>Email can not be blank.</li>
                    <li className="">
                        <input className="py-4 pl-3 w-full rounded-2xl border-black border-2" type="gmail" placeholder="Your Email Address"/>
                    </li>
                    <ul className="flex gap-x-3 ">
                        
                        
                        <li className="p-2 bg-black hover:bg-red-500 rounded-full">
                            <MyIcon icon={BsFacebook} text="abc" />
                        </li>
                        <li className="p-2 bg-black hover:bg-red-500 rounded-full">
                            <MyIcon icon={FaPinterest} text="abc" />
                        </li>
                        <li className="p-2 bg-black hover:bg-red-500 rounded-full">
                            <MyIcon icon={FaSquareInstagram} text="abc" />
                        </li>
                        <li className="p-2 bg-black hover:bg-red-500 rounded-full">
                            <MyIcon icon={AiFillTwitterCircle} text="abc" />
                        </li>
                        <li className="p-2 bg-black hover:bg-red-500 rounded-full">
                            <MyIcon icon={FaTiktok} text="abc" />
                        </li>
                        

                    </ul>
                    
                </ul>
            </nav>
            </div>
            </div>
            <div className="max-w-[1320px] flex my-0 mx-auto py-10 justify-between">
                <div className="w-1/2">
                    <h4>&copy; 2024 NOVA-CREATIVE THEME</h4>
                </div>
                <div className="flex w-1/2 justify-end gap-x-2">                    
                    <MyImage mysrc={imgPay} />
                    <MyImage mysrc={imgDis}/>
                    <MyImage mysrc={imgCard}/>                   
                    <MyImage mysrc={imgVisa}/>
                </div>
            </div>
        </footer>
    )
}