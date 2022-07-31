import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-zinc-400 opacity-90 border-t border-zinc-600 w-full absolute bottom-0 flex justify-center p-3">
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} Zokir Rakhimov
      </p>
    </footer>
  );
}
