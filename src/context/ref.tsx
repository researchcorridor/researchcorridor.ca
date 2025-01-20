'use client';

import {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef,
} from 'react';

export interface RefContextType {
  aboutRef: RefObject<HTMLDivElement | null>;
}

export const Context = createContext<RefContextType>({
  aboutRef: { current: null },
});

export function RrfProvider({ children }: PropsWithChildren) {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <Context.Provider
      value={{
        aboutRef,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default function useRefContext() {
  return useContext(Context);
}

export function scrollIntoView(ref: RefObject<HTMLDivElement | null>) {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
}
