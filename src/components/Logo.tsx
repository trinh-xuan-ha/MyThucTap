import Image from "next/image";
import logo from "../../public/images/logo-1.webp";
export default function Logo() {
  return (
    <Image
      className="max-w-max"
      src={logo}
      alt="logo"
      width={200}
      height={80}
    />
  );
}
