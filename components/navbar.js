import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="navBar">
            <div className="navBar__logo">
                <Image src="/images/pokeball.png" width="30" height="30" alt="pokedex" />
                <h1> Pokedex </h1>
            </div>
            <ul className="navBar__link-itens">
                <li>
                    <Link href="/" >
                        <a> Home </a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" >
                        <a> Sobre </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}