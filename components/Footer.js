import React from 'react';

export default function Footer({ absolute = true }) {
  return absolute ? (
    <footer>
      <div className="absolute bottom-0  text-zinc-400 opacity-90 w-full flex justify-center p-3 transition duration-300">
        <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Zokir Rakhimov</p>
      </div>
    </footer>
  ) : (
    <footer className="mt-10">
      <div className=" text-zinc-400 opacity-90 w-full flex justify-center p-3 transition duration-300">
        <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Zokir Rakhimov</p>
      </div>
    </footer>
  );
}
