import Link from "next/link";
import logoImg from "@/assets/tic-tac-toe2.png";
import Image from "next/image";
import NavLink from "./UI/NavLink";

const MainHeader = () => {
  return (
    <header className="flex justify-between items-center p-8 md:px-40">
      <Link className="flex items-center justify-center gap-8 text-blue-900 text-3xl font-bold font-family: Montserrat, serif uppercase" href="/">
        <Image className="w-20 h-20 object-contain drop-shadow-md" src={logoImg} alt="A plate with food on it" priority />
        My Next Level Games
      </Link>
      <nav>
        <ul className="flex gap-6 list-none m-0 p-0 text-lg">
          <li>
            <NavLink href="/games" >Browse games</NavLink>
          </li>
          {/* <li>
            <Link className="text-[#4468ca] text-xl px-4 py-2 rounded-lg hover:text-[#4a65af]" href="/community">Community</Link>
          </li> */}
          <li>
            <NavLink href="/register">Register</NavLink>
          </li>
          <li>
            <NavLink href="/logIn">Log In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader;