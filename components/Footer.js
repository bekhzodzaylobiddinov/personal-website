import React from "react";

export default function Footer({ absolute = true }) {
  return absolute ? (
    <footer>
      <div className="absolute bottom-0 bg-white dark:bg-zinc-800 text-zinc-400 opacity-90 border-t dark:border-zinc-600 w-full flex justify-center p-3 transition duration-300">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} Zokir Rakhimov
        </p>
      </div>
    </footer>
  ) : (
    <footer className="mt-10">
      <div className="bg-white dark:bg-zinc-800 text-zinc-400 opacity-90 border-t dark:border-zinc-600 w-full flex justify-center p-3 transition duration-300">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} Zokir Rakhimov
        </p>
      </div>
    </footer>
  );
}
