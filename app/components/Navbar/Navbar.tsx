import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  return (
    <nav className="flex items-center text-foreround border-b-2 relative justify-between px-5 py-5 h-max w-screen font-bold z-10">
      <h2 className="uppercase text-xl">Website name</h2>
      <div className="hidden md:flex gap-5 uppercase">
        <Link href="#home">Accueil</Link>
        <Link href="#aboutme">A propos</Link>
        <Link href="#services">Soins</Link>
        <Link href="#packs">Packs</Link>
        <Link href="#notice">Avis</Link>
        <Link href="#faq">FAQ</Link>
      </div>
      <button onClick={() => setActive(!isActive)} className="md:hidden flex">
        <Icon fontSize={24} icon="material-symbols:menu-rounded" />
      </button>
      <div
        className={
          isActive
            ? `flex flex-col h-max w-full absolute top-18 gap-2 bg-background left-0 p-3`
            : `hidden`
        }
      >
        <Link
          className="hover:px-2 active:px-2 transition-padding duration-500 ease border-b-2 py-2"
          href="#home"
        >
          Accueil
        </Link>
        <Link
          className="hover:px-2 active:px-2 transition-padding duration-500 ease border-b-2 py-2"
          href="#aboutme"
        >
          A propos
        </Link>
        <Link
          className="hover:px-2 active:px-2 transition-padding duration-500 ease border-b-2 py-2"
          href="#services"
        >
          Soins
        </Link>
        <Link
          className="hover:px-2 active:px-2 transition-padding duration-500 ease border-b-2 py-2"
          href="#packs"
        >
          Packs
        </Link>
        <Link
          className="hover:px-2 active:px-2 transition-padding duration-500 ease border-b-2 py-2"
          href="#notice"
        >
          Avis
        </Link>
        <Link
          className="hover:px-2 active:px-2 transition-padding duration-500 ease border-b-2 py-2"
          href="#faq"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
