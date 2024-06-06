import Link from "next/link";
import logoImg from "@/assets/tic-tac-toe.png";
import Image from "next/image";
import Register from './../app/register/page';

const MainHeader = () => {
  return (
    <header className="flex justify-between items-center p-8 md:px-40">
      <Link className="flex items-center justify-center gap-8 text-[#4468ca] font-bold uppercase text-xl tracking-widest" href="/">
        <Image className="w-20 h-20 object-contain drop-shadow-md" src={logoImg} alt="A plate with food on it" priority />
        My Next Level Games
      </Link>
      <nav>
        <ul className="flex gap-6 list-none m-0 p-0 text-lg">
          <li>
            <Link className="text-[#4468ca] text-xl px-4 py-2 rounded-lg hover:text-[#4a65af]" href="/games">Browse games</Link>
          </li>
          <li>
            <Link className="text-[#4468ca] text-xl px-4 py-2 rounded-lg hover:text-[#4a65af]" href="/community">Community</Link>
          </li>
          <li>
            <Link className="text-[#4468ca] text-xl px-4 py-2 rounded-lg hover:text-[#4a65af]" href="/register">Register</Link>
          </li>
          <li>
            <Link className="text-[#4468ca] text-xl px-4 py-2 rounded-lg hover:text-[#4a65af]" href="/logIn">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader;