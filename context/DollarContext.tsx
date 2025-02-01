import { useDollarQuery } from '@/hooks/useDollarQuery';
import { createContext, useContext, ReactNode } from 'react';

const DollarContext = createContext<any>(null);

export const useDollarContext = () => {
  return useContext(DollarContext);
};

export const DollarProvider = ({ children }: { children: ReactNode }) => {
  const dollarQuery = useDollarQuery();

  return <DollarContext.Provider value={dollarQuery}>{children}</DollarContext.Provider>;
};
