import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-800 text-zinc-400">
      <nav className="flex px-5 space-x-5 items-center justify-end">
        <Logo />
        <Link href="#">
          <a className="link">About</a>
        </Link>
        <Link href="#">
          <a className="link">Experience</a>
        </Link>
        <Link href="#">
          <a className="link">Contact</a>
        </Link>
        <Link href="#">
          <a className="link">Resume</a>
        </Link>
      </nav>
    </header>
  );
}
