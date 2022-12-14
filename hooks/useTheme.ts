import { useEffect, useState } from 'react';

export const useTheme = (): [string | undefined] => {
  const [currentTheme, setCurrentTheme] = useState<string>();

  useEffect(() => {
    const dataset = document.documentElement.dataset;
    const observer = new MutationObserver((mutations) => {
      setCurrentTheme(dataset.seedTheme);
    });
    observer.observe(document.documentElement, {
      attributes: true,
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return [currentTheme];
};
