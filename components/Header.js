import Logo from './Logo';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon } from '@heroicons/react/solid';
import { MoonIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="transition duration-300 backdrop-blur-md bg-slate-50/30  text-zinc-600 dark:bg-zinc-600/30 dark:text-zinc-400 border-b dark:border-zinc-600">
      <nav className="flex space-x-5 items-center justify-center">
        <Logo />
        <Link
          href="/blog"
          className={
            currentRoute.includes('/blog')
              ? 'active link hover:text-black dark:hover:text-white '
              : 'link hover:text-black dark:hover:text-white'
          }
        >
          Blog
        </Link>
        <div className="flex items-center justify-center transition duration-300">
          <button
            className="rounded w-16"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <MoonIcon className="h-6" /> : <SunIcon className="h-7" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
