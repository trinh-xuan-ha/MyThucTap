import HeaderTop from "./headerTop"
import Menu from "@/components/menu"
// import Menus from "@/components/jaja"
export default function Header() {
    return(
        <header className="menuhover">
            <HeaderTop />
            <Menu />
        </header>
    )
}