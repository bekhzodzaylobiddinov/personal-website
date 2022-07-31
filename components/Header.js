import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-800 text-zinc-400 opacity-90 border-b border-zinc-600">
      <nav className="flex px-5 space-x-5 items-center justify-end">
        <Logo />
        <Link href="#">
          <a className="link hover:text-lime-500 active:text-white">About</a>
        </Link>
        <Link href="#">
          <a className="link hover:text-lime-500 active:text-white">
            Experience
          </a>
        </Link>
        <Link href="#">
          <a className="link hover:text-lime-500 active:text-white">Contact</a>
        </Link>
        <Link href="#">
          <a className="link hover:text-lime-500 active:text-white">Resume</a>
        </Link>
      </nav>
    </header>
  );
}
