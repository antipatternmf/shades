import { useLayoutEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'primary');

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
