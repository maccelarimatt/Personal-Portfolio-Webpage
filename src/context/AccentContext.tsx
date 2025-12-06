import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type AccentMode = 'ocean' | 'aurora';

interface AccentContextValue {
  accent: AccentMode;
  toggleAccent: () => void;
}

const AccentContext = createContext<AccentContextValue | undefined>(undefined);

interface AccentProviderProps {
  children: ReactNode;
}

export const AccentProvider = ({ children }: AccentProviderProps) => {
  const [accent, setAccent] = useState<AccentMode>('ocean');

  useEffect(() => {
    const root = document.documentElement;
    if (accent === 'aurora') {
      root.classList.add('accent-alt');
    } else {
      root.classList.remove('accent-alt');
    }
  }, [accent]);

  const value = useMemo(
    () => ({
      accent,
      toggleAccent: () => setAccent((prev) => (prev === 'ocean' ? 'aurora' : 'ocean')),
    }),
    [accent],
  );

  return <AccentContext.Provider value={value}>{children}</AccentContext.Provider>;
};

export const useAccent = () => {
  const ctx = useContext(AccentContext);
  if (!ctx) {
    throw new Error('useAccent must be used within AccentProvider');
  }
  return ctx;
};
