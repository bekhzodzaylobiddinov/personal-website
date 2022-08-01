import Logo from "./Logo";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="bg-zinc-800 text-zinc-400 opacity-90 border-b border-zinc-600">
      <nav className="flex px-5 space-x-5 items-center justify-end">
        <Logo />
        <Link href="#">
          <a className="link hover:text-white active:text-purple-500">About</a>
        </Link>
        <Link href="#">
          <a className="link hover:text-white active:text-purple-500">
            Experience
          </a>
        </Link>
        <Link href="#">
          <a className="link hover:text-white active:text-purple-500">
            Contact
          </a>
        </Link>
        <Link href="#">
          <a className="link hover:text-white active:text-purple-500">Resume</a>
        </Link>
        <div className="flex items-center justify-center">
          <button
            className="rounded p-2"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Toggle to {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </nav>
    </header>
  );
}
