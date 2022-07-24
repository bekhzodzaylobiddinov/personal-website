import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex px-5 space-x-5 items-center justify-end border">
        <Logo />
        <Link href="/about">
          <a className="link">About</a>
        </Link>
        <Link href="https://about.google/">
          <a className="link">Experience</a>
        </Link>
        <Link href="https://about.google/">
          <a className="link">Contact</a>
        </Link>
        <Link href="https://about.google/">
          <a className="link">Resume</a>
        </Link>
      </nav>
    </header>
  );
}
