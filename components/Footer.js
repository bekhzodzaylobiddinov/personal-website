import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-800 text-zinc-400 opacity-90 border-t dark:border-zinc-600 w-full absolute bottom-0 flex justify-center p-3 transition duration-300">
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} Zokir Rakhimov
      </p>
    </footer>
  );
}
