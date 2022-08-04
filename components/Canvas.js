import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import initOciliator from '../scripts/osciliator';

export default function Canvas() {
  const { theme, setTheme } = useTheme();
  // Initiate Ociliator animation
  useEffect(() => {
    window.addEventListener('focus', () => initOciliator(false, theme));
    initOciliator(false, theme);
  }, [theme]);

  return (
    <canvas className="!absolute !left-0 !-z-10 bg-white dark:bg-[#1D1D1D]" id="canvas"></canvas>
  );
}
