'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

export interface ContextType {
  SidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType>({
  SidebarOpen: true,
  setSidebarOpen: () => {},
});

export const DashboardStateProvider = ({ children }: PropsWithChildren) => {
  const [SidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <Context.Provider value={{ SidebarOpen, setSidebarOpen }}>
      {children}
    </Context.Provider>
  );
};

export default function useDashboardState() {
  return useContext(Context);
}
